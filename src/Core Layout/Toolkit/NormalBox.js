import React, { Component } from 'react';
import { ItemTypes } from './constants';
import { deleteChild, modifyChildAttributes } from './constants';
import { DragSource } from 'react-dnd';
import { Popup } from './Modal';
import {attributesElementsNormalBox} from './config'
const boxSource = {
    beginDrag(props) {
        const { type, id, positionX, positionY } = props
        return { type, id, positionX, positionY };
    }
};

class NormalBox extends Component {
    constructor(props) {
        super(props);
        this.state = { modalState: false, attributes: attributesElementsNormalBox, ifExists: this.props.status };
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
        const attributes= this.state.attributes;
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
          'border': `1px black solid`,
          'marginTop': `${this.props.positionY}px`,
          'padding': `${0}px`,
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
        styleObj=Object.assign({}, styleObj, permstyle);
        console.log(`styleobj`, styleObj);
        return styleObj;
      }

    render() {
        modifyChildAttributes(this.props.id, this.state.attributes, this.state.ifExists);
        console.log(`atrelem`, attributesElementsNormalBox);
        const {
            hideSourceOnDrag,
            connectDragSource,
            isDragging,
        } = this.props;
        if (isDragging && hideSourceOnDrag) {
            return null;
        }
        if (this.state.ifExists) {
            return (connectDragSource && connectDragSource(
                <div onClick={this.handleClick} onContextMenu={this.handleClick} style={this.getStyles()}>
                    {this.state.attributes.text}

                    <Popup modalState={this.state.modalState} id={this.props.id} onDelete={this.handleDelete} onClose={this.handleClose} onSave={this.handleChangeAttributes} attributes={attributesElementsNormalBox}></Popup>
                </div>))
        }
        else
            return null
    }
}

export default DragSource(ItemTypes.NORMALBOX, boxSource, (connect, monitor, Component) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))(NormalBox);