import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const TrendingProduct = ({ product }) => {
    const { description, name, rating, price, imgURL, _id } = product;
    return (
        <div className="col">
            <div className="card h-100">
                <div className="card-img-container">
                    <img src={imgURL} className="card-img-top product-img" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title fs-4 short-heading">{name}</h5>

                    <div className="d-flex justify-content-between">
                        <Rating
                            className="review-rating"
                            readonly
                            initialRating={rating}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                        />
                        <div className="fw-bold fs-4">${price}</div>
                    </div>
                    <p className="card-text short-text">{description}</p>
                    <Link className="btn btn-dark w-100" to={`/products/${_id}`}>
                        Product Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TrendingProduct;
