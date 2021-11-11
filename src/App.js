import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ScrollToTop from "./Shared/ScrollToTop";
import Home from "./Pages/Home/Home";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Login from "./Pages/LoginSystem/Login/Login";
import Products from "./Pages/Products/Products";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Register from "./Pages/LoginSystem/Register/Register";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import ProductsDetails from "./Pages/ProductsDetails/ProductsDetails";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <BrowserRouter>
                    <ScrollToTop />
                    <Switch>
                        <Route exact path={["/", "/home"]}>
                            <Home></Home>
                        </Route>
                        <Route exact path="/login">
                            <Login></Login>
                        </Route>
                        <Route exact path="/register">
                            <Register></Register>
                        </Route>
                        <Route exact path="/products">
                            <Products></Products>
                        </Route>
                        <PrivateRoute exact path="/products/:id">
                            <ProductsDetails></ProductsDetails>
                        </PrivateRoute>
                        <Route exact path="/dashboard">
                            <Dashboard></Dashboard>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
