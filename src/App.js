import React, { Component } from 'react';
import Lista from './components/ShoppingList'

class ShoppingListApp extends Component {
  state = {
    text: "neki tekst"
  }

  changeHandler = (event) => {
    var ispis = event.target.value
    var key = event.target.dataset.key
    this.setState({ [key]: ispis })
  }

  render() {
    return (
      <>
        {/* <div>{this.state.text}</div>
        <input data-key="text" type="text" onChange={this.changeHandler}></input> */}
        <Lista></Lista>
      </>
    );
  }
}

export default ShoppingListApp;