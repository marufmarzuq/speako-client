import React from "react";

const ManageSingleProduct = ({ product, setControl }) => {
    const { name, price, rating, imgURL, _id, description } = product;
    console.log(product);

    const handleDeleteProduct = () => {
        const confirmMessage = "Are you sure, you want to delete the product?";
        if (window.confirm(confirmMessage)) {
            //eslint-disable-line
            fetch(`http://localhost:5000/products/${_id}`, {
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
    return (
        <tr>
            <td style={{ width: "100px" }}>
                <img style={{ width: "100px", height: "70px", objectFit: "cover" }} src={imgURL} alt="" />
            </td>
            <td style={{ width: "200px" }}>
                <div>{name}</div>
            </td>
            <td style={{ width: "50px" }}>
                <div>${price}</div>
            </td>
            <td style={{ width: "200px" }}>
                <div>{rating}</div>
            </td>
            <td style={{ width: "300px" }}>
                <div>{description}</div>
            </td>
            <td style={{ width: "150px" }}>
                <button onClick={() => handleDeleteProduct(_id)} className="btn btn-danger w-100">
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ManageSingleProduct;
