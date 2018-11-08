import React, { Component, PropTypes } from 'react';
import { ItemTypes } from './constants';
import { DropTarget, DragLayer } from 'react-dnd';
import { DragDropContext } from 'react-dnd';
import Box from './Box';
import HTML5Backend from 'react-dnd-html5-backend';
import NormalBox from './NormalBox';
import { boxProp } from '../../index';
import InputField from './Inputfield';
import { createChildContext } from '../../../node_modules/react-dnd/lib/DragDropContext';

const moveBox=(id, positionX, positionY)=>{
  for(var i=0;i<children.length;i++)
  {
    if(children[i].id===id)
    {
      console.log(`before`, children[i]);
      children[i].x=positionX;
      children[i].y=positionY;
      console.log(`after`, children[i]);
    }

  }
 
  
 }
const Target = {
	drop(
		props,
		monitor,
		component,
	) {
		if (!component) {
			return
		}
    const item = monitor.getItem()
    console.log(`item`, item)
    if(item.Type==='BOX'){
      console.log(`found a BOX`)
      return 
    }
		const delta = monitor.getDifferenceFromInitialOffset() 
		const positionX = Math.round(item.positionX + delta.x)
		const positionY = Math.round(item.positionY + delta.y)
    if(item.Type==='NORMALBOX') {
      console.log(`found a NORMALBOX`);
      moveBox(item.id, positionX, positionY);
    }
	},
}


class Droppable extends Component {
  constructor(props) {
    super(props);
    
  }
  
  componentWillMount = () => {
    children = [];
    numberBox = 0;
    numberInput = 0;
    X = `${0}px`;
    Y = `${0}px`;
  }
  componentWillUpdate = () => {
    
    if (this.props.position) {
      X = `${this.props.position.x}px`;
      Y = `${this.props.position.y}px`;
     console.log(`drop position`, this.props.position);
    }
    if (this.props.didDrop && this.props.item == 'box' && !this.props.item.id) {
      
      numberBox++;
       
        var tempChildStatus={
          "id" : children.length+1,
          "x": {X},
          "y":{Y},
          "type":'box'
        }
       
        children.push(tempChildStatus);
      
     
    }

    if (this.props.didDrop && this.props.item == 'input' && !this.props.item.id) {
      numberInput++;
      var tempChildStatus={
        "id" : children.length+1,
        "x": {X},
        "y":{Y},
        "type":'input'
      }
     
      children.push(tempChildStatus);
    }

   
  }
 
  render() {
    console.log(`children`, children);
    const { connectDropTarget, isOver, didDrop, item, position } = this.props;
    var NormalBoxStatus = didDrop;
    
    return (

      connectDropTarget(
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'pink',
          marginLeft: `${240}px`,
          marginTop: `${95}px`

        }}>
          {children.map((child, index)=>{
          if(child.type==='box')
         return  <NormalBox Type='NORMALBOX' id={index} positionX={child.x} positionY={child.y} />
          else{
            return <InputField Type='INPUTFIELD' id={index} positionX={child.x} positionY={child.y} />
          }
          })}
        </div>
      )


    );
  }
}

export default DropTarget([ItemTypes.BOX, ItemTypes.INPUT, ItemTypes.NORMALBOX], Target, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  didDrop: monitor.didDrop(),
  item: monitor.getItemType(),
  position: monitor.getClientOffset()
}))(Droppable);
