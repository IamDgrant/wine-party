from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Review, db
from app.forms import ReviewForm
import ast

review_routes = Blueprint('reviews', __name__)

@review_routes.route('/')
@login_required
def reviews():
    reviews = Review.query.filter_by(userId=current_user.id)
    return {"reviews": [review.to_dict() for review in reviews]}


# @review_routes.route('/project/<id>')
# @login_required
# def project_reviews(id):
#     reviews = Review.query.filter_by(projectId=id).all()
#     return {"reviews": [review.to_dict() for review in reviews]}


@review_routes.route('/<id>')
def review(id):
    reviews = Review.query.filter_by(eventId=id).all()
    return {"reviews": [review.to_dict() for review in reviews]}


@review_routes.route('/', methods=['POST'])
@login_required
def create_review():
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = Review()
        form.populate_obj(data)
        print(str(form))
        data.assigneeId = current_user.id
        db.session.add(data)
        db.session.commit()
        return data.to_dict()
    return('Invalid Info')


@review_routes.route('/<id>', methods=['DELETE'])
def delete_review(id):
    review = Review.query.filter_by(id=id).first()
    # return {"reviews": [review.to_dict() for review in reviews]}
    db.session.delete(review)
    db.session.commit()
    return review.to_dict()

@review_routes.route('/update/<id>', methods=['POST'])
@login_required
def update_review(id):
    review = Review.query.filter_by(id=id).first()
    update = request.data.decode("utf-8")
    updated = ast.literal_eval(update)
    if "status" in updated.keys():
        status = updated["status"]
        review.status = status
    if "priority" in updated.keys():
        priority = updated["priority"]
        review.priority = priority
    if "desc" in updated.keys():
        desc = updated["desc"]
        review.description = desc

    db.session.commit()

    return review.to_dict()
