from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Event, db
from app.forms import EventForm
import ast

event_routes = Blueprint('events', __name__)


@event_routes.route('/')
@login_required
def events():
    events = Event.query.filter_by(
        user_id=current_user.id).order_by(Event.event_date)
    return {"events": [event.to_dict() for event in events]}


@event_routes.route('/', methods=['POST'])
@login_required
def create_event():
    form = EventForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        event = Event(
            user_id=current_user.id,
            host_id=form.data['selectedHostId'],
            event_name=form.data['event_name'],
            event_date=form.data['event_date'],
            event_city=form.data['event_city'],
            event_state=form.data['event_state'],
        )
        db.session.add(event)
        db.session.commit()
        return event.to_dict()
    return('Invalid Info')


@event_routes.route('/update/<id>', methods=['PUT'])
@login_required
def update_event(id):
    event = Event.query.filter_by(id=id).first()
    update = request.get_json()
    event.selectedHostId = update["host_id"]
    event.event_name = update["event_name"]
    event.event_date = update["event_date"]
    event.event_city = update["event_city"]
    event.event_state = update["event_state"]
    event.event_postal_code = update["event_postal_code"]

    db.session.commit()
    return {"event": event.to_dict()}


@event_routes.route('/<id>', methods=['DELETE'])
def delete_event(id):
    event = Event.query.filter_by(id=id).first()
    db.session.delete(event)
    db.session.commit()
    return {"events": [event.to_dict() for event in events]}
    # return event.to_dict()
