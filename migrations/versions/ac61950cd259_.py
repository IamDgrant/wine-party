"""empty message

Revision ID: ac61950cd259
Revises: cb727577cc25
Create Date: 2021-03-03 18:37:16.281086

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ac61950cd259'
down_revision = 'cb727577cc25'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('events', 'hostId',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('events', 'hostId',
               existing_type=sa.INTEGER(),
               nullable=False)
    # ### end Alembic commands ###
