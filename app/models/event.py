from .db import db


class Event(db.Model):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, nullable=False)
    hostId = db.Column(db.String(50), nullable=False)
    eventName = db.Column(db.Integer, nullable=False)
    eventDate = db.Column(db.Date, nullable=False)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    fee = db.Column(db.Integer)
    total = db.Column(db.Integer)
    createdAt = db.Column(db.timestamp, nullable=False)


def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "hostId": self.hoistId,
            "eventName": self.eventName,
            "eventDate": self.eventDate,
            "city": self.city,
            "state": self.state,
            "fee": self.fee,
            "total": self.total,
            "createdAt": self.createdAt
