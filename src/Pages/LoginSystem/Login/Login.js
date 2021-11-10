import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import "./Login.css";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);
    return (
        <>
            <Header></Header>
            <main style={{ backgroundColor: "#f8f9fa" }}>
                <Container className="cotainer">
                    <div className="row">
                        <div className="col-md-6  d-flex align-items-center">
                            <div className="form-container w-100 p-5">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                                    />
                                    <input type="password" placeholder="Password" {...register("Password", {})} />

                                    <input type="submit" className="btn btn-dark w-100" value="Log In" />
                                </form>
                                <hr />
                                <p className="text-center">or</p>
                                <button className="btn btn-danger w-100">Log In with Gmail</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img
                                className="w-100"
                                style={{ padding: "50px" }}
                                src="https://i.ibb.co/ZHyZJKy/login.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </Container>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Login;
