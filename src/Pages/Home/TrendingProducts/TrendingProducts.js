import React, { useEffect, useState } from "react";
import TrendingProduct from "./TrendingProduct";

const TrendingProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("./Products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <section>
            <div className="container">
                <div class="row row-cols-1 row-cols-md-4 g-4">
                    {products.map((product) => (
                        <TrendingProduct key={product.name} product={product}></TrendingProduct>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrendingProducts;
