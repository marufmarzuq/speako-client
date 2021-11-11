import React, { useEffect, useState } from "react";
import TrendingProduct from "./TrendingProduct";
import "./TrendingProducts.css";

const TrendingProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <section>
            <div className="container my-5">
                <h2 className="text-center py-5 display-5 fw-bold">TRENDING SPEAKERS</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {products.map((product) => (
                        <TrendingProduct key={product._id} product={product}></TrendingProduct>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrendingProducts;
