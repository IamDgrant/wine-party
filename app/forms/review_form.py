from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired


class ReviewForm(FlaskForm):
    rating = IntegerField("rating", validators=[DataRequired()])
    comment = StringField("comment", validators=[DataRequired()])
    submit = SubmitField("Submit")
