from werkzeug.security import generate_password_hash
from app.models import db, Host

# Adds a demo host, you can add other hosts here if you want


def seed_hosts():

    demo = Host(firstName='Sarah', lastName='Smith', city='Atlanta', state='GA', about='I have been a Mixologist for 17 years and I love Bourbon', sommelier=False, mixologist=True, email='Sarah@smith.com', phoneNumber='4045551212',
                )

    db.session.add(demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_hosts():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()
