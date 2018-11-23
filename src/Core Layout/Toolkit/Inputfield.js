import React, { Component } from 'react';
import { ItemTypes, modifyChildAttributes } from './constants';
import { DragSource } from 'react-dnd';
import { Popup } from './ModalInput';
import { attributesElementsInputfield } from './config'
const inputSource = {
  beginDrag(props) {
    const { type, id, positionX, positionY, inputType } = props
    return { type, id, positionX, positionY, inputType };
  }
};

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = { modalState: false, attributes: attributesElementsInputfield, type: this.props.inputType, ifExists: this.props.status };
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

  handleChangeAttributes = (name, value) => {
    const attributes = this.state.attributes;
    attributes[name] = value;
    this.forceUpdate();
    console.log(`state`, this.state)

  }
  handleDelete = () => {
    // deleteChild(this.props.id);
    console.log(`id`, this.props.id)
    this.setState({ ifExists: false });

  }
  getStyles = () => {
    var permstyle = {
      'marginTop': `${this.props.positionY}px`,
      'padding': `${5}px`,
      'marginLeft': `${this.props.positionX}px`,
      'position': 'inherit'
    }
    var styleObj = {};
    Object.keys(this.state.attributes).map((key, ind) => {
      if (isNaN(this.state.attributes[key]))
        styleObj[key] = this.state.attributes[key];
      else {
        styleObj[key] = `${this.state.attributes[key]}px`;
      }
    })
    styleObj = Object.assign({}, styleObj, permstyle);
    console.log(`styleobj`, styleObj);
    return styleObj;
  }
  render() {
    modifyChildAttributes(this.props.id, this.state.attributes, this.state.ifExists);
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
        <div onClick={this.handleClick} onContextMenu={this.handleClick} style={this.getStyles()}>
          {this.props.inputType !== 'button' ? <input className="form-control"
            type={this.props.inputType}
            style={{ height: `${100}%`, width: `${100}%` }}
            placeholder=""
          /> : <input className="btn btn-default"
            type={this.props.inputType}
            style={{ height: `${100}%`, width: `${100}%` }}
            placeholder="" value={this.state.attributes.text}
            />}
          {<Popup modalState={this.state.modalState} onClose={this.handleClose} onSave={this.handleChangeAttributes} type={this.state.type} attributes={this.state.attributes} onDelete={this.handleDelete} id={this.props.id}></Popup>}
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