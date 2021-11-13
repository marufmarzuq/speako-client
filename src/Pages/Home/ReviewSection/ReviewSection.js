import React, { useEffect, useState } from "react";
import "./ReviewSection.css";
import SingleReview from "./SingleReview";
const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((result) => setReviews(result));
    }, []);
    console.log(reviews);
    return (
        <div className="container my-5">
            <h2 className="text-center py-5 display-6 fw-bold">CUSTOMERS REVIEWS</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4 mb-5">
                {reviews.map((reviewCard) => (
                    <SingleReview key={reviewCard._id} reviewCard={reviewCard}></SingleReview>
                ))}
            </div>
        </div>
    );
};

export default ReviewSection;
