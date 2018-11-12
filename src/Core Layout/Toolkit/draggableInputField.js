import React, { Component } from 'react';
import { ItemTypes } from './constants';
import { DragSource } from 'react-dnd';

const InputSource = {
  beginDrag(props) {
    const {Type}= props;
    return {Type};
  }
  };
 
  
  
 class DraggableInputField extends Component {
      constructor(props)
      {
          super(props);
      }
      render() {
          const { isDragging, connectDragSource } = this.props;
          return connectDragSource(<div style={{height: `${50}px` , width: `${200}px`, marginTop: `${200}px`, marginLeft: `${-30}px` ,backgroundColor: 'green'}}><input placeholder='write something'/></div>)  ;
        }
    }
   
      
    
    export default DragSource(ItemTypes.DRAGGABLEINPUT, InputSource, connect => ({
        connectDragSource: connect.dragSource(),
      }))(DraggableInputField);