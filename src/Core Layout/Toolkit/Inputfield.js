import React, { Component } from 'react';
import { ItemTypes, modifyChildAttributes } from './constants';
import { DragSource } from 'react-dnd';
import { Popup } from './ModalInput';

const inputSource = {
  beginDrag(props) {
    const { type, id, positionX, positionY, inputType } = props
    return { type, id, positionX, positionY, inputType };
  }
};

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = { modalState: false, height: 50, width: 100, color: 'yellow', type: this.props.inputType, ifExists: this.props.status };
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
    console.log(`para`, parameters);
    this.setState({ height: parameters.height, width: parameters.width, color: parameters.color, type: parameters.type });
  }
  handleDelete = () => {
    // deleteChild(this.props.id);
    console.log(`id`, this.props.id)
    this.setState({ ifExists: false });

  }

  render() {
    modifyChildAttributes(this.props.id, this.state.height, this.state.width, this.state.color, this.state.text, this.state.ifExists);
    const {
      hideSourceOnDrag,
      left,
      top,
      id,
      type,
      connectDragSource,
      isDragging,
      children,
    } = this.props;
    if (isDragging && hideSourceOnDrag) {
      return null;
    }

    if (this.state.ifExists) {
      return (connectDragSource && connectDragSource(
        <div onClick={this.handleClick} onContextMenu={this.handleClick} style={{ position: "inherit", height: `${this.state.height}px`, width: `${this.state.width}px`, marginTop: `${this.props.positionY}px`, padding: `${5}px`, marginLeft: `${this.props.positionX}px`, position: 'inherit' }}>
          <input className={this.props.inputType !== 'button' ? "form-control" : "btn btn-default"}
            type={this.props.inputType}
            style={{ height: `${100}%`, width: `${100}%` }}
            placeholder=""
          />
          {this.state.modalState ? <Popup modalState={this.state.modalState} onClose={this.handleClose} onSave={this.handleChangeAttributes} type={this.state.type} height={this.state.height} width={this.state.width} onDelete={this.handleDelete} color={this.state.color} id={this.props.id}></Popup> : <div></div>}
        </div>))
    }
    else {
      return null;
    }
  }
}

export default DragSource(ItemTypes.INPUT, inputSource, (connect, monitor, Component) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(InputField);   