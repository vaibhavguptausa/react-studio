import React, { Component, PropTypes } from 'react';
import { ItemTypes, children, addChild, modifyChild, counter, incrementCounter } from './constants';
import { DropTarget } from 'react-dnd';
import NormalBox from './NormalBox';
import InputField from './Inputfield';
import {attributesElementsNormalBox,attributesElementsInputfield} from './config';
const moveElement = (id, positionX, positionY) => {
  for (var i = 0; i < children.length; i++) {
    if (children[i].id === id) {
      modifyChild(id, positionX, positionY);
    }
  }
}

const inputTypes = {
  "BOX": "NORMALBOX",
  "DRAGGABLEINPUT": "INPUT",

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
    var position = monitor.getClientOffset();
   
    if (Object.values(inputTypes).indexOf(item.type) > -1) {
      const delta = position
      const positionX = (delta.x)
      const positionY = (delta.y)
      moveElement(item.id, positionX, positionY);
    }
    else {
      var attribute;
      if(item.type === 'NORMALBOX')
       {
        
         attribute=Object.assign({},attributesElementsNormalBox) 
        }
        else{
          attribute=Object.assign({},attributesElementsInputfield) 
        }
      var tempChildStatus = {
        "id": children.length,
        "x": position.x,
        "y": position.y,
        "type": inputTypes[item.type],
        "inputType": item.inputType,
        "ifRender": true,
      }
      tempChildStatus=Object.assign({}, attribute, tempChildStatus);
      addChild(tempChildStatus);
      incrementCounter();
    }
  },
}

class Droppable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { connectDropTarget } = this.props;
    console.log(`children`, children)
    return (
      connectDropTarget(
        <div className=".droppable" style={{
          display: 'flex',
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: '#f2f2f2',
          marginLeft: `${0}px`,
          marginTop: `${0}px`
        }}>
          {children.map((child, index) => {

            debugger
            if (child.type === 'NORMALBOX' && child.ifRender === true)
              return <NormalBox type='NORMALBOX' id={child.id} positionX={child.x} positionY={child.y} status={child.ifRender} />
            else if (child.type === 'INPUT' && child.ifRender === true) {
              console.log(`passed props to input field`, child.inputType)
              return <InputField type='INPUT' inputType={child.inputType} id={child.id} positionX={child.x} positionY={child.y} status={child.ifRender} />
            }
          })}
        </div>
      )
    );
  }
}

export default DropTarget(Object.values(ItemTypes), Target, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  didDrop: monitor.didDrop(),
  item: monitor.getItem(),
  itemType: monitor.getItemType(),
  position: monitor.getClientOffset(),
  deltaPosition: monitor.getDifferenceFromInitialOffset()
}))(Droppable);