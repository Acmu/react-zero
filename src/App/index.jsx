import 'react-hot-loader';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import AddBtn from './AddBtn';
import './index.less';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>
          🥳 Hello 123df
          <a href="https://github.com/gaearon/react-hot-loader" target="blank">
            react-hot-loader
          </a>
        </h1>
        <AddBtn />
        <AddBtn />
        <AddBtn />
      </div>
    );
  }
}

export default hot(App);
