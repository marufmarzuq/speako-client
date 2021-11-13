import React, { useEffect, useState } from "react";
import TrendingProduct from "./TrendingProduct";
import "./TrendingProducts.css";

const TrendingProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://gentle-forest-53652.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data.slice(0, 4)));
    }, []);
    return (
        <section>
            <div className="container my-5">
                <h2 className="text-center py-5 display-6 fw-bold">TRENDING SPEAKERS</h2>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {products.map((product) => (
                        <TrendingProduct key={product._id} product={product}></TrendingProduct>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrendingProducts;
