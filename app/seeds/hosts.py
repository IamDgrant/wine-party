from werkzeug.security import generate_password_hash
from app.models import db, Host
from faker import Faker
from dotenv import load_dotenv
# Adds a demo host, you can add other hosts here if you want
load_dotenv()
fake = Faker()


def seed_hosts():
    

    demoHost = Host(
        firstName='demo',
        lastName='user',
        city="city",
        state="state",
        about="about me",
        sommelier=False,
        mixologist=False,
        email='demo@gmail.com',
        phoneNumber="1234567890",
        # hashed_password=generate_password_hash('password'),
    )


    # demo = Host(firstName='Sarah', lastName='Smith', city='Atlanta', state='GA', about='I have been a Mixologist for 17 years and I love Bourbon', sommelier=False, mixologist=True, email='Sarah@smith.com', phoneNumber='2125551212',
    #             )
    
    name_list = fake.name().split()
    first_name = name_list[0]
    last_name = name_list[1]
    
    phone_list = fake.phone_number().replace("(", "").replace(")", "").replace("-", "").replace(".", "").replace("+", "")
    
    p = phone_list[0:10]
        
    
    for a in range(10):
         h = Host(
             firstName=first_name,
             lastName=last_name,
             city=fake.city(),
             state='NV',
             about=fake.text(),
             sommelier=fake.pybool(),
             mixologist=fake.pybool(),
             email=fake.email(),
             phoneNumber=p,
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
