from app.models import db, Review
from faker import Faker
from dotenv import load_dotenv
import random

load_dotenv()
fake = Faker()


def seed_reviews():

    # demoReview = Review(
    #     user_id=1,
    #     event_id=1,
    #     rating=random.randint(1, 5),
    #     comment=fake.text(),
    # )
    
    

    for ev in range(1,11):
        # my_word_list = [
        #     'whiskey', 'bourbon', 'scotch',
        #     'wine', 'Sommelier', 'Mixologist',
        #     'Rum', 'Vodka', 'spirits',
        #     'the', 'absolute', 'best', 'host', 'event', 'party', 'very', 'fun', 'knowledgable', 'knows their stuff', 'will book again', 'not great', 'did not seem to know much', 'will not book again', 'find someone else']

        r = Review(
            user_id=random.randint(1,5),
            event_id=ev,
            rating=random.randint(2, 5),
            # comment=fake.sentence(ext_word_list=my_word_list),
        )

        db.session.add(r)
        db.session.commit()
