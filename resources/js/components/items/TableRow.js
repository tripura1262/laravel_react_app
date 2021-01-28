import React, { Component } from "react";
import ReactDOM from "react-dom"
import {
    Button,
} from "reactstrap"
import axios from "axios"
import { BASE_URL } from './../../services'

export default class TableRow extends Component {
    constructor(props) {
        super(props);
        // this.deleteItem.bind(this,this.props.items.id)
    }

    deleteItem(id){
        // let id = this.props.items.id
        axios.delete(BASE_URL + "/api/item/"+id).then((response) => {
            // this.loadItems()
            history.push('/items');
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <tr key={this.props.items.id}>
                <td>{this.props.items.id}</td>
                <td>{this.props.items.name}</td>
                <td>{this.props.items.price}</td>
                <td>
                    <Button
                        color="success"
                        size="sm"
                        className="mr-2"
                        onClick={() => this.editItem.bind(
                            this,
                            this.props.items.id,
                            this.props.items.name,
                            this.props.items.price
                        )}
                    >
                        {" "}
                        Edit{" "}
                    </Button>
                    <Button
                        color="danger"
                        size="sm"
                        // onClick={this.deleteItem.bind(this, this.props.items.id)}
                        onClick={() => this.deleteItem(this.props.items.id)}
                    >
                        {" "}
                        Delete{" "}
                    </Button>
                </td>
            </tr>
        );
    }
}
