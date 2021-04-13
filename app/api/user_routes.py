from flask import Blueprint, jsonify, request, Flask, render_template, request, redirect
from flask_login import login_required, current_user
from werkzeug.utils import secure_filename
from ..aws_s3 import *
from app.models import User, db
from flask_login import current_user, login_user, logout_user, login_required
from wtforms.validators import DataRequired, Email, ValidationError
# import json

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


@user_routes.route('/update', methods=['PUT'])
@login_required
def update_user():
    user = current_user
    update = request.get_json()
    user_db = User.query.get(current_user.id)
    # print("HERE!!!!!!!!!!!!!!!!!!!!!!", current_user.to_dict())
    user.first_name = update["first_name"]
    user.last_name = update["last_name"]

    if "signInEmail" in update:
        if update["signInEmail"] != user.email:
            user.email = update["signInEmail"]
        else:
            pass
    if "phone_number" in update:
        if update["phone_number"] != user.phone_number:
            user.phone_number = update["phone_number"]
        else:
            pass
    if "about" in update:
        if update["about"] != user.about:
            user.about = update["about"]
        else:
            pass
    if "birthday" in update:
        if update["birthday"] != user.birthday:
            user.birthday = update["birthday"]
        else:
            pass
    # if "street" in update:
    #     if update["street"] != user.street:
    #         user.street = update["street"]
    #     else:
    #         pass
    if "city" in update:
        if update["city"] != user.city:
            user.city = update["city"]
        else:
            pass
    if "state" in update:
        if update["state"] != user.state:
            user.state = update["state"]
        else:
            pass
    if "postal_code" in update:
        if update["postal_code"] != user.postal_code:
            user.postal_code = update["postal_code"]
        else:
            pass

    db.session.commit()
    return {"user": user.to_dict()}


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
        current_user.profile_image = str(output)
        db.session.add(current_user)
        db.session.commit()
        return {"url": str(output)}

    else:
        return redirect("/")
