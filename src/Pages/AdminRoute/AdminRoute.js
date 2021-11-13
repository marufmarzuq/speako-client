import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    const [admin, setAdmin] = useState();
    useEffect(() => {
        fetch(`https://gentle-forest-53652.herokuapp.com/users/${user.email}`)
            .then((res) => res.json())
            .then((data) => setAdmin(data.admin));
    }, [user.email]);
    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center vw-100 vh-100">
                <Spinner animation="border" variant="info" />
            </div>
        );
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;
