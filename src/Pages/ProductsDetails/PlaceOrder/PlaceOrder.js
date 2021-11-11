import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import useAuth from "../../../hooks/useAuth";
import "./PlaceOrder.css";

const PlaceOrder = ({ product, orderClass }) => {
    const { name, imgURL, price, rating, description } = product;
    const history = useHistory();
    const { user } = useAuth();
    const { displayName, email } = user;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        alert("Order placed successfully");
        history.push("/products");
    };
    console.log(errors);
    return (
        <div className={orderClass}>
            <div className="col-md-7 my-5">
                <form className="place-order-form" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="w-100"
                        type="text"
                        readOnly
                        defaultValue={displayName}
                        {...register("full_name", { required: true, maxLength: 80 })}
                    />
                    <input
                        className="w-100"
                        type="text"
                        readOnly
                        defaultValue={email}
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    <input
                        className="w-100"
                        type="tel"
                        placeholder="Phone Number"
                        {...register("number", { required: true, maxLength: 12 })}
                    />
                    <input className="w-100" type="text" placeholder="Address" {...register("address", {})} />
                    <input
                        className="w-100"
                        type="text"
                        placeholder="Apartment, suite, etc. (optional)"
                        {...register("apartment", {})}
                    />
                    <input className="w-100" type="text" placeholder="City" {...register("city", {})} />
                    <input className="w-50" type="text" placeholder="Country/region" {...register("country", {})} />
                    <input className="w-50" type="number" placeholder="Postal Code" {...register("postal_code", {})} />
                    <input className="me-2" type="checkbox" placeholder="save_info" {...register("save_info", {})} />
                    Save this information for next time
                    <input value="Place Order" className="w-100 btn-dark btn" type="submit" />
                </form>
            </div>
            <div className="col-md-5 px-4 my-5">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <img
                            style={{ width: "60px", backgroundColor: "#ddd", borderRadius: "5px", marginRight: "10px" }}
                            src={imgURL}
                            alt=""
                        />{" "}
                        <span>{name}</span>
                        <span className="product-amount-badge">1</span>
                    </div>
                    <span>${price}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                    <span>Subtotal:</span>
                    <span>${price}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <span>Shipping:</span>
                    <span>$20</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                    <span>Total</span>
                    <span>${price + 20}</span>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
