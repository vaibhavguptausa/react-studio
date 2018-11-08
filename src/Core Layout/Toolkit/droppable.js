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
let numberBox = 0;
let numberInput = 0;
let children = [];
let X = `${0}px`;
let Y = `${0}px`;
let childrenPosition = [];

const moveBox=(id, positionX, positionY)=>{
  for(var i=0;i<children.length;i++)
  {
    if(children[i].id===id)
    {
      console.log(`before`, children[i]);
      children[i]['x']=positionX;
      children[i]['y']=positionY;
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
    var position= monitor.getClientOffset();
   //var position1= monitor.getDifferenceFromInitialOffset()
    if (item.Type==='BOX') {
      
      numberBox++;
        
        console.log(`pos`,position);
        var tempChildStatus={
          "id" : children.length,
          "x": position.x,
          "y": position.y,
          "Type":"NORMALBOX" 
        }
       // this.setState({position: this.props.position});
       
        children.push(tempChildStatus);
      
     
    }
    else if(item.Type==='NORMALBOX')
    {
      const delta =position 
      const positionX = (delta.x)
      const positionY = (delta.y)
      moveBox(item.id, positionX, positionY);
    }
	},
}


class Droppable extends Component {
  constructor(props) {
    super(props);
   // this.state={position: this.props.position};
  }
  
  componentWillMount = () => {
    children = [];
    numberBox = 0;
    numberInput = 0;
    X = `${0}px`;
    Y = `${0}px`;
  }
  
  // componentWillUpdate = () => {
    
  //   if (this.props.position) {
  //     X = `${this.props.position.x}px`;
  //     Y = `${this.props.position.y}px`;
  //    console.log(`drop position`, this.props.position);
  //   }
    


   
  // }
 
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
          marginLeft: `${0}px`,
          marginTop: `${0}px`

        }}>
          {children.map((child, index)=>{
          if(child.Type==='NORMALBOX')
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
  item: monitor.getItem(),
  itemType: monitor.getItemType(),
  position: monitor.getClientOffset(),
  deltaPosition :monitor.getDifferenceFromInitialOffset()
  
}))(Droppable);
