import React from 'react';
import './toolkit.css';
import Box from './Box';
import DraggableInputField from './draggableInputField';

const draggables = {
    "text": "DRAGGABLEINPUT",
    "date": "DRAGGABLEINPUT",
    "radio": "DRAGGABLEINPUT",
    "checkbox": "DRAGGABLEINPUT",
    "button": "DRAGGABLEINPUT"
}

export default class Toolkit extends React.Component {

    render() {
        return (
            <ul className="toolkit-sidebar">

                <Box type='BOX' inputType="div"/>
                {Object.keys(draggables).map((dg, ind) => (
                    console.log(`key`, dg),
                    console.log(`value`, draggables[dg]),
                    <DraggableInputField key={ind} type={draggables[dg]} inputType={dg} />
                ))}
            </ul>
        );
    }
}