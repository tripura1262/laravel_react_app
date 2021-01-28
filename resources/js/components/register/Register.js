import React, { Component } from "react";
import {
    Form,
    Table,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    FormGroup,
    Label,
} from "reactstrap";

import { BASE_URL } from "./../../services";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            error: "",
            formSubmitting: false,
            user: {
                email: "",
                password: "",
            },
            redirect: props.redirect,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ formSubmitting: true });
        let userData = this.state.user;
        axios
            .post(BASE_URL + "/api/auth/register", userData)
            .then((response) => {
                return response;
            })
            .then((json) => {
                if (json.data.success) {
                    let userData = {
                        id: json.data.id,
                        name: json.data.name,
                        email: json.data.email,
                        access_token: json.data.access_token,
                    };
                    let appState = {
                        isLoggedIn: true,
                        user: userData,
                    };
                    localStorage["appState"] = JSON.stringify(appState);
                    this.setState({
                        isLoggedIn: appState.isLoggedIn,
                        user: appState.user,
                        error: "",
                    });
                    location.reload();
                } else {
                    alert(`Our System Failed To Register Your Account!`);
                }
            })
            .catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code that falls out of the range of 2xx
                    let err = error.response.data;
                    this.setState({
                        error: err.message,
                        errorMessage: err.errors,
                        formSubmitting: false,
                    });
                } else if (error.request) {
                    // The request was made but no response was received `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
                    let err = error.request;
                    this.setState({
                        error: err,
                        formSubmitting: false,
                    });
                } else {
                    // Something happened in setting up the request that triggered an Error
                    let err = error.message;
                    this.setState({
                        error: err,
                        formSubmitting: false,
                    });
                }
            })
            .finally(this.setState({ error: "" }));
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>

                <FormGroup>
                    <Label for="first_name"> First Name </Label>
                    <Input
                        type="first_name"
                        id="first_name"
                        placeholder="Enter First Name"
                        value={this.state.first_name}
                        onChange={(e) => {
                            let { user } = this.state;
                            user.first_name = e.target.value;
                            this.setState({ user });
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="last_name"> Last Name </Label>
                    <Input
                        type="last_name"
                        id="last_name"
                        placeholder="Enter Last Name"
                        value={this.state.last_name}
                        onChange={(e) => {
                            let { user } = this.state;
                            user.last_name = e.target.value;
                            this.setState({ user });
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="email"> Email Address </Label>
                    <Input
                        type="email"
                        id="email"
                        placeholder="Enter Email"
                        value={this.state.email}
                        onChange={(e) => {
                            let { user } = this.state;
                            user.email = e.target.value;
                            this.setState({ user });
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="password"> Password </Label>
                    <Input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        value={this.state.password}
                        onChange={(e) => {
                            let { user } = this.state;
                            user.password = e.target.value;
                            this.setState({ user });
                        }}
                    />
                </FormGroup>
                <Button type="submit" color="primary">
                    Sign Up
                </Button>
                <p className="forgot-password text-right">
                    Already registred <a href="#/login">sign in?</a>
                </p>
            </Form>
        );
    }
}
