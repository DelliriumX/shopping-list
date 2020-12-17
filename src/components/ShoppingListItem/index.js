import React, { Component } from 'react';

class ShoppingListItem extends Component {
    state = {
        bought: false
    }


    buyItem = () => this.setState({ bought: true })


    render() {

        if (this.state.bought) {
            return <li><strike>{this.props.name} - {this.props.price} RSD</strike></li>
        }

        return <li onClick={this.buyItem}>{this.props.name} - {this.props.price} RSD</li>
    }
}

export default ShoppingListItem;