import React, { Component } from 'react';
import { ItemTypes } from './constants';
import { DragSource } from 'react-dnd';

const InputSource = {
  beginDrag(props) {
    const { type, inputType } = props;
    return { type, inputType };
  }
};

class DraggableInputField extends Component {
  giveStyle = () => {
    if (this.props.inputType == 'button') {
      var style = {
        color: 'green',
        width: '30%',
        height: '50%'
      }
      return style;
    }
    else {
      var style = {};
      return style;
    }
  }
  render() {
    const { isDragging, connectDragSource, type } = this.props;
    return connectDragSource(<div style={{ height: `${50}px`, width: `${200}px`, marginTop: `${15}px`, marginLeft: `${-30}px` }}>
      <input type={this.props.inputType} style={this.giveStyle()} placeholder='write something' /></div>);
  }
}

export default DragSource(ItemTypes.DRAGGABLEINPUT, InputSource, connect => ({
  connectDragSource: connect.dragSource(),
}))(DraggableInputField);