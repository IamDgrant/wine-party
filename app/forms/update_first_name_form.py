from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, BooleanField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


class UpdateFirstNameForm(FlaskForm):
    first_name = StringField('first_name')
    submit = SubmitField("Submit")
