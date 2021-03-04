from .db import db
# from werkzeug.security import generate_password_hash, check_password_hash
# from flask_login import UserMixin
from sqlalchemy import DateTime
from datetime import datetime


class Host(db.Model):
    __tablename__ = 'hosts'

    id = db.Column(db.Integer, primary_key=True)
    firstName = db.Column(db.String(50), nullable=False)
    lastName = db.Column(db.String(50), nullable=False)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    about = db.Column(db.String(300))
    profileImage = db.Column(db.String)
    sommelier = db.Column(db.Boolean, nullable=False)
    mixologist = db.Column(db.Boolean, nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    phoneNumber = db.Column(db.String, unique=True)
    # hashedPassword = db.Column(db.String(255), nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.now, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "firstName": self.firstName,
            "lastName": self.lastName,
            "state": self.state,
            "about": self.about,
            "profileImage": self.profileImage,
            "sommelier": self.sommelier,
            "mixologist": self.mixologist,
            "email": self.email,
            "phoneNumber": self.phoneNumber,
            "createdAt": self.createdAt
        }
