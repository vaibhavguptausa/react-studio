import React, { Component, PropTypes } from 'react';
import { ItemTypes } from './constants';
import { DropTarget } from 'react-dnd';
import { DragDropContext } from 'react-dnd';
import Box from './Box' ;
import HTML5Backend from 'react-dnd-html5-backend';

const Target = {
    drop(){
        return {};
    }
  };
  
  function collect(connect, monitor) {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver()
    };
  }
  
  class Droppable extends Component {
    render() {
      const {connectDropTarget, isOver } = this.props;
     
  
      return connectDropTarget(
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'pink'

        }}>
        <Box/>
          {isOver &&
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
              zIndex: 1,
              opacity: 0.5,
              backgroundColor: 'skyblue',
            }} />
          }
        </div>
      );
    }
  }
  
  export default DropTarget(ItemTypes.BOX, Target, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  }))(Droppable);