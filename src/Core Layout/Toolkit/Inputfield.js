import React, { Component } from 'react';

export default class InputField extends Component {
  render() {
    return <div style={{height: `${50}px` , width: `${200}px`,backgroundColor: 'green', marginLeft:`${700}px`}}><input placeholder='write something'/></div>
  }
}