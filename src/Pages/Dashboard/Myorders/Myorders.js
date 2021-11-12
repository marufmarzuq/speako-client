import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Myorder from "./Myorder";

const Myorders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [control, setControl] = useState(false);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.email}`)
            .then((res) => res.json())
            .then((result) => {
                setMyOrders(result);
            });
    }, [control]);

    return (
        <div>
            {myOrders.length ? (
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {myOrders
                        .slice(0)
                        .reverse()
                        .map((order) => (
                            <Myorder key={order._id} order={order} setControl={setControl} control={control}></Myorder>
                        ))}
                </div>
            ) : (
                <div className="display-2 text-center no-booking">You have no Orders</div>
            )}
        </div>
    );
};

export default Myorders;
