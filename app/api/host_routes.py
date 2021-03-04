from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Host, db

host_routes = Blueprint('hosts', __name__)

@host_routes.route('/')
# @login_required
def hosts():
    hosts = Host.query.all()
    return {"hosts": [host.to_dict() for host in hosts]}


@host_routes.route('/<id>')
# @login_required
def host(id):
    host = Host.query.get(id)
    return host.to_dict()

@host_routes.route('/<id>')
@login_required
def event_hosts(id):
    hosts = Host.query.filter_by(eventId=id).all()
    return {"hosts": [host.to_dict() for host in hosts]}

@host_routes.route('/<id>', methods=['DELETE'])
def delete_host(id):
    host = Host.query.filter_by(id=id).first()
    # return {"hosts": [host.to_dict() for host in hosts]}
    db.session.delete(host)
    db.session.commit()
    return host.to_dict()

