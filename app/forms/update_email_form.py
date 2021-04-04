from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, BooleanField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User

class UpdateEmailForm(FlaskForm):
    email = StringField('signInEmail')
    submit = SubmitField("Submit")