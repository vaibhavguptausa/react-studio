import React, { Component } from 'react';
import { ItemTypes } from './constants';
import { DragSource } from 'react-dnd';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Popup } from './Modal';
const boxSource = {
    beginDrag(props) {
        const { Type, id, positionX, positionY } = props
        return { Type, id, positionX, positionY };
    }
};
class NormalBox extends Component {
    constructor(props) {
        super(props);
        this.state = { modalState: false, height: 30, width: 40 };
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
    handleChangeAttributes = (height, width) => {
        this.setState({height: height, width: width });
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
            return null;
        }
        //console.log(`passed props to Box number-${this.props.id}`,this.props.positionX, this.props.positionY)
        return (connectDragSource && connectDragSource(
            <div onClick={this.handleClick} onContextMenu={this.handleClick} style={{ marginTop: `${this.props.positionY}px`, padding: `${0}px`, marginLeft: `${this.props.positionX}px`, position: 'inherit' }}>
                <div style={{ height: `${this.state.height}px`, width: `${this.state.width}px`, backgroundColor: `red` }}>
                </div>
                {this.state.modalState ? <Popup modalState={this.state.modalState} onClose={this.handleClose} onSave={this.handleChangeAttributes}></Popup> : <div></div>}
            </div>))
    }
}


export default DragSource(ItemTypes.NORMALBOX, boxSource, (connect, monitor, Component) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))(NormalBox);




