from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, BooleanField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("Email is already registered.")


class SignUpForm(FlaskForm):
    first_name = StringField('first_name', validators=[DataRequired()])
    last_name = StringField('last_name', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), user_exists])
    red = BooleanField('red')
    white = BooleanField('white')
    rose = BooleanField('rosé')
    cabernet_sauvignon = BooleanField('cabernet sauvignon')
    merlot = BooleanField('merlot')
    zinfandel = BooleanField('zinfandel')
    syrah_shiraz = BooleanField('syrah shiraz')
    malbec = BooleanField('malbec')
    pinot_noir = BooleanField('pinot noir')
    sangiovese = BooleanField('sangiovese')
    nebbiolo = BooleanField('nebbiolo')
    chardonnay = BooleanField('chardonnay')
    sauvignon_blanc = BooleanField('sauvignon_blanc')
    semillon = BooleanField('semillon')
    moscato = BooleanField('moscato')
    pinot_grigio = BooleanField('pinot grigio')
    gewurztraminer = BooleanField('gewurztraminer')
    riesling = BooleanField('riesling')
    pinot_noir_rose = BooleanField('pinot noir rose')
    syrah_rose = BooleanField('syrah rose')
    tempranillo_rose = BooleanField('tempranillo rose')
    provence_rose = BooleanField('provence rose')
    tavel_rose = BooleanField('tavel rose')
    mourvedre_rose = BooleanField('mourvedre rose')
    cabernet_sauvignon_rose = BooleanField('cabernet sauvignon rose')
    sangiovese_rose = BooleanField('sangiovese rose')
    grenache_rose = BooleanField('grenache rose')
    zinfandel_rose = BooleanField('zinfandel rose')
    bourbon = BooleanField('bourbon')
    whiskey = BooleanField('whiskey')
    brandy = BooleanField('brandy')
    cognac = BooleanField('cognac')
    gin = BooleanField('gin')
    rum = BooleanField('rum')
    scotch = BooleanField('scotch')
    tequila = BooleanField('tequila')
    vodka = BooleanField('vodka')
    liqueurs = BooleanField('liqueurs')
    password = StringField('password', validators=[DataRequired()])
    submit = SubmitField("Submit")
