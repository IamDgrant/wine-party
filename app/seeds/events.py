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
            "Wine Event", "Birthday Party", "Holiday Party"]

        # zipcode_list = ["33130", "33133", "33125",
        #                 "33133", "33154", "33129", "33130", "33132"]

        # city_list = ["Miami", "Fort Lauderdale",
        #              "Hollywood", "Miami Beach", "Bal Harbor"]

        events = Event(
            user_id=random.randint(1, 5),
            host_id=random.randint(1, 5),
            event_name=fake.sentence(ext_word_list=my_word_list),
            event_date=fake.date_between(start_date='-02y', end_date='today'),
            # event_date=fake.date_between_dates(date_start=datetime(
            #     2020, 1, 1), date_end=datetime(2021, 4, 15)),
            # event_city=fake.city(ext_word_list=city_list),
            event_city="Miami",
            event_state="FL",
            event_postal_code="33130"
        )

        # future_events = Event(
        #     # user_id=random.randint(1, 6),
        #     # host_id=random.randint(1, 102),
        #     event_name=fake.sentence(ext_word_list=my_word_list),
        #     event_date=fake.date_between_dates(date_start=datetime(
        #         2021, 4, 1), date_end=datetime(2022, 12, 31)),
        #     event_city=fake.city(ext_word_list=city_list),
        #     event_state="FL",
        #     event_postal_code=fake.postcode(ext_word_list=zipcode_list)
        # )

        db.session.add(events)
        db.session.commit()
