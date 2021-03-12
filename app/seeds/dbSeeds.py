from dotenv import load_dotenv
from werkzeug.security import generate_password_hash
from faker import Faker
from random import choices, seed
from app import app, db
from app.models import Host

load_dotenv()
fake = Faker()

with app.app_context():
    db.drop_all()
    db.create_all()

    demoHost = Host(
        first_name='demo',
        last_name='user',
        city="city",
        state="state",
        about="about me",
        sommelier=False,
        mixologist=False,
        email='demo@gmail.com',
        phone_number="1234567890",
        # hashed_password=generate_password_hash('password'),
    )

    db.session.add(demoHost)
    db.session.commit()

    for a in range(100):
        h = Host(
            first_name=fake.name(),
            last_name=fake.name(),
            city=fake.city(),
            state=fake.state(),
            about=fake.text(),
            sommelier=fake.pybool(),
            mixologist=fake.pybool(),
            email=fake.email(),
            # password=generate_password_hash('password'),
        )

        db.session.add(h)
        db.session.commit()
