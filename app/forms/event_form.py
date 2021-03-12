from flask_wtf import FlaskForm
from wtforms import StringField, DateField, SubmitField
from wtforms.validators import DataRequired


class EventForm(FlaskForm):
    event_name = StringField("event_name", validators=[DataRequired()])
    event_date = DateField("event_date", validators=[DataRequired()])
    event_city = StringField("event_city", validators=[DataRequired()])
    event_state = StringField("event_state", validators=[DataRequired()])
    submit = SubmitField("submit")
