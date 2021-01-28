import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import SubNav from "../Navigation/SubNav";
class Header extends Component {
    // 1.1
    constructor(props) {
        super(props);
        this.state = {
            user: props.userData,
            isLoggedIn: props.userIsLoggedIn,
        };
        this.logOut = this.logOut.bind(this);
    }
    // 1.2
    logOut() {
        let appState = {
            isLoggedIn: false,
            user: {},
        };
        localStorage["appState"] = JSON.stringify(appState);
        this.setState(appState);
        this.props.history.push("/");
    }
    // 1.3
    render() {
        const aStyle = {
            cursor: "pointer",
        };
        
        return (
            <nav className=".navbar-css navbar">
                <ul>
                    {/* <li>
                        <Link to="/">Index</Link>
                    </li> */}
                    <SubNav />
                    {/* {this.state.isLoggedIn ? <SubNav /> : ""}
                    {!this.state.isLoggedIn ? (
                        <li>
                            <Link to="/">Login</Link> |{" "}
                            <Link to="/register">Register</Link>
                        </li>
                    ) : (
                        ""
                    )} */}
                </ul>
            </nav>
        );
    }
}
export default withRouter(Header);
