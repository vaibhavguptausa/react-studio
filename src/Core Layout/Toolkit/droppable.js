import React, { Component, PropTypes } from 'react';
import { ItemTypes, children, addChild, modifyChild } from './constants';
import { DropTarget, DragLayer } from 'react-dnd';
import NormalBox from './NormalBox';
import InputField from './Inputfield';
import {updateChildren} from './../../UserFiles/constant';


const moveElement=(id, positionX, positionY)=>{
  for(var i=0;i<children.length;i++)
  {
    if(children[i].id===id)
    {
      modifyChild(id, positionX, positionY);
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
   
    if (item.Type==='BOX') {      
        console.log(`pos`,position);
        var tempChildStatus={
          "id" : children.length,
          "x": position.x,
          "y": position.y,
          "color" : 'red',
          'text' : '',
          'height': 70,
          'width' : 50,
          "Type":"NORMALBOX" 
        }
       addChild(tempChildStatus);
    }
    else if(item.Type==='NORMALBOX')
    {
      const delta =position 
      const positionX = (delta.x)
      const positionY = (delta.y)
      moveElement(item.id, positionX, positionY);
    }
    else if(item.Type==='DRAGGABLEINPUT'){
      var tempChildStatus={
        "id" : children.length,
        "x": position.x,
        "y": position.y,
        "Type":"INPUT" 
      }
      children.push(tempChildStatus);
    }
    else if(item.Type==='INPUT')
    {
      const delta =position 
      const positionX = (delta.x)
      const positionY = (delta.y)
      moveElement(item.id, positionX, positionY);
    }
	},
}


class Droppable extends Component {
  constructor(props) {
    super(props);
  }
  
  
  
  render() {
    updateChildren(children);
   // console.log(`children`, children);
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
          else if(child.Type==='INPUT'){
            return <InputField Type='INPUT' id={index} positionX={child.x} positionY={child.y} />
          }
          })}
        </div>
      )


    );
  }
}

export default DropTarget([ItemTypes.BOX, ItemTypes.INPUT, ItemTypes.NORMALBOX, ItemTypes.DRAGGABLEINPUT], Target, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  didDrop: monitor.didDrop(),
  item: monitor.getItem(),
  itemType: monitor.getItemType(),
  position: monitor.getClientOffset(),
  deltaPosition :monitor.getDifferenceFromInitialOffset()
  
}))(Droppable);
