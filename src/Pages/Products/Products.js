import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import TrendingProduct from "../Home/TrendingProducts/TrendingProduct";

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("./Products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <>
            <Header></Header>
            <main>
                <div className="container my-5">
                    <h2 className="text-center py-5 display-5 fw-bold">ALL SPEAKERS</h2>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {products.map((product) => (
                            <TrendingProduct key={product.name} product={product}></TrendingProduct>
                        ))}
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Products;
