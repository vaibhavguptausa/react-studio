
    import React, { Component } from 'react';
    import { ItemTypes } from './constants';
    import { DragSource } from 'react-dnd';

    const inputSource = {
        beginDrag(props) {
        const {Type, id, positionX, positionY } = props
          return {Type,id, positionX, positionY};
        }
      };
     class InputField extends Component {
         constructor(props)
         {
             super(props);
         }
         
          render() {
            const {
          hideSourceOnDrag,
          left,
                top,
                id,
          connectDragSource,
          isDragging,
          children,
            } = this.props;
            if (isDragging && hideSourceOnDrag) {
          return null ;
        }
            console.log(`passed props to Box number-${this.props.id}`,this.props.positionX, this.props.positionY)
            return 	(connectDragSource && connectDragSource(<div style={{marginTop:`${this.props.positionY}px`,padding: `${0}px` ,marginLeft:`${this.props.positionX}px`, position :'inherit',height: `${50}px` , width: `${200}px`, backgroundColor: `green`}}> <input /> </div> ))
            }
        }
       
    
        export default DragSource(ItemTypes.INPUT, inputSource, (connect, monitor,Component) => ({
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging()
          }))(InputField);   