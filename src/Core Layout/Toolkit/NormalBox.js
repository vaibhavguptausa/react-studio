import React, { Component } from 'react';
import { ItemTypes } from './constants';
import { modifyChildAttributes } from './constants';
import { DragSource } from 'react-dnd';
import { Popup } from './Modal';
const boxSource = {
    beginDrag(props) {
        const { type, id, positionX, positionY } = props
        return { type, id, positionX, positionY };
    }
};
class NormalBox extends Component {
    constructor(props) {
        super(props);
        this.state = { modalState: false, height: 50, width: 70, color: 'red', text: '' };
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

        this.setState({ height: parameters.height, width: parameters.width, color: parameters.color, text: parameters.text });
    }

    render() {
        modifyChildAttributes(this.props.id, this.state.height, this.state.width, this.state.color, this.state.text);
        const {
            hideSourceOnDrag, 
            connectDragSource,
            isDragging,
        } = this.props;
        if (isDragging && hideSourceOnDrag) {
            return null;
        }

        return (connectDragSource && connectDragSource(
            <div onClick={this.handleClick} onContextMenu={this.handleClick} style={{ height: `${this.state.height}px`, width: `${this.state.width}px`, backgroundColor: `${this.state.color}`, marginTop: `${this.props.positionY}px`, padding: `${0}px`, marginLeft: `${this.props.positionX}px`, position: 'inherit' }}>
                <h1>{this.state.text}</h1>

                {this.state.modalState ? <Popup modalState={this.state.modalState} id={this.props.id} onClose={this.handleClose} onSave={this.handleChangeAttributes} id={this.props.id} text={this.state.text} height={this.state.height} width={this.state.width} color={this.state.color}></Popup> : <div></div>}
            </div>))
    }
}


export default DragSource(ItemTypes.NORMALBOX, boxSource, (connect, monitor, Component) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))(NormalBox);




