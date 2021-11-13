import React, { useEffect, useState } from "react";
import ManageSingleOrder from "./ManageSingleOrder";
import "./ManageOrders.css";

const ManageOrders = () => {
    const [orders, setOrders] = useState();
    const [control, setControl] = useState(false);
    useEffect(() => {
        fetch("https://gentle-forest-53652.herokuapp.com/orders")
            .then((res) => res.json())
            .then((result) => setOrders(result));
    }, [control]);
    return (
        <div className="orders-container">
            <h3 className="text-center position-relative">
                Manage Orders
                <span className="total-products">{orders?.length && `Total orders: ${orders.length}`}</span>
            </h3>
            <hr />
            <table>
                {orders?.length ? (
                    <div className="row row-cols-1 g-4">
                        {orders
                            .slice(0)
                            .reverse()
                            .map((order) => (
                                <ManageSingleOrder
                                    key={order._id}
                                    order={order}
                                    setControl={setControl}
                                    control={control}
                                ></ManageSingleOrder>
                            ))}
                    </div>
                ) : (
                    <div className="display-2 text-center no-booking">You have no Orders</div>
                )}
            </table>
        </div>
    );
};

export default ManageOrders;
