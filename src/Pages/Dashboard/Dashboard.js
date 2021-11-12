import React from "react";
import logo from "../../images/logo.png";
import "./Dashboard.css";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import Review from "./Review/Review";
import Myorders from "./Myorders/Myorders";
import Pay from "./Pay/Pay";

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <>
            <div className="top-bar">
                <Link to="/">
                    <img style={{ width: "40px", margin: "5px 15px" }} src={logo} alt="" />
                </Link>
            </div>
            <div className="dashboard-sidebar">
                <Link to={`${url}/pay`}>Pay</Link>
                <Link to={`${url}/my-orders`}>My orders</Link>
                <Link to={`${url}/review`}>Review</Link>
                <Link to={`${url}/logout`}>Logout</Link>
            </div>
            <div className="container-fluid dashbord-body">
                <Switch>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/my-orders`}>
                        <Myorders></Myorders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                </Switch>
            </div>
        </>
    );
};

export default Dashboard;
