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
            "about": self.about,
            "profile_image": self.profile_image,
            "email": self.email,
            "phone_number": self.phone_number,
            "created_at": self.created_at
        }
