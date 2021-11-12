import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import "./AddProduct";

const AddProduct = () => {
    const [rating, setRating] = useState(0);
    const [error, setError] = useState("");
    const [image, setImage] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRating = (value) => {
        setRating(value);
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "marufmarzuq");
        setLoading(true);
        const res = await fetch("https://api.cloudinary.com/v1_1/dp134lkgu/image/upload", {
            method: "POST",
            body: data,
        });
        const file = await res.json();

        setImage(file.secure_url);
        setImageUrl(file.secure_url);
        setLoading(false);
    };

    const onSubmit = (data) => {
        data.imgURL = imageUrl;
        if (rating) {
            data.rating = rating;
            setError("");
            setRating(0);
        } else {
            setError("Please select the rating you prefer");
            return;
        }
        fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            });

        alert("Product added successfully");
        reset();
    };
    console.log(errors);

    return (
        <div>
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="name" {...register("name", { required: true, maxLength: 80 })} />
                    <input type="number" placeholder="price" {...register("price", {})} />
                    <div>
                        <Rating
                            className="review-rating"
                            //  initialRating={3}
                            onClick={handleRating}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                        />
                        <input
                            className="upload-img"
                            type="file"
                            name="file"
                            placeholder="Upload an image"
                            onChange={uploadImage}
                        />
                        {loading ? (
                            <Spinner animation="border" />
                        ) : (
                            <img src={image} style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                        )}
                    </div>
                    <textarea {...register("description", {})} />
                    <p className="text-danger">{error}</p>
                    <input value="Add Products" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
