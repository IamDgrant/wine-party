from flask import Blueprint, jsonify, request
from flask_login import login_required
from sqlalchemy import or_
from app.forms import SearchForm
from app.models import Host, db

host_routes = Blueprint('hosts', __name__)


@host_routes.route('/')
# @login_required
def hosts():
    hosts = Host.query.all()
    return {"hosts": [host.to_dict() for host in hosts]}


@host_routes.route('/search', methods=['POST'])
# @login_required
def hosts_search():
    hosts = Host.query.all()
    form = SearchForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        search = form.data['search']
        sommelier = form.data['sommelier']
        mixologist = form.data['mixologist']
        # print("YES!!!!!!!!!!", search.to_dict(),
        #       sommelier.to_dict(), mixologist.to_dict())
        # data = Host.query.filter(Host.firstName == search).all()
        data = Host.query.filter(or_(
            Host.firstName == search, Host.lastName == search, Host.state == search)).all()
    return {"hosts": [host.to_dict() for host in data]}


@ host_routes.route('/<id>')
@ login_required
def host(id):
    host = Host.query.get(id)
    return host.to_dict()


@ host_routes.route('/event/<id>')
# @login_required
def event_hosts(id):
    hosts = Host.query.filter_by(eventId=id).all()
    return {"hosts": [host.to_dict() for host in hosts]}


@ host_routes.route('/<id>', methods=['DELETE'])
def delete_host(id):
    host = Host.query.filter_by(id=id).first()
    # return {"hosts": [host.to_dict() for host in hosts]}
    db.session.delete(host)
    db.session.commit()
    return host.to_dict()
