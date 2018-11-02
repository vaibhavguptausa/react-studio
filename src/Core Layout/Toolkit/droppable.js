import React, { Component, PropTypes } from 'react';
import { ItemTypes } from './constants';
import { DropTarget } from 'react-dnd';
import { DragDropContext } from 'react-dnd';
import Box from './Box' ;
import HTML5Backend from 'react-dnd-html5-backend';
import NormalBox from './NormalBox';
import {boxProp} from '../../index';
const Target = {
    drop(){
       
        return {};
    }
  };
  
  let numberBox=0;
  class Droppable extends Component {
      constructor(props)
      {
          super(props);
          
      }
      componentWillMount=()=>{
        numberBox=0;
      }
      componentWillUpdate=()=>{
        if(this.props.didDrop)
        numberBox++;
        console.log(`number`, numberBox);
      }
      insertBox=()=>{
        let children=[];
        for(let i=0;i<numberBox;i++)
        {
          children.push(<NormalBox />);
        }
        return children;
      }
    
    render() {
        
      const {connectDropTarget, isOver, didDrop } = this.props;
      var NormalBoxStatus= didDrop ;
   
      return (
          
          connectDropTarget(
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'pink'
          
        }}>
          {this.insertBox()}         
        </div>
        )
       
        
      );
    }
  }
  
  export default DropTarget(ItemTypes.BOX, Target, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    didDrop: monitor.didDrop(),
  }))(Droppable);