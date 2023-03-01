import React, { useState } from 'react';
import './RatingComponent.css';

function RatingComponent(props) {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [totalRating, setTotalRating] = useState(0);
  const [numRatings, setNumRatings] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setTotalRating(totalRating + rating);
    setNumRatings(numRatings + 1);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rating-results">
        <p>Thank you for your rating!</p>
        <p>Total rating: {totalRating}</p>
        <p>Number of ratings: {numRatings}</p>
      </div>
    )
  } else {
    return (
      <form onSubmit={handleSubmit} className="rating-form">
        <div className='submit-button'>
          <span className={`star ${rating >= 1 ? 'selected' : ''}`} onClick={() => handleClick(1)}>★</span>
          <span className={`star ${rating >= 2 ? 'selected' : ''}`} onClick={() => handleClick(2)}>★</span>
          <span className={`star ${rating >= 3 ? 'selected' : ''}`} onClick={() => handleClick(3)}>★</span>
          <span className={`star ${rating >= 4 ? 'selected' : ''}`} onClick={() => handleClick(4)}>★</span>
          <span className={`star ${rating >= 5 ? 'selected' : ''}`} onClick={() => handleClick(5)}>★</span>
        </div>
        <div className='submit-button'><button type="submit">Submit</button></div>
      </form>
    )
  }
}

export default RatingComponent;
