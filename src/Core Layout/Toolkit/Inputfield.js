
    import React, { Component } from 'react';
    import { ItemTypes } from './constants';
    import { DragSource } from 'react-dnd';
    import { Popover, Tooltip, Button, Modal, OverlayTrigger, FormControl, ControlLabel } from 'react-bootstrap';
    import {Popup} from './ModalInput';
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
             this.state = { modalState: false, height: 50, width: 70, color: 'red', text:'Heading', field:'', value: '' };
         }
         handleClick = (e) => {
          console.log(`hi`);
         
          if (e.type === 'click') {
              this.setState({ modalState: true });
            } else if (e.type === 'contextmenu') {
              e.preventDefault();
              this.setState({ modalState: !this.state.modalState });
            }
      }
      handleClose = () => {
          this.setState({ modalState: false });
      }
      handleChangeAttributes = (parameters) => {
          console.log(parameters.text);
          this.setState({height: parameters.height, width: parameters.width, color : parameters.color, text: parameters.text });
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
            return 	(connectDragSource && connectDragSource(
            <div style={{marginTop:`${this.props.positionY}px`,padding: `${5}px` ,marginLeft:`${this.props.positionX}px`, position :'inherit',height: `${50}px` , width: `${200}px`, backgroundColor: `green`}}>
             <ControlLabel onClick={this.handleClick} onContextMenu={this.handleClick}>{this.state.field}</ControlLabel> 
            
            <FormControl
            id="text"
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
            {this.state.modalState ? <Popup modalState={this.state.modalState} onClose={this.handleClose} onSave={this.handleChangeAttributes} text={this.state.text} height={this.state.height} width={this.state.width} color={this.state.color}></Popup> : <div></div>}
             </div> ))
            }
        }
       
    
        export default DragSource(ItemTypes.INPUT, inputSource, (connect, monitor,Component) => ({
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging()
          }))(InputField);   