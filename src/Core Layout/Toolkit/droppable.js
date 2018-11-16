import React, { Component, PropTypes } from 'react';
import { ItemTypes, children, addChild, modifyChild } from './constants';
import { DropTarget, DragLayer } from 'react-dnd';
import NormalBox from './NormalBox';
import InputField from './Inputfield';
import {userChildren, updateChildren} from './../../UserFiles/constant';
let numberBox = 0; 
let numberInput = 0;
//let children = [];
let X = `${0}px`;
let Y = `${0}px`;
let childrenPosition = [];

const moveElement=(id, positionX, positionY)=>{
  for(var i=0;i<children.length;i++)
  {
    if(children[i].id===id)
    {
     // console.log(`before`, children[i]);
      modifyChild(id, positionX, positionY);
     // console.log(`after`, children[i]);
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
   // console.log(`childtype`, item.Type);
   //var position1= monitor.getDifferenceFromInitialOffset()
    if (item.Type==='BOX') {
      
      numberBox++;
        
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
       // this.setState({position: this.props.position});
       addChild(tempChildStatus);
        //children.push(tempChildStatus);
      
     
    }
    else if(item.Type==='NORMALBOX')
    {
      const delta =position 
      const positionX = (delta.x)
      const positionY = (delta.y)
      moveElement(item.id, positionX, positionY);
    }
    else if(item.Type==='DRAGGABLEINPUT'){
     // console.log(`pos`,position);
      var tempChildStatus={
        "id" : children.length,
        "x": position.x,
        "y": position.y,
        "Type":"INPUT" 
      }
     // this.setState({position: this.props.position});
     
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
  
  componentWillMount = () => {
   // children = [];
    numberBox = 0;
    numberInput = 0;
    X = `${0}px`;
    Y = `${0}px`;
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
