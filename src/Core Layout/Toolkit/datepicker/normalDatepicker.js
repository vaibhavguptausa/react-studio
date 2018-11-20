import React, { Component } from 'react';
import { ItemTypes } from './../constants';
import { DragSource } from 'react-dnd';
import {Popup} from './modal';
const NormalDatepickerSource = {
    beginDrag(props) {
    const {type, id, positionX, positionY } = props
      return {type,id, positionX, positionY};
    }
  };
 class NormalDatepicker extends Component {
     constructor(props)
     {
         super(props);
         this.state = { modalState: false, height: 50, width: 70, color: 'yellow', type: 'date'};
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
    
      this.setState({height: parameters.height, width: parameters.width, type: parameters.type});
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
        return 	(connectDragSource && connectDragSource(
        <div onClick={this.handleClick} onContextMenu={this.handleClick} style={{height: `${this.state.height}px` , backgroundColor: `${this.state.color}`, width: `${this.state.width}px` ,position: "inherit",marginTop:`${this.props.positionY}px`,padding: `${5}px` ,marginLeft:`${this.props.positionX}px`, position :'inherit'}}>
        <input className="form-control"
        style={{ }}
        type="date" 
        placeholder=""
    
      />
        {this.state.modalState ? <Popup modalState={this.state.modalState} onClose={this.handleClose} onSave={this.handleChangeAttributes} type={this.state.type} height={this.state.height} width={this.state.width} color={this.state.color}></Popup> : <div></div>}
         </div> ))
        }
    }
   

    export default DragSource(ItemTypes.NORMALDATEPICKER, NormalDatepickerSource, (connect, monitor,Component) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
      }))(NormalDatepicker);   