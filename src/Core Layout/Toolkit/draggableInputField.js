import React, { Component } from 'react';
import { ItemTypes } from './constants';
import { DragSource } from 'react-dnd';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
const InputSource = {
    beginDrag(props) {
      return {};
    }
  };
  function collect(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
    }
  }
  
 class DraggableInputField extends Component {
      constructor(props)
      {
          super(props);
      }
      render() {
          const { isDragging, connectDragSource } = this.props;
          return connectDragSource(<div style={{height: `${50}px` , width: `${200}px`, marginTop: `${200}px`, backgroundColor: 'green'}}><input placeholder='write something'/></div>)  ;
        }
    }
   
      
    
    export default DragSource(ItemTypes.INPUT, InputSource, connect => ({
        connectDragSource: connect.dragSource(),
      }))(DraggableInputField);