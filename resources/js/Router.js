import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

// import Login from "./components/login/Login";
import Register from "./components/register/Register";

// User is LoggedIn
import PrivateRouter from "./PrivateRouter";
// import Dashboard from "./views/user/Dashboard/Dashboard"; 
import DisplayItems from "./components/items/DisplayItems";
import DisplayUsers from "./components/users/DisplayUsers";
import Weather from "./components/weather/Weather";
import Login from './views/Login/Login'
import Dashboard from "./views/user/Dashboard/Dashboard";

const Main = () => (
    <Switch>
        {/*User might LogIn*/}
        {/* <Route exact path="/" component={Home} /> */}
        {/*User will LogIn*/}
        <Route path="/" component={Login} />
        <Route path="/register" component={Register} />
        {/* User is LoggedIn*/}
        <PrivateRouter exact path="/dashboard" component={Dashboard} />
        <PrivateRouter path="/items" component={DisplayItems} />
        <PrivateRouter path="/users" component={DisplayUsers} />
        <PrivateRouter path="/weather" component={Weather} />
        {/*Page Not Found*/}
        {/* <Route component={NotFound} /> */}
    </Switch>
);
export default Main;