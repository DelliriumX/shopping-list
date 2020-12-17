import React, { Component } from 'react';
import Lista from './components/ShoppingList'

class ShoppingListApp extends Component {
  render() {
    return (
      <>
        <div>Applikacija: Hello</div>

        <Lista></Lista>
        <Lista></Lista>
      </>
    );
  }
}

export default ShoppingListApp;