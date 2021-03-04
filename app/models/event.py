from .db import db
from sqlalchemy import DateTime
from datetime import datetime


class Event(db.Model):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    hostId = db.Column(db.Integer, db.ForeignKey("hosts.id"))
    eventName = db.Column(db.String, nullable=False)
    eventDate = db.Column(db.Date, nullable=False)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    fee = db.Column(db.Integer)
    total = db.Column(db.Integer)
    createdAt = db.Column(db.DateTime, default=datetime.now, nullable=False)
    # hosts = db.relationship("Host", back_populates="event")
    # users = db.relationship("User", lazy="dynamic",
    #                         back_populates="events")

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "hostId": self.hostId,
            "eventName": self.eventName,
            "eventDate": self.eventDate,
            "city": self.city,
            "state": self.state,
            "fee": self.fee,
            "total": self.total,
            "createdAt": self.createdAt
        }
