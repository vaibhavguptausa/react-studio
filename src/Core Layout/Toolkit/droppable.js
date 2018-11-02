import React, { Component, PropTypes } from 'react';
import { ItemTypes } from './constants';
import { DropTarget } from 'react-dnd';
import { DragDropContext } from 'react-dnd';
import Box from './Box' ;
import HTML5Backend from 'react-dnd-html5-backend';
import NormalBox from './NormalBox';
import {boxProp} from '../../index';
import InputField from './Inputfield';
const Target = {
    drop(){
       
        return {};
    }
  };
  
  let numberBox=0;
  let numberInput=0;
  let children=[];
  class Droppable extends Component {
      constructor(props)
      {
          super(props);
          
      }
      componentWillMount=()=>{
        children=[];
        numberBox=0;
        numberInput=0;
      }
      componentWillUpdate=()=>{
        if(this.props.didDrop && this.props.item=='box')
        {
          numberBox++;
          children.push(<NormalBox />);
        }
        if(this.props.didDrop && this.props.item=='input')
        {
          numberInput++;
          children.push(<InputField />)
        }
        console.log(`numberBox`, numberBox);
        console.log(`numberInput`, numberInput);
        console.log(`children`, children);
      }
    //   insertBox=()=>{
        
    //    // for(let i=0;i<numberBox;i++)
    //     {
    //       children.push(<NormalBox />);
    //     }
    //   //  for(let i=0;i<numberInput;i++)
      
      
    //     return children;
    //   }
    // insertInput=()=>{
      
    //     children.push(<InputField />)
    //     return children ;
    // }
    render() {
        
      const {connectDropTarget, isOver, didDrop,item } = this.props;
      var NormalBoxStatus= didDrop ;
   
      return (
          
          connectDropTarget(
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'pink'
          
        }}>
          {children}         
        </div>
        )
       
        
      );
    }
  }
  
  export default DropTarget([ItemTypes.BOX, ItemTypes.INPUT], Target, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    didDrop: monitor.didDrop(),
    item : monitor.getItemType()
  }))(Droppable);