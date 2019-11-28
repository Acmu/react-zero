import React, { Component } from 'react';
import AddBtn from './AddBtn';
import './index.less';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1> 🥳 Hello, World </h1>
        <AddBtn />
        <AddBtn />
        <AddBtn />
      </div>
    );
  }
}

export default App;
