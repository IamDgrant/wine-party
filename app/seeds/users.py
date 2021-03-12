from werkzeug.security import generate_password_hash
from app.models import db, User
from faker import Faker
from dotenv import load_dotenv
import random

# Adds a demo user, you can add other users here if you want
load_dotenv()
fake = Faker()


def seed_users():

    for _ in range(10):

        demo = User(first_name=fake.first_name(), last_name=fake.last_name(), city=fake.city(), state=fake.state(), postal_code=fake.postcode(), about=fake.text(), email=fake.email(), phone_number=random.randint(1234567890, 9999999999),
                    password='password')

        db.session.add(demo)

        db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()
