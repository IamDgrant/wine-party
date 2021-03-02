from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Host

host_routes = Blueprint('hosts', __name__)

@host_routes.route('/')
@login_required
def hosts():
    hosts = Host.query.all()
    return {"hosts": [host.to_dict() for host in hosts]}


@host_routes.route('/<int:id>')
@login_required
def host(id):
    host = Host.query.get(id)
    return host.to_dict()

