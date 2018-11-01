import React from 'react';
import './toolkit.css';
import InputField from './Inputfield';
import Box from './Box';
import droppable from './droppable';
import { DragDropContext } from 'react-dnd-html5-backend';
export default class Toolkit extends React.Component {
    render() {
        return (
            <ul className="toolkit-sidebar">
                
                   <Box/>
                    
                
            </ul>
        );
    }
}