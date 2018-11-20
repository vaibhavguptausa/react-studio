import React from 'react';
import './header.css';
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
   
    render() {

        return (
            <div className="main-header">
                REACT STUDIO
                <button onClick={this.writetoJson}>Export</button>
            </div>
        );
    }
}