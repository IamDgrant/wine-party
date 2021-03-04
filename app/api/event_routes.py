from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Event, db
from app.forms import EventForm
import ast

event_routes = Blueprint('events', __name__)


@event_routes.route('/')
# @login_required
def events():
    events = Event.query.filter_by(userId=current_user.id)
    return {"events": [event.to_dict() for event in events]}


# @event_routes.route('/project/<id>')
# @login_required
# def project_events(id):
#     events = Event.query.filter_by(projectId=id).all()
#     return {"events": [event.to_dict() for event in events]}


# @event_routes.route('/<id>')
# def event(id):
#     events = Event.query.filter_by(dueDate=id).all()
#     return {"events": [event.to_dict() for event in events]}


@event_routes.route('/', methods=['POST'])
# @login_required
def create_event():
    form = EventForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print("HERE I AM", current_user.to_dict())
    if form.validate_on_submit():
        event = Event(
            userId=current_user.id,
            eventName=form.data['eventName'],
            eventDate=form.data['eventDate'],
            city=form.data['city'],
            state=form.data['state'],
        )
        db.session.add(event)
        db.session.commit()
        return event.to_dict()
    return('Invalid Info')


@event_routes.route('/<id>', methods=['DELETE'])
def delete_event(id):
    event = Event.query.filter_by(id=id).first()
    # return {"events": [event.to_dict() for event in events]}
    db.session.delete(event)
    db.session.commit()
    return event.to_dict()


@event_routes.route('/update/<id>', methods=['POST'])
@login_required
def update_event(id):
    event = Event.query.filter_by(id=id).first()
    update = request.data.decode("utf-8")
    updated = ast.literal_eval(update)
    if "status" in updated.keys():
        status = updated["status"]
        event.status = status
    if "priority" in updated.keys():
        priority = updated["priority"]
        event.priority = priority
    if "desc" in updated.keys():
        desc = updated["desc"]
        event.description = desc

    db.session.commit()

    return event.to_dict()
