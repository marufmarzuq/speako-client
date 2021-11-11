import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import PlaceOrder from "./PlaceOrder/PlaceOrder";
import "./ProductsDetails.css";

const ProductsDetails = () => {
    const { id } = useParams("id");
    const [productClass, setOrderClass] = useState("row");
    const [orderClass, setProductClass] = useState("row hide-row");
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);
    const { name, imgURL, price, rating, description } = product;
    console.log(product);
    const handleBuyNow = () => {
        setOrderClass("row hide-row");
        setProductClass("row show-row");
    };
    return (
        <>
            <Header></Header>
            <main>
                <div className="container">
                    <div className={productClass}>
                        <div className="col-md-6 place-order-img">
                            <img src={imgURL} alt="" />
                        </div>
                        <div className="col-md-6 product-info px-3">
                            <h2 className="display-6 fw-bold">{name}</h2>
                            <p>Rating</p>
                            <p>{description}</p>
                            <div>
                                <span className="fw-bold">Price:</span> ${price}
                            </div>
                            <div>
                                <span className="fw-bold">Sound Channels:</span> 5.1 Channel
                            </div>
                            <div>
                                <span className="fw-bold">Speaker Wattage:</span> 200 - 499 Watt
                            </div>
                            <div>
                                <span className="fw-bold">Vendor:</span> Waybeat
                            </div>
                            <div>
                                <span className="fw-bold">Type:</span> Multimedia Speaker
                            </div>
                            <div>
                                <span className="fw-bold">Availability:</span>{" "}
                                <span className="text-primary">In stock!</span>
                            </div>
                            <button onClick={handleBuyNow} className="btn btn-dark w-50 mt-3">
                                <i className="fas fa-shopping-cart me-2"></i>Buy It Now
                            </button>
                        </div>
                    </div>
                    <PlaceOrder orderClass={orderClass} product={product}></PlaceOrder>
                    <div className="row">
                        <h4 className="ps-5 py-3 border-bottom mb-0 description-title">Product Description</h4>
                        <div className="px-5 py-4 mb-5" style={{ border: "1px solid #ddd" }}>
                            <p>
                                Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis.
                                Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an
                                sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien
                                et mollis.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet Sonsectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <h5>Busey ipsum dolor sit amet</h5>
                            <p>
                                Tortor at auctor urna nunc id cursus metus aliquam. Odio tempor orci dapibus ultrices.
                                Tortor condimentum lacinia quis vel eros donec ac odio. Velit euismod in pellentesque
                                massa placerat duis ultricies lacus. Scelerisque purus semper eget duis at tellus at
                                urna condimentum. Eu facilisis sed odio morbi quis commodo odio aenean urpis massa sed
                                elemen.
                            </p>
                            <h5>Sample Paragraph Text</h5>
                            <p>
                                Praesent vestibulum congue tellus at fringilla. Curabitur vitae semper sem, eu convallis
                                est. Cras felis nunc commodo eu convallis vitae interdum non nisl. Maecenas ac est sit
                                amet augue pharetra convallis nec danos dui. Cras suscipit quam et turpis eleifend vitae
                                malesuada magna congue. Damus id ullamcorper neque. Sed vitae mi a mi pretium aliquet ac
                                sed elit. Pellentesque nulla eros accumsan quis justo at tincidunt lobortis denimes
                                loremous. Suspendisse vestibulum lectus in lectus volutpat, ut dapibus purus pulvinar.
                                Vestibulum sit amet auctor ipsum.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
};

export default ProductsDetails;
