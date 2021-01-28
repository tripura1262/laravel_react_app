import React, { Component } from "react";
import axios from "axios";
import { Link,Route } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TableRow from "./TableRow";

const baseUrl = window.location.origin + window.location.pathname

class DisplayUsers extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "", users: "" ,isLoggedIn: false };
    }

    // check if user is authenticated and storing authentication data as states if true
    componentWillMount() {
        let state = localStorage["appState"];
        if (state) {
            let AppState = JSON.parse(state);
            this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState.user });
            // console.log(AppState.user.id)
        }
    }
    componentDidMount() {
        axios
            .get(baseUrl+"users")
            .then((response) => {
                this.setState({ items: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    tabRow() {
        if (this.state.items instanceof Array) {
            return this.state.items.map(function (object, i) {
                return <TableRow obj={object} key={i} />;
            });
        }
    }

    render() {
        return (
            <div>
                <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn} />
                <h1>Users</h1>

                <div className="row">
                    <div className="col-md-10"></div>
                    <div className="col-md-2">
                        {/* <Route path="/register" component={CreateUser} /> */}
                        <Link to="/register">Add User</Link>
                    </div>
                </div>
                <br />

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>User Name</td>
                            <td>Email</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>{this.tabRow()}</tbody>
                </table>
                <Footer />
            </div>
        );
    }
}
export default DisplayUsers;
