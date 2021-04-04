from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, BooleanField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


class UpdateLastNameForm(FlaskForm):
    last_name = StringField('last_name')
    submit = SubmitField("Submit")
