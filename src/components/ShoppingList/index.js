import React, { Component } from 'react'
import ListItem from '../ShoppingListItem'


var referenca = React.createRef()

class ShoppingList extends Component {
    state = {
        items: [
            { name: 'milk', price: 87, bought: true },
            { name: 'eggs', price: 159, bought: false },
            { name: 'bread', price: 50, bought: false }
        ],
    }

    buyItem = (name) => {
        const stariObjekat = this.state.items.find((e) => e.name === name)
        const noviObjekat = { ...stariObjekat, bought: true }
        const updatovaniItemi = this.state.items.map(e => {
            if (e.name !== name) return e
            if (e.name === name) return noviObjekat
        })
        this.setState({
            items: updatovaniItemi
        })
    }


    dodaj = () => {
        var noviItem = { name: this.state.name, price: Number(this.state.price) }
        this.setState({ items: [...this.state.items, noviItem] })
    }

    changeHandler = (event) => {
        const key = event.target.dataset.key
        const value = event.target.value
        this.setState({
            [key]: value
        })
    }

    render() {
        return <div id="pera">
            <div>{this.state.pera}</div>
            <label>Name - {this.state.name}</label>
            <input data-key="name" type="text" onChange={this.changeHandler}></input>
            <label>Price - {this.state.price}</label>
            <input data-key="price" type="text" onChange={this.changeHandler}></input>
            <button onClick={this.dodaj}>Dodaj nesto u state</button>
            <ul>
                {this.state.items.map((item) => {
                    return <ListItem key={item.name} fn={this.buyItem} name={item.name} price={item.price} bought={item.bought}></ListItem>
                })}
            </ul>
            <div>Total price: {this.state.items.filter(e => e.bought === true).map(item => item.price).reduce((a, b) => a + b)}</div>
        </div>
    }
}

export default ShoppingList