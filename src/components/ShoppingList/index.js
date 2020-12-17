import React, { Component } from 'react'
import ListItem from '../ShoppingListItem'


var referenca = React.createRef()

class ShoppingList extends Component {
    state = {
        items: ['milk', 'eggs', 'bread'],
    }

    // addItem = () => {
    //     const noviNizItema = this.state.items.slice()
    //     noviNizItema.push('novi item')
    //     this.setState({
    //         items: noviNizItema
    //     })
    // }
    addItem = () => {
        this.setState({
            items: [...this.state.items, 'novi item']
        })
    }

    dodaj = () => {
        // 1. procitaj sta pise u HTML
        // 2. dodaj to sto pise u state
        var noviItem = this.state.text
        this.setState({ items: [...this.state.items, noviItem] })
    }

    inputChange = (key) => (event) => {
        const vrednostInputa = event.target.value
        this.setState({
            [key]: vrednostInputa
        })
    }

    render() {
        console.log(this.state)
        return <div id="pera">
            <input type="text" onChange={this.inputChange('name')}></input>
            <input type="text" onChange={this.inputChange('price')}></input>
            <ul>
                {this.state.items.map(function (item, index, array) {
                    return <div>{item}</div>
                })}
            </ul>
            <button onClick={this.dodaj}>Dodaj nesto u state</button>
        </div>
    }
}

export default ShoppingList