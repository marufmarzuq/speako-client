import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <>
            <div className="top-bar">
                <Link to="/">
                    <img style={{ width: "40px", margin: "5px 15px" }} src={logo} alt="" />
                </Link>
            </div>
        </>
    );
};

export default Dashboard;
