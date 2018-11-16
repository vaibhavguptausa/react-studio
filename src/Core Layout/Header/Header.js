import React from 'react';
import './header.css';
<<<<<<< HEAD
import {children} from './../Toolkit/constants'
//import {writeJsonFile} from 'write-json-file';
 const saveText=(text, filename)=>{
    var a = document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-u,'+encodeURIComponent(text));
    a.setAttribute('download', filename);
    document.body.appendChild(a); 
    a.setAttribute("style", "display: none;");
    a.click()
    a.remove();
  }

export default class Header extends React.Component {
    constructor(props)
    {
        super(props);
    }
   writetoJson=()=>{
       console.log(`children`, children);
    const data= JSON.stringify(children); 
    console.log(`data`,data);
saveText( data, "data.json" );
};
   
=======
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
>>>>>>> d6761a86fba41178afe0f4456fc754df66e44ecb
    render() {

        return (
            <div className="main-header">
                REACT STUDIO
<<<<<<< HEAD
                <button onClick={this.writetoJson}>Export</button>
=======
                <button onClick={this.handleClick}>EXPORT</button>
>>>>>>> d6761a86fba41178afe0f4456fc754df66e44ecb
            </div>
        );
    }
}