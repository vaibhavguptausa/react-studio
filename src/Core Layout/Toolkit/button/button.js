import React, { Component } from 'react';
import { ItemTypes } from './../constants';
import { DragSource } from 'react-dnd';

const buttonSource = {
  beginDrag(props) {
    const { type } = props;
    return { type };
  }
};
const Button = () => {
  const { isDragging, connectDragSource } = this.props;
  return connectDragSource(<div style={{ height: `${50}px`, width: `${20}px`, marginTop: `${100}px`, marginLeft: `${-30}px`, backgroundColor: 'green' }}><button /></div>);
}



export default DragSource(ItemTypes.BUTTON, buttonSource, connect => ({
  connectDragSource: connect.dragSource(),
}))(Button);