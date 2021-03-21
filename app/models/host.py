from .db import db
from sqlalchemy import DateTime
from datetime import datetime
from .event import Event


class Host(db.Model):
    __tablename__ = 'hosts'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    postal_code = db.Column(db.String)
    about = db.Column(db.String(300))
    sommelier = db.Column(db.Boolean, nullable=False)
    mixologist = db.Column(db.Boolean, nullable=False)
    profile_image = db.Column(db.String)
    cert_image = db.Column(db.String)
    email = db.Column(db.String(100), nullable=False, unique=True)
    phone_number = db.Column(db.String, unique=True)
    red = db.Column(db.Boolean)
    rose = db.Column(db.Boolean)
    white = db.Column(db.Boolean)
    bourbon = db.Column(db.Boolean)
    whiskey = db.Column(db.Boolean)
    brandy = db.Column(db.Boolean)
    cognac = db.Column(db.Boolean)
    gin = db.Column(db.Boolean)
    rum = db.Column(db.Boolean)
    scotch = db.Column(db.Boolean)
    tequila = db.Column(db.Boolean)
    vodka = db.Column(db.Boolean)
    liqueurs = db.Column(db.Boolean)
    # hashedPassword = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now, nullable=False)
    events = db.relationship("Event", foreign_keys=Event.host_id, back_populates="host")
    # reviews = db.relationship("Review", secondary="events", back_populates="host")

    def ratings(self):  
            reviews = [event.review for event in self.events]
            print("REVIEWS!!!!!!!!!!!!!!!!", reviews, self.events)
            ratings = list(map(lambda r: r.rating, reviews))
            print("RATINGS!!!!!!!!!!!!!!!!", ratings)
            avgRating = sum(ratings) / \
                            len(ratings) if len(ratings) > 0 else "n/a"
            return avgRating

    def to_dict(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "city": self.city,
            "state": self.state,
            "postal_code": self.postal_code,
            "about": self.about,
            "ratings": self.ratings(),
            "sommelier": self.sommelier,
            "mixologist": self.mixologist,
            "profile_image": self.profile_image,
            "cert_image": self.cert_image,
            "email": self.email,
            "phone_number": self.phone_number,
            "red": self.red,
            "rose": self.rose,
            "white": self.white,
            "bourbon": self.bourbon,
            "whiskey": self.whiskey,
            "brandy": self.brandy,
            "cognac": self.cognac,
            "gin": self.gin,
            "rum": self.rum,
            "scotch": self.scotch,
            "tequila": self.tequila,
            "vodka": self.vodka,
            "liqueurs": self.liqueurs,
            "created_at": self.created_at
        }
