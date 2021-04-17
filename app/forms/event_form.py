from flask_wtf import FlaskForm
from wtforms import StringField, DateField, SubmitField, IntegerField
from wtforms.validators import DataRequired


class EventForm(FlaskForm):
    selectedHostId = IntegerField("host_id")
    event_name = StringField("event_name", validators=[DataRequired()])
    event_date = DateField("event_date", validators=[DataRequired()])
    event_city = StringField("event_city", validators=[DataRequired()])
    event_state = StringField("event_state", validators=[DataRequired()])
    event_postal_code = StringField("event_postal_code", validators=[DataRequired()])
    submit = SubmitField("submit")
