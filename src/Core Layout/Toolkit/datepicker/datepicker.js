import React, { Component } from 'react';
import { ItemTypes } from './../constants';
import { DragSource } from 'react-dnd';

const DatePickerSource = {
  beginDrag(props) {
    const {type}= props;
    return {type};
  }
  };
 class DatePicker extends Component {
      constructor(props)
      {
          super(props);
      }
      render() {
          const { isDragging, connectDragSource } = this.props;
          return connectDragSource(<div style={{height: `${50}px` , width: `${200}px`, marginTop: `${100}px`, marginLeft: `${-30}px` ,backgroundColor: 'green'}}><input placeholder='write something' type="date"/></div>)  ;
        }
    }
   
      
    
    export default DragSource(ItemTypes.DATEPICKER, DatePickerSource, connect => ({
        connectDragSource: connect.dragSource(),
      }))(DatePicker);