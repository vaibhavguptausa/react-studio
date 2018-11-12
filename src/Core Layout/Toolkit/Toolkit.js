import React from 'react';
import './toolkit.css';
import Box from './Box';
import DraggableInputField from './draggableInputField';
export default class Toolkit extends React.Component {
    render() {
        return (
            <ul className="toolkit-sidebar">
                
                   <Box Type='BOX'/>
                   <DraggableInputField Type='DRAGGABLEINPUT'  />    
                
            </ul>
        );
    }
}