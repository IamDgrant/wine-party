from .db import db
# from werkzeug.security import generate_password_hash, check_password_hash
# from flask_login import UserMixin
from sqlalchemy import DateTime
from datetime import datetime


class Host(db.Model):
    __tablename__ = 'hosts'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    # event_name = db.Column(db.String)
    # event_date = db.Column(db.Date)
    # event_time = db.Column(db.Time)
    # address = db.Column(db.String)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    postal_code = db.Column(db.String)
    about = db.Column(db.String(300))
    rating = db.Column(db.Integer)
    sommelier = db.Column(db.Boolean, nullable=False)
    mixologist = db.Column(db.Boolean, nullable=False)
    profile_image = db.Column(db.String)
    cert_image = db.Column(db.String)
    email = db.Column(db.String(100), nullable=False, unique=True)
    phone_number = db.Column(db.String, unique=True)
    # hashedPassword = db.Column(db.String(255), nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.now, nullable=False)

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
            "rating": self.rating,
            "sommelier": self.sommelier,
            "mixologist": self.mixologist,
            "profile_image": self.profile_image,
            "cert_image": self.cert_image,
            "email": self.email,
            "phone_number": self.phone_number,
            "created_at": self.created_at
        }
