import React, { Component, PropTypes } from 'react';
import { ItemTypes, children, addChild, modifyChild } from './constants';
import { DropTarget, DragLayer } from 'react-dnd';
import NormalBox from './NormalBox';
import InputField from './Inputfield';
import { updateChildren } from './../../UserFiles/constant';
import NormalRadio from './radio/normalRadio';
import NormalCheckbox from './checkbox/normalCheckbox';
import NormalButton from './button/normalButton';
import NormalDatepicker from './datepicker/normalDatepicker';


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
        "type": inputTypes[item.type]
      }

      //adds child to global constant
      addChild(tempChildStatus);
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
          backgroundColor: '#f2f2f2',
          marginLeft: `${0}px`,
          marginTop: `${0}px`

        }}>
          {children.map((child, index) => {
            if (child.type === 'NORMALBOX')
              return <NormalBox type='NORMALBOX' id={index} positionX={child.x} positionY={child.y} />
            else if (child.type === 'INPUT') {
              return <InputField type='INPUT' id={index} positionX={child.x} positionY={child.y} />
            }
            else if (child.type === 'NORMALRADIO')
              return <NormalRadio type="NORMALRADIO" id={index} positionX={child.x} positionY={child.y}></NormalRadio>
            else if (child.type === 'NORMALCHECKBOX') {
              return <NormalCheckbox type="NORMALCHECKBOX" id={index} positionX={child.x} positionY={child.y} />
            }
            else if (child.type === 'NORMALBUTTON') {
              return <NormalButton type="NORMALBUTTON" id={index} positionX={child.x} positionY={child.y} />
            }
            else if (child.type === 'NORMALDATEPICKER') {
              return <NormalDatepicker type="NORMALDATEPICKER" id={index} positionX={child.x} positionY={child.y} />
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
