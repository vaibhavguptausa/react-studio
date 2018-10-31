import React from 'react';
import './toolkit.css';

export default class Toolkit extends React.Component {
    render() {
        return (
            <ul className="toolkit-sidebar">
                <li>
                    Create
                </li>
                <li>
                    Dropdown
                </li>
                <li>
                    Checkbox
                </li>
            </ul>
        );
    }
}