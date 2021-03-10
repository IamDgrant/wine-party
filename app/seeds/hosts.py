from werkzeug.security import generate_password_hash
from app.models import db, Host
from faker import Faker
from dotenv import load_dotenv
# Adds a demo host, you can add other hosts here if you want
load_dotenv()
fake = Faker()


def seed_hosts():

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

    name_list = fake.name().split()
    first_name = name_list[0]
    last_name = name_list[1]

    phone_list = fake.phone_number().replace("(", "").replace(
        ")", "").replace("-", "").replace(".", "").replace("+", "")

    p = phone_list[0:10]

    for _ in range(50):
        h = Host(
            first_name=first_name,
            last_name=last_name,
            #  address=fake.street_address(),
            city=fake.city(),
            state=fake.state(),
            postal_code=fake.postcode(),
            about=fake.text(),
            rating=fake.random_digit_not_null(),
            sommelier=fake.pybool(),
            mixologist=fake.pybool(),
            email=fake.email(),
            phone_number=p,
            # password=generate_password_hash('password'),
        )

    db.session.add(h)
    db.session.commit()
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_hosts():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()
