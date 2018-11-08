import React, { Component } from 'react';

export default class InputField extends Component {
  constructor(props)
  {
    super(props);
  }
  render() {
    console.log(`passed props to input field `,this.props.positionX, this.props.positionY)
    return <div style={{padding: `${10}px`,marginLeft:this.props.positionX.X, marginTop: this.props.positionY.Y, display: `flex`}}><div style={{height: `${50}px` , width: `${200}px`,backgroundColor: 'green', }}><input placeholder='write something'/></div></div>
  }
}