from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy import DateTime
from datetime import datetime


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    firstName = db.Column(db.String(50), nullable=False)
    lastName = db.Column(db.String(50), nullable=False)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    about = db.Column(db.String(300))
    profileImage = db.Column(db.String)
    email = db.Column(db.String(100), nullable=False, unique=True)
    phoneNumber = db.Column(db.Integer, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.now, nullable=False)

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
            "firstName": self.firstName,
            "lastName": self.lastName,
            "city": self.city,
            "state": self.state,
            "about": self.about,
            "profileImage": self.profileImage,
            "email": self.email,
            "phoneNumber": self.phoneNumber,
            "createdAt": self.createdAt
        }
