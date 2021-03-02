from .db import db


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, nullable=False)
    eventId = db.Column(db.Integer, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.String(300))
    createdAt = db.Column(db.timestamp, nullable=False)


def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "eventId": self.eventId,
            "rating": self.rating,
            "comment": self.comment,
            "createdAt": self.createdAt

