import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
class SubNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.userData,
            isLoggedIn: props.userIsLoggedIn,
        };
        this.logOut = this.logOut.bind(this);
    }
    logOut() {
        let appState = {
            isLoggedIn: false,
            user: {},
        };
        localStorage["appState"] = JSON.stringify(appState);
        this.setState(appState);
        this.props.history.push("/");
    }
    render() {
        const aStyle = {
            cursor: "pointer",
        };

        return (
            <nav className="navbar">
                <ul>
                    <li className="has-sub">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="has-sub">
                        <Link to="/users">Users</Link>
                    </li>
                    <li className="has-sub">
                        <Link to="/items">Items</Link>
                    </li>
                    <li className="has-sub">
                        <Link to="/weather">Weather</Link>
                    </li>
                    <li className="has-sub">
                        <Link to="/">
                            {" "}
                            <span onClick={this.logOut}>Logout</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
export default withRouter(SubNav);
