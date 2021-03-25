from flask import Blueprint, jsonify, request
from flask_login import login_required
from sqlalchemy import or_, func
from app.forms import SearchForm
from app.models import Host, db

host_routes = Blueprint('hosts', __name__)


@host_routes.route('')
# @login_required
def hosts():
    hosts = Host.query.all()
    return {"hosts": [host.to_dict() for host in hosts]}

@host_routes.route('/random')
def random_host():
    random = func.random()
    hosts = Host.query.order_by(random).first()
    return hosts.to_dict()


@host_routes.route('/search', methods=['POST'])
@login_required
def hosts_search():
    # print("WORKING!!!!!!!")
    hosts = Host.query.all()
    form = SearchForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        search = form.data['search']
        if search:
            search = search.lower()
        sommelier = form.data['sommelier']
        mixologist = form.data['mixologist']

        if search == "":
            if sommelier == True and mixologist == True:
                data = Host.query.filter((Host.sommelier == True) & (Host.mixologist == True)).order_by(Host.state).order_by(Host.last_name).all()
            elif sommelier == True and mixologist == False:
                data = Host.query.filter((Host.sommelier == True)).all()
            elif mixologist == True and sommelier == False:
                data = Host.query.filter((Host.mixologist == True)).all()
            else:
                data = Host.query.all()
        else: 
            if sommelier == True and mixologist == True:
                data = Host.query.filter(or_(func.lower(Host.first_name).like(f"{search}%"), func.lower(Host.last_name).like(f"{search}%"), func.lower(Host.state).like(f"{search}%"), func.lower(Host.city).like(f"{search}%")) & (Host.sommelier == True) & (Host.mixologist == True)).all()
            elif sommelier == True and mixologist == False:
                data = Host.query.filter(or_(func.lower(Host.first_name).like(f"{search}%"), func.lower(Host.last_name).like(f"{search}%"), func.lower(Host.state).like(f"{search}%"), func.lower(Host.city).like(f"{search}%")) & (Host.sommelier == True)).all()
            elif mixologist == True and sommelier == False:
                data = Host.query.filter(or_(func.lower(Host.first_name).like(f"{search}%"), func.lower(Host.last_name).like(f"{search}%"), func.lower(Host.state).like(f"{search}%"), func.lower(Host.city).like(f"{search}%")) & (Host.mixologist == True)).all()
            else:
                data = Host.query.filter(or_(func.lower(Host.first_name).like(f"{search}%"), func.lower(Host.last_name).like(f"{search}%"), func.lower(Host.state).like(f"{search}%"), func.lower(Host.city).like(f"{search}%")))
        # print("THISSTUFF!!!!", [host.to_dict() for host in data])
        return {"hosts": [host.to_dict() for host in data]}


@ host_routes.route('/<id>')
# @ login_required
def host(id):
    host = Host.query.get(id)
    print(host)
    return host.to_dict()


@ host_routes.route('/event/<id>')
@login_required
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
