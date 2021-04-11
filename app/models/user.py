from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy import DateTime
from datetime import datetime


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    # address = db.Column(db.String)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    postal_code = db.Column(db.String)
    about = db.Column(db.String(300))
    profile_image = db.Column(db.String)
    email = db.Column(db.String(100), nullable=False, unique=True)
    phone_number = db.Column(db.String, unique=True)
    red = db.Column(db.Boolean)
    rose = db.Column(db.Boolean)
    white = db.Column(db.Boolean)
    cabernet_sauvignon = db.Column(db.Boolean)
    merlot = db.Column(db.Boolean)
    zinfandel = db.Column(db.Boolean)
    syrah_shiraz = db.Column(db.Boolean)
    malbec = db.Column(db.Boolean)
    pinot_noir = db.Column(db.Boolean)
    sangiovese = db.Column(db.Boolean)
    nebbiolo = db.Column(db.Boolean)
    chardonnay = db.Column(db.Boolean)
    sauvignon_blanc = db.Column(db.Boolean)
    semillon = db.Column(db.Boolean)
    moscato = db.Column(db.Boolean)
    pinot_grigio = db.Column(db.Boolean)
    gewurztraminer = db.Column(db.Boolean)
    riesling = db.Column(db.Boolean)
    pinot_noir_rose = db.Column(db.Boolean)
    syrah_rose = db.Column(db.Boolean)
    tempranillo_rose = db.Column(db.Boolean)
    provence_rose = db.Column(db.Boolean)
    tavel_rose = db.Column(db.Boolean)
    mourvedre_rose = db.Column(db.Boolean)
    cabernet_sauvignon_rose = db.Column(db.Boolean)
    sangiovese_rose = db.Column(db.Boolean)
    grenache_rose = db.Column(db.Boolean)
    zinfandel_rose = db.Column(db.Boolean)
    bourbon = db.Column(db.Boolean)
    whiskey = db.Column(db.Boolean)
    brandy = db.Column(db.Boolean)
    cognac = db.Column(db.Boolean)
    gin = db.Column(db.Boolean)
    rum = db.Column(db.Boolean)
    scotch = db.Column(db.Boolean)
    tequila = db.Column(db.Boolean)
    vodka = db.Column(db.Boolean)
    liqueurs = db.Column(db.Boolean)
    hashed_password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now, nullable=False)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            # "address": self.address,
            "city": self.city,
            "state": self.state,
            "postal_code": self.postal_code,
            "about": self.about if self.about else None,
            "profile_image": self.profile_image,
            "email": self.email,
            "phone_number": self.phone_number,
            "red": self.red,
            "rose": self.rose,
            "white": self.white,
            "cabernet_sauvignon": self.cabernet_sauvignon,
            "merlot": self.merlot,
            "zinfandel": self.zinfandel,
            "syrah_shiraz": self.syrah_shiraz,
            "malbec": self.malbec,
            "pinot_noir": self.pinot_noir,
            "sangiovese": self.sangiovese,
            "nebbiolo": self.nebbiolo,
            "chardonnay": self.chardonnay,
            "sauvignon_blanc": self.sauvignon_blanc,
            "semillon": self.semillon,
            "moscato": self.moscato,
            "pinot_grigio": self.pinot_grigio,
            "gewurztraminer": self.gewurztraminer,
            "riesling": self.riesling,
            "pinot_noir_rose": self.pinot_noir_rose,
            "syrah_rose": self.syrah_rose,
            "tempranillo_rose": self.tempranillo_rose,
            "provence_rose": self.provence_rose,
            "tavel_rose": self.tavel_rose,
            "mourvedre_rose": self.mourvedre_rose,
            "cabernet_sauvignon_rose": self.cabernet_sauvignon_rose,
            "sangiovese_rose": self.sangiovese_rose,
            "grenache_rose": self.grenache_rose,
            "zinfandel_rose": self.zinfandel_rose,
            "bourbon": self.bourbon,
            "whiskey": self.whiskey,
            "brandy": self.brandy,
            "cognac": self.cognac,
            "gin": self.gin,
            "rum": self.rum,
            "scotch": self.scotch,
            "tequila": self.tequila,
            "vodka": self.vodka,
            "liqueurs": self.liqueurs,
            "created_at": self.created_at
        }
