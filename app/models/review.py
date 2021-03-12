from .db import db
from sqlalchemy import DateTime
from datetime import datetime


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    event_id = db.Column(db.Integer, db.ForeignKey("events.id"), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.String(300))
    created_at = db.Column(db.DateTime, default=datetime.now, nullable=False)
    event = db.relationship("Event", uselist=False, back_populates="review")
    # host = db.relationship("Host", secondary="events", back_populates="reviews")
    def host(self):
        return self.event.host

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "event_id": self.event_id,
            "rating": self.rating,
            "comment": self.comment,
            "created_at": self.created_at
        }
