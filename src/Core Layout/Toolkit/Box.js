import React, { Component } from 'react';
import { ItemTypes } from './constants';
import { DragSource } from 'react-dnd';

const boxSource = {
    beginDrag(props) {
      const {type, inputType}= props;
      return {type, inputType};
    }
  };
 
  
 class Box extends Component {
      constructor(props)
      {
          super(props);
      }
      render() {
          const { isDragging, connectDragSource } = this.props;
          return connectDragSource(<div style={{height: `${100}px` ,marginTop:`${10}px`, width: `${100}px`, backgroundColor: `red`, position: 'absolute', paddingTop:   `${10}px`, zIndex:`$20`}}> </div>)  ;
        }
    }
   
      
   
    export default DragSource(ItemTypes.BOX, boxSource, connect => ({
        connectDragSource: connect.dragSource(),
      }))(Box);