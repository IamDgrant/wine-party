from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, BooleanField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User



class UpdatePostalCodeForm(FlaskForm):
    postal_code = StringField('postal_code')
    submit = SubmitField("Submit")