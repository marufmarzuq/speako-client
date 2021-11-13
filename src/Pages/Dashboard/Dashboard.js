import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import "./Dashboard.css";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import Review from "./Review/Review";
import Myorders from "./Myorders/Myorders";
import Pay from "./Pay/Pay";
import useAuth from "../../hooks/useAuth";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import ManageOrders from "./ManageOrders/ManageOrders";
import ManageProducts from "./ManageProducts/ManageProducts";
import AddProduct from "./AddProduct/AddProduct";
import DashboardHome from "./DashboardHome/DashboardHome";

const Dashboard = () => {
    const [admin, setAdmin] = useState();
    const { width } = useWindowDimensions();
    const [sidebarStyle, setSidebarStyle] = useState("");
    const [sidbarStatus, setSidebarStatus] = useState(true);
    let { path, url } = useRouteMatch();
    const { user, logOut } = useAuth();
    const { displayName, photoURL } = user;

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then((res) => res.json())
            .then((data) => setAdmin(data.admin));
    }, [user.email]);

    useEffect(() => {
        if (width > 0) {
            setSidebarStyle("0px");
            setSidebarStatus(true);
        }
    }, [width]);

    const controlSideName = (e) => {
        if (sidbarStatus) {
            setSidebarStyle("-250px");
            setSidebarStatus(false);
        } else {
            setSidebarStyle("0px");
            setSidebarStatus(true);
        }
    };
    const sidebar = {
        marginLeft: `${sidebarStyle}`,
    };

    document.onclick = function (h) {
        if (h.target.id !== "toggle" && h.target.id !== "d-sidebar" && h.target.id !== "topbar" && width < 1101) {
            setSidebarStyle("-250px");
            setSidebarStatus(false);
        }
    };
    return (
        <>
            <div id="topbar" className="top-bar d-flex justify-content-between align-items-center">
                <div>
                    <i id="toggle" onClick={controlSideName} class="fas fa-bars text-white nav-toggle-btn"></i>
                </div>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                    Back to Home
                    <img style={{ width: "40px", margin: "5px 15px" }} src={logo} alt="" />
                </Link>
            </div>
            <div id="d-sidebar" style={sidebar} className="dashboard-sidebar">
                <div>
                    <div className="mb-2">
                        <div className="user-profile">
                            <div className="d-flex align-items-center">
                                <div className="user-img">
                                    <img src={photoURL} alt="" />
                                </div>
                                <div className="user-name">{displayName} </div>
                            </div>
                        </div>
                    </div>
                    <Link to={`${url}/`}>Dashboard</Link>
                    {admin ? (
                        <>
                            <Link to={`${url}/manage-orders`}>Manage Orders</Link>
                            <Link to={`${url}/manage-products`}>Mange Products</Link>
                            <Link to={`${url}/add-product`}>Add Products</Link>
                            <Link to={`${url}/make-admin`}>Make Admin</Link>
                        </>
                    ) : (
                        <>
                            <Link to={`${url}/pay`}>Pay</Link>
                            <Link to={`${url}/my-orders`}>My orders</Link>
                            <Link to={`${url}/review`}>Review</Link>
                        </>
                    )}
                    <Link onClick={logOut} to="/login">
                        Logout
                    </Link>
                </div>
            </div>
            <div className="container-fluid dashbord-body px-4 py-4">
                <Switch>
                    <Route exact path={`${path}/`}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/my-orders`}>
                        <Myorders></Myorders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/make-admin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/manage-orders`}>
                        <ManageOrders></ManageOrders>
                    </Route>
                    <Route path={`${path}/manage-products`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                    <Route path={`${path}/add-product`}>
                        <AddProduct></AddProduct>
                    </Route>
                </Switch>
            </div>
        </>
    );
};

export default Dashboard;
