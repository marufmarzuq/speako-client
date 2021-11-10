import React from "react";

const TrendingProduct = ({ product }) => {
    const { description, name, rating, price, imgURL } = product;
    return (
        <div class="col">
            <div class="card h-100">
                <img src={imgURL} class="card-img-top product-img" alt="..." />
                <div class="card-body">
                    <h5 class="card-title fs-4">{name}</h5>
                    <p class="card-text short-text">
                        This is a longer card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                    </p>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-dark w-50">
                            <i class="fas fa-shopping-cart me-2"></i>Buy Now
                        </button>
                        <div className="fw-bold fs-4">${price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingProduct;
