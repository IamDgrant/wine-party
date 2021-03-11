from app.models import db, Event
from faker import Faker
from dotenv import load_dotenv
import random

load_dotenv()
fake = Faker()


def seed_events():

    demoEvent = Event(
        user_id=1,
        host_id=1,
        event_name="Birthday Party",
        event_date="2021-04-01",
        # event_time=
        # event_address=
        event_city='event_city',
        event_state='event_state',
        # event_postal_code=
    )
    
    e = Event(
        user_id=random.randint(1, 6),
        host_id=random.randint(1, 6)
    )

    db.session.add(demoEvent)
    db.session.commit()
