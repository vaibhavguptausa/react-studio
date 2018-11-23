import React from 'react';
import './header.css';
import { htmlString, createStyleClassesString } from './string';

const saveText = (text, filename) => {
    var a = document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-u,' + encodeURIComponent(text));
    a.setAttribute('download', filename);
    document.body.appendChild(a);
    a.setAttribute("style", "display: none;");
    a.click()
    a.remove();
}

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    writetoJson = () => {
        var strComponent = htmlString();
        var strStyle = createStyleClassesString();
        // console.log(`htmlpart`, str);
        saveText(strComponent, "component.js");
        saveText(strStyle, 'component.css')
    };

    render() {
        return (
            <div className="main-header">
                REACT STUDIO
                <button className="export-btn" onClick={this.writetoJson}>Export</button>
            </div>
        );
    }
}