from werkzeug.security import generate_password_hash
from app.models import db, Host
from faker import Faker
from dotenv import load_dotenv
import random
# Adds a demo host, you can add other hosts here if you want
load_dotenv()
fake = Faker()


def seed_hosts():
    print("SEEDING HOST!!!!!!!!!!")
    demoHost = Host(
        first_name='demo',
        last_name='user',
        # address='address',
        city="city",
        state="state",
        postal_code='postal_code',
        about="about me",
        sommelier=False,
        mixologist=False,
        email='demo@gmail.com',
        phone_number="1234567890",
        # hashed_password=generate_password_hash('password'),
    )

    # demo = Host(first_name='Sarah', last_name='Smith', city='Atlanta', state='GA', about='I have been a Mixologist for 17 years and I love Bourbon', sommelier=False, mixologist=True, email='Sarah@smith.com', phoneNumber='2125551212',
    #             )
    # name_list = fake.name().split()
    # first_name = name_list[0]
    # last_name = name_list[1]
    # phone_list = fake.phone_number().replace("(", "").replace(
    #     ")", "").replace("-", "").replace(".", "").replace("+", "")
    # p = phone_list[0:10]
    for _ in range(100):
        s=fake.pybool()
        # to make sure at least one of the is true
        m=fake.pybool() if s else True
        
        h = Host(
            first_name=fake.first_name(),
            last_name=fake.last_name(),
            #  address=fake.street_address(),
            city=fake.city(),
            state=fake.state(),
            postal_code=fake.postcode(),
            about=fake.text(),
            # rating=random.randint(1, 6),
            sommelier=s,
            mixologist=m,
            email=fake.email(),
            phone_number=random.randint(1234567890, 9999999999),
            # password=generate_password_hash('password'),
        )

        db.session.add(h)
        db.session.commit()
    print("AFTER FOR LOOP!!!!!!")
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_hosts():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()
