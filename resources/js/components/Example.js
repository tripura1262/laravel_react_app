import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    HashRouter,
} from "react-router-dom";
import DisplayItems from "./items/DisplayItems";
import Login from "./login/Login";
import Register from "./register/Register";

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <HashRouter>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/items" component={DisplayItems} />
                </HashRouter>
            </div>
        );
    }
}

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
