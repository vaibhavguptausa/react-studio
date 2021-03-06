import React, { Component } from 'react';
import { ItemTypes } from './constants';
import { DragSource } from 'react-dnd';

const boxSource = {
    beginDrag(props) {
        const { type, inputType } = props;
        return { type, inputType };
    }
};

class Box extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { isDragging, connectDragSource } = this.props;
        return connectDragSource(<div style={{ height: `${70}px`, marginTop: `${30}px`, marginBottom: `${30}px`, marginLeft: `${25}px`, width: `${70}px`, backgroundColor: `lightBlue`, border: `2px black solid`, position: 'relative', paddingTop: `${10}px`, zIndex: `$20` }}></div>);
    }
}

export default DragSource(ItemTypes.BOX, boxSource, connect => ({
    connectDragSource: connect.dragSource(),
}))(Box);