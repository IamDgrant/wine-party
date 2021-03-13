"""empty message

Revision ID: f7cddf016e6d
Revises: 1f34c08e1e24
Create Date: 2021-03-11 10:44:47.079416

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f7cddf016e6d'
down_revision = '1f34c08e1e24'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('events', sa.Column('event_address', sa.String(), nullable=True))
    op.add_column('events', sa.Column('event_city', sa.String(length=50), nullable=False))
    op.add_column('events', sa.Column('event_postal_code', sa.String(), nullable=True))
    op.add_column('events', sa.Column('event_state', sa.String(length=50), nullable=False))
    op.drop_column('events', 'postal_code')
    op.drop_column('events', 'city')
    op.drop_column('events', 'state')
    op.drop_column('hosts', 'rating')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('hosts', sa.Column('rating', sa.INTEGER(), autoincrement=False, nullable=True))
    op.add_column('events', sa.Column('state', sa.VARCHAR(length=50), autoincrement=False, nullable=False))
    op.add_column('events', sa.Column('city', sa.VARCHAR(length=50), autoincrement=False, nullable=False))
    op.add_column('events', sa.Column('postal_code', sa.VARCHAR(), autoincrement=False, nullable=True))
    op.drop_column('events', 'event_state')
    op.drop_column('events', 'event_postal_code')
    op.drop_column('events', 'event_city')
    op.drop_column('events', 'event_address')
    # ### end Alembic commands ###