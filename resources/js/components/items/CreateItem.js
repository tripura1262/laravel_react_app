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

export default class CreateItem extends Component {
    constructor(props) {
        super(props);
        super(props);
        this.state = {
            items: [],
            newItemModal: false,
            newItemData: {
                name: "",
                price: "",
            },
            editItemModal: false,
            editItemData: {
                name: "",
                price: "",
            },
        };
    }
    
    toggleNewItemModal() {
        this.setState({
            newItemModal: !this.state.newItemModal,
        });
    }

    addItem() {
        axios
            .post(BASE_URL + "/api/item", this.state.newItemData)
            .then((response) => {
                let { items } = this.state;
                this.loadItems();

                this.setState({
                    items: [],
                    newItemModal: false,
                    newItemData: {
                        name: "",
                        price: "",
                    },
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    deleteItem(id){
        // let id = this.props.items.id
        axios.delete(BASE_URL + "/api/item/"+id).then((response) => {
            // this.loadItems()
            this.props.loadItems()
            // history.push('/items');
        }).catch(function (error) {
            console.log(error);
        });
    }
    
    render() {
        return (
            <div>
                <Modal
                    isOpen={this.state.newItemModal}
                    toggle={() => this.toggleNewItemModal}
                >
                    <ModalHeader toggle={() => this.toggleNewItemModal}>
                        Add Item
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="name"> Name </Label>
                            <Input
                                id="name"
                                value={this.state.newItemData.name}
                                onChange={(e) => {
                                    let { newItemData } = this.state;
                                    newItemData.name = e.target.value;
                                    this.setState({ newItemData });
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="price"> Price </Label>
                            <Input
                                id="price"
                                value={this.state.newItemData.price}
                                onChange={(e) => {
                                    let { newItemData } = this.state;
                                    newItemData.price = e.target.value;
                                    this.setState({ newItemData });
                                }}
                            />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={() => this.addItem()}
                        >
                            Add Item
                        </Button>{" "}
                        <Button
                            color="secondary"
                            onClick={() => this.toggleNewItemModal}
                        >
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
