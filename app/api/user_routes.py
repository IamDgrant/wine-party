from flask import Blueprint, jsonify, request, Flask, render_template, request, redirect
from flask_login import login_required, current_user
from werkzeug.utils import secure_filename
from ..aws_s3 import *
from app.models import User, db
from app.forms import UpdateFirstNameForm
from flask_login import current_user, login_user, logout_user, login_required
from wtforms.validators import DataRequired, Email, ValidationError

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

# @task_routes.route('/update/<id>', methods=['POST'])
# @login_required
# def update_user(id):
#     user = User.query.filter_by(id=id).first()
#     update = request.data.decode("utf-8")
#     updated = ast.literal_eval(update)
#     if "status" in updated.keys():
#         status = updated["status"]
#         task.status = status
#     if "priority" in updated.keys():
#         priority = updated["priority"]
#         task.priority = priority
#     if "desc" in updated.keys():
#         desc = updated["desc"]
#         task.description = desc

#     db.session.commit()

#     return task.to_dict()


# @user_routes.route('/update', methods=['POST'])
# # @login_required
# def update_user():
#     form = UpdateFirstNameForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     print("HERE I AM", current_user.to_dict())
#     if form.validate_on_submit():
#         print("DATA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", form.data)
#         print("IN!!!!!!!!!!!!!!!!!!!")
#         user = User(
#             first_name=form.data['first_name'],
#         )
#         db.session.add(user)
#         print("USER!!!!!!!!!!!!!!!!!!", user)
#         db.session.commit()
#         return user.to_dict()
#     return('Invalid Info')


# def update_user():
#     form = UpdateFirstNameForm()
#     # form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         user = User(
#             first_name=form.data['first_name'],
#             # last_name=form.data['last_name'],
#             # city=form.data['city'],
#             # state=form.data['state'],
#             # postal_code=form.data['postal_code'],
#             # email=form.data['signUpEmail'],
#             # password=form.data['signUpPassword']
#         )
#         db.session.add(user)
#         db.session.commit()
#         return user.to_dict()
#     return {'errors': validation_errors_to_error_messages(form.errors)}
#     return('Invalid Info')


ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}


def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@user_routes.route('/update/profile', methods=['POST'])
@login_required
def update_profile():

    if "user_file" not in request.files:

        return "No user_file key in request.files"

    file = request.files["user_file"]

    if file.filename == "":
        return "Please select a file"

    if file and allowed_file(file.filename):
        file.filename = secure_filename(file.filename)
        output = upload_file_to_s3(file)
        # print("HERE!!!!!!!!!!!!", current_user.to_dict())
        current_user.profile_image = str(output)
        db.session.add(current_user)
        db.session.commit()
        return {"url": str(output)}

    else:
        return redirect("/")
