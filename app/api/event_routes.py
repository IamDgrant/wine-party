from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Event, db
from app.forms import EventForm
import ast

event_routes = Blueprint('events', __name__)


@event_routes.route('/')
@login_required
def events():
    events = Event.query.filter_by(user_id=current_user.id).order_by(Event.event_date)
    return {"events": [event.to_dict() for event in events]}

# @event_routes.route('/')
# @login_required
# def host_events():
#     events = Event.query.filter_by(user_id=current_user.id)
#     [{**event.to_dict(), {'host_id':event.host.to_dict()}} for event in events]
#     return {"events": [event.to_dict() for event in events]}


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
@login_required
def create_event():
    form = EventForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print("HERE I AM", current_user.to_dict())
    if form.validate_on_submit():
        event = Event(
            user_id=current_user.id,
            event_name=form.data['event_name'],
            event_date=form.data['event_date'],
            event_city=form.data['event_city'],
            event_state=form.data['event_state'],
        )
        db.session.add(event)
        db.session.commit()
        return event.to_dict()
    return('Invalid Info')

@event_routes.route('/update', methods=['PUT'])
@login_required
def update_event():
    print(current_user)
    event = current_user
    update = request.get_json()
    user.event_name = update["event_name"]
    # user.last_name = update["last_name"]
    # user.email = update["signInEmail"]
    # user.phone_number = update["phone_number"]
    # user.birthday = update["birthday"]
    # user.about = update["about"]

    db.session.commit()
    return {"user": event.to_dict()}


@event_routes.route('/<id>', methods=['DELETE'])
def delete_event(id):
    print('IT HITTING')
    event = Event.query.filter_by(id=id).first()
    # return {"events": [event.to_dict() for event in events]}
    db.session.delete(event)
    db.session.commit()
    return event.to_dict()
