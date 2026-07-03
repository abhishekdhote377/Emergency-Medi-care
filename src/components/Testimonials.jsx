import { useEffect, useState } from "react";
import axios from "axios";
import "./Testimonials.css"

function Testimonials() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await axios.get(
          "https://admin.tomedes.com/api/v1/get-reviews?page=1",
          {
            headers: {
              Accept: "application/json",
            },
          }
        );

        // Show only the first 2 reviews
        setReviews(res.data.data.slice(0, 2));
      } catch (err) {
        console.log(err);
      }
    }

    fetchReviews();
  }, []);

  return (
    <div className="review-container">
      {reviews.map((review) => (
        <div className="review-card" key={review.ID}>
          <h2>{review.Name}</h2>

          <p>{review.Reviews}</p>

          <div className="rating">
            ⭐ {review.Rating}/5
          </div>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;