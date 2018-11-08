import React, { Component } from 'react';
import { ItemTypes } from './constants';
import { DragSource } from 'react-dnd';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
const boxSource = {
    beginDrag(props) {
    const {Type, id, positionX, positionY } = props
      return {Type,id, positionX, positionY};
    }
  };
 class NormalBox extends Component {
     constructor(props)
     {
         super(props);
     }
     
      render() {
        const {
			hideSourceOnDrag,
			left,
            top,
            id,
			connectDragSource,
			isDragging,
			children,
        } = this.props;
        if (isDragging && hideSourceOnDrag) {
			return null ;
		}
        console.log(`passed props to Box number-${this.props.id}`,this.props.positionX, this.props.positionY)
        return 	(connectDragSource && connectDragSource(<div style={{marginTop:`${this.props.positionY}px`,padding: `${0}px` ,marginLeft:`${this.props.positionX}px`, position :'inherit'}}> <div style={{height: `${30}px` , width: `${30}px`, backgroundColor: `red`   } }></div> </div> ))
        }
    }
   

    export default DragSource(ItemTypes.NORMALBOX, boxSource, (connect, monitor,Component) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
      }))(NormalBox);   