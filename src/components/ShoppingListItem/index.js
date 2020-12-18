import React, { Component } from 'react';

class ShoppingListItem extends Component {
    render() {
        if (this.props.bought) {
            return <li><strike>{this.props.name} - {this.props.price} RSD</strike></li>
        }

        return <li onClick={() => this.props.fn(this.props.name)}>{this.props.name} - {this.props.price} RSD</li>
    }
}

export default ShoppingListItem;