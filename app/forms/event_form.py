from flask_wtf import FlaskForm
from wtforms import StringField, DateField, SubmitField
from wtforms.validators import DataRequired


class EventForm(FlaskForm):
    eventName = StringField("eventName", validators=[DataRequired()])
    eventDate = DateField("eventDate", validators=[DataRequired()])
    city = StringField("city", validators=[DataRequired()])
    state = StringField("state", validators=[DataRequired()])
    submit = SubmitField("submit")
