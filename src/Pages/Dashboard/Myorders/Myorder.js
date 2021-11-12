import React from "react";

const Myorder = ({ order, setControl }) => {
    const { productName, _id, status, productImg, price } = order;

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
        <div className="col">
            <div className="card mb-3" style={{ maxWidth: "540" }}>
                <div className="row g-0">
                    <div className="col-md-2">
                        <img
                            src={productImg}
                            className="img-fluid rounded-start"
                            alt="..."
                            style={{ objectFit: "cover", height: "100px" }}
                        />
                    </div>
                    <div className="col-md-10">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="card-title">
                                    {productName} <span className="product-quantity-badge">1</span>
                                </h5>
                                <h5 className="card-title">${price}</h5>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                {status ? (
                                    <span className="my-color">Shipping</span>
                                ) : (
                                    <span className="text-danger">Pending</span>
                                )}
                                <button onClick={() => handleDeleteOrder(_id)} className="btn btn-danger">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myorder;
