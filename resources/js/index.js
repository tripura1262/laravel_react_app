import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Link,
    Route,
    Switch,
    HashRouter,
} from "react-router-dom";
import DisplayItems from "./components/items/DisplayItems";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import DisplayUsers from "./components/users/DisplayUsers";
import Weather from "./components/weather/Weather";
import Main from "./Router";
import * as serviceWorker from './serviceWorker';
import './index.css'
import DisplayWeather from "./components/weather/DisplayWeather";

class Index extends Component {
    render() {
        return (
            // <BrowserRouter>
            //     <Route component={Main} />
            // </BrowserRouter>
            <HashRouter>
                {/* <Route path="/" component={Login} /> */}
                {/* <Route path="/register" component={Register} />
                <Route exact path="/dashboard" component={DisplayWeather} />
                <Route path="/items" component={DisplayItems} />
                <Route path="/users" component={DisplayUsers} /> */}
                <Route component={Main} />
            </HashRouter>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById("example"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();