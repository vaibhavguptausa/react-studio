import React from 'react';
import './toolkit.css';
import Box from './Box';
import DraggableInputField from './draggableInputField';

const draggables = {
    "text": "DRAGGABLEINPUT",
    "date": "DATEPICKER",
    "radio": "RADIO",
    "checkbox": "CHECKBOX",
    "button": "BUTTON"
}

export default class Toolkit extends React.Component {

    render() {
        return (
            <ul className="toolkit-sidebar">
                <Box type='BOX' />
                {Object.keys(draggables).map((dg, ind) => (
                    <DraggableInputField key={ind} type={dg} inputType={draggables[dg]} />
                ))}
            </ul>
        );
    }
}