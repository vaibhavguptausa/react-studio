import React, { Component, PropTypes } from 'react';
import { ItemTypes, children, addChild, modifyChild } from './constants';
import { DropTarget, DragLayer } from 'react-dnd';
import NormalBox from './NormalBox';
import InputField from './Inputfield';

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
  "RADIO": "NORMALRADIO",
  "DATEPICKER": "NORMALDATEPICKER",
  "CHECKBOX": "NORMALCHECKBOX",
  "BUTTON": "NORMALBUTTON",
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
      var tempChildStatus = {
        "id": children.length,
        "x": position.x,
        "y": position.y,
        "height": 70,
        "width": 50,
        "color": 'red',
        "text": '',
        "type": inputTypes[item.type],
        "inputType": item.inputType,
      }
      addChild(tempChildStatus);
    }
  },
}


class Droppable extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    
    const { connectDropTarget } = this.props;

    return (

      connectDropTarget(
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: '#f2f2f2',
          marginLeft: `${0}px`,
          marginTop: `${0}px`

        }}>
          {children.map((child, index) => {
            if (child.type === 'NORMALBOX')
              return <NormalBox type='NORMALBOX' id={index} positionX={child.x} positionY={child.y} />
            else if (child.type === 'INPUT') {
              console.log(`passed props to input field`, child.inputType)
              return <InputField type='INPUT' inputType={child.inputType} id={index} positionX={child.x} positionY={child.y} />
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
