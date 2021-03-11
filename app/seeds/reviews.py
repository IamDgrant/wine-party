from app.models import db, Review
from faker import Faker
from dotenv import load_dotenv
import random

load_dotenv()
fake = Faker()


def seed_reviews():

    demoReview = Review(
        user_id=1,
        event_id=1,
        rating=random.randint(1, 5),
        comment=fake.text(),
    )
    
    
    r = Review(
        user_id=random.randint(1, 5),
        host_id=random.randint(1, 102)
    )

    db.session.add(demoReview)
    db.session.commit()
