import React from 'react';
import './header.css';
import { Parseit } from './HTMLParser';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    downloadContent = (name, content) => {
        var atag = document.createElement("a");
        var file = new Blob([content], { type: 'text/plain' });
        atag.href = URL.createObjectURL(file);
        atag.download = name;
        atag.click();
    }

    handleClick = () => {
        var components = Parseit();
        var arr = Object.keys(components);
        console.log(`array`, arr);
        for (var i = 0; i < arr.length; i++) {
            this.downloadContent(`${arr[i]}.js`, components[`${arr[i]}`]);
        }
    }
    render() {

        return (
            <div className="main-header">
                REACT STUDIO
                <button onClick={this.handleClick}>EXPORT</button>
            </div>
        );
    }
}