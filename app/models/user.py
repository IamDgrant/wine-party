from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    firstName = db.Column(db.String(50), nullable=False)
    lastName = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(300))
    profile_image = db.Column(db.String)
    email = db.Column(db.String(100), nullable=False, unique=True)
    phone_number = db.Column(db.Integer, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    createdAt = db.Column(db.Date, nullable=False)

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
            "state": self.state,
            "description": self.description,
            "profile_image": self.profile_image,
            "email": self.email,
            "phone_number": self.phone_number,
            "createdAt": self.createdAt
        }
