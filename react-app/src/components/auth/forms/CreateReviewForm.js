import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createReview } from "../../store/review";

const Review = ({ user_id, event_id }) => {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const sessionEvent = useSelector((state) => state.event.event);

  const onSubmit = async (e) => {
    e.preventDefault();
    return dispatch({ user_id, event_id, rating, comment }).then(() => {
      setRating("");
      setComment("");
    });
  };

  const updateRating = (e) => {
    setRating(e.target.value);
  };

  const updateComment = (e) => {
    setComment(e.target.value);
  };

  return (
    sessionUser && (
      <div className="review-main">
        <form onSubmit={onSubmit} className="review-form">
          
          <button type="submit" className="submit-btn">
            Submit Review
          </button>
        </form>
      </div>
    )
  );
}

export default Review
