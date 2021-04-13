from app.models import db, Event
from faker import Faker
from dotenv import load_dotenv
import datetime
import random

load_dotenv()
fake = Faker()


def seed_events():
    
    for _ in range(10):
        my_word_list = [
                "Event", "Party"]
        
        prev_events = Event(
            user_id=random.randint(1, 10),
            host_id=random.randint(1, 10),
            event_name=fake.sentence(ext_word_list=my_word_list),
            event_date=fake.date_between(start_date='-02y', end_date='today'),
            # event_time=
            # event_address=
            event_city="Miami",
            event_state="Florida",
            # event_postal_code=
        )
        
        future_events = Event(
            user_id=random.randint(1, 6),
            host_id=random.randint(1, 102),
            event_name=fake.sentence(ext_word_list=my_word_list),
            event_date=fake.date_between_dates(date_start=datetime(2021,4,1), date_end=datetime(2022,12,31)),
            # event_time=
            # event_address=
            event_city=fake.city(),
            event_state=fake.state(),
            # event_postal_code=
        )

        db.session.add(prev_events)
        db.session.commit()
