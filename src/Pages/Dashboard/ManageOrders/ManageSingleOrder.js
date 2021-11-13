import React from "react";

const ManageSingleOrder = ({ order, setControl }) => {
    const { productName, _id, status, productImg, price, time, address } = order;
    const handleUpdateBooking = (id) => {
        order.status = true;
        fetch(`http://localhost:5000/orders/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    setControl(true);
                } else {
                    setControl(false);
                }
            });
    };

    const handleDeleteOrder = () => {
        const confirmMessage = "Are you sure, you want to cancel the order?";
        if (window.confirm(confirmMessage)) {
            //eslint-disable-line
            fetch(`http://localhost:5000/orders/${_id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        setControl(true);
                    } else {
                        setControl(false);
                    }
                });
        }
    };
    console.log(order);
    return (
        <tr>
            <td style={{ width: "100px" }}>
                <img style={{ width: "100px", height: "70px", objectFit: "cover" }} src={productImg} alt="" />
            </td>
            <td style={{ width: "180px" }}>
                <div>{productName}</div>
            </td>
            <td style={{ width: "30px", paddingRight: "20px" }}>
                <div>${price}</div>
            </td>
            <td style={{ width: "100px" }}>
                <div>{time}</div>
            </td>
            <td style={{ width: "250px" }}>
                <div>{address}</div>
            </td>
            <td style={{ width: "150px" }}>
                {status ? (
                    <div className="booking-status d-inline-block text-success">shipping</div>
                ) : (
                    <button className="btn btn-dark w-100" onClick={() => handleUpdateBooking(_id)}>
                        <i class="far fa-check-circle"></i> Ship Product
                    </button>
                )}
            </td>
            <td style={{ width: "150px" }}>
                <button onClick={() => handleDeleteOrder(_id)} className="btn btn-danger w-100">
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ManageSingleOrder;
