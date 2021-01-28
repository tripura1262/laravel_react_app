import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router";

const baseUrl = window.location.origin + window.location.pathname

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "" };
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios
            .get(baseUrl+`users/${this.props.params.id}/edit`)
            .then((response) => {
                this.setState({
                    name: response.data.name,
                    price: response.data.email,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    handleChange1(e) {
        this.setState({
            name: e.target.value,
        });
    }
    handleChange2(e) {
        this.setState({
            price: e.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const products = {
            name: this.state.name,
            price: this.state.price,
        };
        let uri = baseUrl+"users/" + this.props.params.id;
        axios.patch(uri, products).then((response) => {
            this.props.history.push("/users");
        });
    }
    render() {
        return (
            <div>
                <h1>Update Item</h1>
                <div className="row">
                    <div className="col-md-10"></div>
                    <div className="col-md-2">
                        <Link to="/users" className="btn btn-success">
                            Return to Users
                        </Link>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>User Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.handleChange1}
                        />
                    </div>

                    <div className="form-group">
                        <label name="email">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.handleChange2}
                        />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default EditUser;
