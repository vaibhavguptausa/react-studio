    import React, { Component } from 'react';
    import { ItemTypes } from './constants';
    import { DragSource } from 'react-dnd';
    import {  FormControl, ControlLabel } from 'react-bootstrap';
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
             this.state = { modalState: false, height: 50, width: 70, color: 'yellow', type: 'text'};
         }
         handleClick = (e) => {
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
        console.log(`para` , parameters);
          this.setState({height: parameters.height, width: parameters.width, color : parameters.color , type: parameters.type});
      }
  
          render() {
            console.log(`input state`, this.state.type);
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
            return 	(connectDragSource && connectDragSource(
            <div onClick={this.handleClick} onContextMenu={this.handleClick} style={{position: "inherit", height: `${this.state.height}px` , width: `${this.state.width}px`,marginTop:`${this.props.positionY}px`,padding: `${5}px` ,marginLeft:`${this.props.positionX}px`, position :'inherit',backgroundColor: `${this.state.color}`}}>
            <input className="form-control"
            type={this.state.type}
            placeholder=""
        
          />
            {this.state.modalState ? <Popup modalState={this.state.modalState} onClose={this.handleClose} onSave={this.handleChangeAttributes} text={this.state.text} height={this.state.height} width={this.state.width} color={this.state.color}></Popup> : <div></div>}
             </div> ))
            }
        }
       
    
        export default DragSource(ItemTypes.INPUT, inputSource, (connect, monitor,Component) => ({
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging()
          }))(InputField);   