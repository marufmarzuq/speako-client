import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useParams } from "react-router";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import "./ProductsDetails.css";
import starFill from "../../images/star-fill.png";
import starEmpty from "../../images/star-empty.png";
import { Link } from "react-router-dom";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { AiOutlineCaretRight } from "react-icons/ai";

const ProductsDetails = () => {
    const { id } = useParams("id");
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`https://gentle-forest-53652.herokuapp.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);
    const { name, imgURL, price, rating, description, _id } = product;
    return (
        <>
            <Header></Header>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 place-order-img">
                            <img src={imgURL} alt="" />
                        </div>
                        <div className="col-md-6 product-info px-3">
                            <h2 className="display-6 fw-bold">{name}</h2>
                            <Rating
                                className="review-rating"
                                readonly
                                initialRating={rating}
                                emptySymbol={<img src={starEmpty} className="star-icon" />}
                                fullSymbol={<img src={starFill} className="star-icon" />}
                            />
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
                                <span className="fw-bold">Availability: </span>
                                <span className="text-primary">In stock!</span>
                            </div>
                            <div className="order-review-quantity-container w-50">
                                <AiOutlineCaretLeft />
                                <input type="number" min={1} max={20} defaultValue={1} />
                                <AiOutlineCaretRight />
                            </div>
                            <Link to={`/place-order/${_id}`}>
                                <button className="btn btn-dark w-50 mt-3">
                                    <i className="fas fa-shopping-cart me-2"></i>Buy It Now
                                </button>
                            </Link>
                        </div>
                    </div>
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
