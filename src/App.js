import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ScrollToTop from "./Shared/ScrollToTop";
import Home from "./Pages/Home/Home";
import AuthProvider from "./Context/AuthProvider/AuthProvider";

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
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
