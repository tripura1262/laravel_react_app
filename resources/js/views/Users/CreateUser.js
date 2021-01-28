import React, { Component } from "react";
import { browserHistory } from "react-router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const baseUrl = window.location.origin + window.location.pathname

class CreateItem extends Component {
    
    constructor(props) {
        super(props);
        this.state = { productName: "", productPrice: "",isLoggedIn: false };
        
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // check if user is authenticated and storing authentication data as states if true
    componentWillMount() {
        console.log('create-item')
        let state = localStorage["appState"];
        if (state) {
            let AppState = JSON.parse(state);
            this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState.user });
            // console.log(AppState.user.id)
        }
    }

    handleChange1(e) {
        this.setState({
            productName: e.target.value,
        });
    }
    handleChange2(e) {
        this.setState({
            productPrice: e.target.value,
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const products = {
            name: this.state.productName,
            price: this.state.productPrice,
        };
        let uri = baseUrl+"items";
        axios.post(uri, products).then((response) => {
            // browserHistory.push("/display-item");
            this.props.history.push('/items')
        });
    }

    render() {
        return (
            <div>
                <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn} />
                <h1>Create An Item</h1>
                <form onSubmit={this.handleSubmit} style={{width:'70%',float:'right'}}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Item Name:</label>
                                <input
                                    type="text"
                                    className="form-control col-md-6"
                                    onChange={this.handleChange1}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Item Price:</label>
                                <input
                                    type="text"
                                    className="form-control col-md-6"
                                    onChange={this.handleChange2}
                                />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <button className="btn btn-primary">Add Item</button>
                    </div>
                </form>
                <Footer />
            </div>
        );
    }
}
export default CreateItem;
