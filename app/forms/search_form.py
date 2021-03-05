from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, SubmitField
from wtforms.validators import DataRequired


class SearchForm(FlaskForm):
    search = StringField("search")
    sommelier = BooleanField("sommelier")
    mixologist = BooleanField("mixologist")
    submit = SubmitField("Submit")