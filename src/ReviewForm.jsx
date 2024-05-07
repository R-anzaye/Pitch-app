import React, { useState } from 'react';

function ReviewForm() {
  const [stadiumName, setStadiumName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
  };

  return (
    <div>
      <h2>Review Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="stadium-name">Stadium Name:</label>
        <input type="text" id="stadium-name" value={stadiumName} onChange={(e) => setStadiumName(e.target.value)} />
        
        <label htmlFor="comment">Comment:</label>
        <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
        
        <label htmlFor="rating">Rating (1-10):</label>
        <input type="number" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} min="1" max="10" />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReviewForm;
