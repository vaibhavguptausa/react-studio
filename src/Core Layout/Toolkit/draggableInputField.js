import React, { Component } from 'react';
import { ItemTypes } from './constants';
import { DragSource } from 'react-dnd';

const InputSource = {
  beginDrag(props) {
    const {type}= props;
    return {type};
  }
  };
 class DraggableInputField extends Component {
      
      render() {
       
          const { isDragging, connectDragSource,type } = this.props;
          return connectDragSource(<div style={{height: `${50}px` , width: `${200}px`, marginTop: `${15}px`, marginLeft: `${-30}px` }}><input type={this.props.type} placeholder='write something'/></div>)  ;
        }
    }
   
      
    
    export default DragSource(ItemTypes.DRAGGABLEINPUT, InputSource, connect => ({
        connectDragSource: connect.dragSource(),
      }))(DraggableInputField);