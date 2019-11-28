import React, { Component } from 'react';

class AddBtn extends Component {
  state = {
    num: 123,
  };

  handleChange = val => {
    this.setState(({ num }) => ({
      num: num + val,
    }));
  };

  render() {
    const { num } = this.state;
    return (
      <div>
        <p>number is {num}</p>
        <button
          onClick={() => {
            this.handleChange(1);
          }}
        >
          add one
        </button>
        <br></br>
        <button
          onClick={() => {
            this.handleChange(-1);
          }}
        >
          minus one
        </button>
      </div>
    );
  }
}

export default AddBtn;
