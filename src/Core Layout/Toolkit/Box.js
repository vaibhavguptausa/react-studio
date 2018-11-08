import React, { Component } from 'react';
import { ItemTypes } from './constants';
import { DragSource } from 'react-dnd';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
const boxSource = {
    beginDrag(props) {
      const {Type}= props;
      return {Type};
    }
  };
  function collect(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
    }
  }
  
 class Box extends Component {
      constructor(props)
      {
          super(props);
      }
      render() {
          const { isDragging, connectDragSource } = this.props;
          return connectDragSource(<div style={{height: `${100}px` , width: `${100}px`, backgroundColor: `red`, position: 'absolute', paddingTop:   `${10}px`, zIndex:`$20`}}> {this.props.children}</div>)  ;
        }
    }
   
      
   
    export default DragSource(ItemTypes.BOX, boxSource, connect => ({
        connectDragSource: connect.dragSource(),
      }))(Box);