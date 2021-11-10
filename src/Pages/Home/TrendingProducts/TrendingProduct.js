import React from "react";

const TrendingProduct = ({ product }) => {
    const { description, name, rating, price, imgURL } = product;
    return (
        <div class="col">
            <div class="card h-100">
                <img src={imgURL} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">
                        <p>${price}</p>
                        This is a longer card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TrendingProduct;
