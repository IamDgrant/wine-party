from .db import db
from sqlalchemy import DateTime
from datetime import datetime


class Event(db.Model):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    host_id = db.Column(db.Integer, db.ForeignKey("hosts.id"))
    event_name = db.Column(db.String, nullable=False)
    event_date = db.Column(db.Date, nullable=False)
    event_time = db.Column(db.Time)
    event_address = db.Column(db.String)
    event_city = db.Column(db.String(50), nullable=False)
    event_state = db.Column(db.String(50), nullable=False)
    # event_postal_code = db.Column(db.String)
    fee = db.Column(db.Integer)
    total = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=datetime.now, nullable=False)
    host = db.relationship("Host", uselist=False, back_populates="events")
    review = db.relationship("Review", uselist=False, back_populates="event")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "host_id": self.host_id,
            "event_name": self.event_name,
            "event_date": self.event_date,
            "event_time": self.event_time,
            "event_address":self.event_address,
            "event_city": self.event_city,
            "event_state": self.event_state,
            # "event_postal_code": self.event_postal_code,
            "fee": self.fee,
            "total": self.total,
            "created_at": self.created_at
        }
