import React, { useState } from "react";
import { useParams } from "react-router";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const PlaceOrder = () => {
    const { name } = useParams("name");
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
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="" alt="" />
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <h1>{name}</h1>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
};

export default PlaceOrder;
