import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Weather from "./Weather";

export default class DisplayWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn} />
                <Weather />
                <Footer />
            </div>
        );
    }
}
