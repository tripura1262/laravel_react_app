import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
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
import axios from "axios";
import { BASE_URL } from "./../../services";
import TableRow from "./TableRow";
import CreateItem from "./CreateItem";

export default class DisplayItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            showComponent: false,
        };
    }

    onButtonClick() {
        this.setState({
            showComponent: true,
        });
    }

    loadItems() {
        axios
            .get(BASE_URL + "/api/items")
            .then((response) => {
                this.setState({
                    items: response.data,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount() {
        this.loadItems();
    }

    tabRow() {
        if (this.state.items) {
            return this.state.items.map((item, i) => {
                return <TableRow items={item} key={i} />;
            });
        }
    }
    deleteItem(id){
        axios.delete(BASE_URL + "/api/item/"+id).then((response) => {
            this.loadItems()
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="container">
                <h1> Items List </h1>
                <Button
                    color="primary"
                    onClick={() => this.onButtonClick()}
                    className="my-3"
                >
                    {" "}
                    Add Item{" "}
                </Button>
                {this.state.showComponent ? <CreateItem /> : null}
                {/* <Button
                    color="primary"
                    onClick={this.createItem}
                    className="my-3"
                >
                    {" "}
                    Add Item{" "}
                </Button> */}
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Decription</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>{this.tabRow()}</tbody>
                </Table>
            </div>
        );
    }
}
