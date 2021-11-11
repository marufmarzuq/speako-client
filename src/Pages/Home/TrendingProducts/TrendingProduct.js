import React from "react";
import { Link } from "react-router-dom";

const TrendingProduct = ({ product }) => {
    const { description, name, rating, price, imgURL } = product;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={imgURL} className="card-img-top product-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fs-4">{name}</h5>
                    <p className="card-text short-text">
                        This is a longer card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                    </p>
                    <div className="d-flex justify-content-between">
                        <Link className="btn btn-dark w-50" to={`/products/${name}`}>
                            <i className="fas fa-shopping-cart me-2"></i>Buy Now
                        </Link>
                        <div className="fw-bold fs-4">${price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingProduct;
