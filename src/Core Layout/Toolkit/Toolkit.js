import React from 'react';
import './toolkit.css';
import Box from './Box';
import DraggableInputField from './draggableInputField';
import Radio from './radio/radio';
import DatePicker from './datepicker/datepicker';
import CheckBox from './checkbox/checkbox';
import Button from './button/button';
export default class Toolkit extends React.Component {
    render() {
        return (
            <ul className="toolkit-sidebar">
                
                   <Box type='BOX'/>
                   <DraggableInputField type='DRAGGABLEINPUT'  />    
                   <Radio type= 'RADIO' />
                   <DatePicker type='DATEPICKER'/>
                   <Button type ='BUTTON' />
                   <CheckBox type='CHECKBOX' />
            </ul>
        );
    }
}