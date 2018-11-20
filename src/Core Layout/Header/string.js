
import {children} from './../Toolkit/constants'

const createStyleString=()=>{
    var str="";
    for(var id=0;id<children.length;id++)
    {
        str=str+`
       const divstyle${id}=
       {
        marginTop: "${children[id].x}px",
        padding: "${0}px",
        marginLeft: "${children[id].y}px",
        position: "inherit",
        height: "${children[id].height}px",
        width: "${children[id].width}px",
        backgroundColor: "${children[id].color}"
    };
    `
    }
    console.log(`stylestring`,str);
    return str;
}
const createComponentString=()=>{
    var str="";
    for(var id=0;id<children.length;id++)
    {
        if(children[id].type==="NORMALBOX")
        {
            str=str+`
            <div style={divstyle${id}}>
            <div><h1>${children[id].text}</h1>
            </div>
            </div>
        `
        }
        else if(children[id].type==="INPUT")
        {
            str=str+`
            <div style={divstyle${id}}>
                <input className="form-control"
                    id="input"
                    type="text"
                    placeholder=""
                />
            </div>
            `
        }
        else if(children[id].type==="NORMALRADIO")
        {
            str=str+`
            <div style={divstyle${id}}>
                <input className="form-control"
                    id="input"
                    type="radio"
                    placeholder=""
                />
            </div>
            `
        }
        else if(children[id].type==="NORMALCHECKBOX")
        {
            str=str+`
            <div style={divstyle${id}}>
                <input className="form-control"
                    id="input"
                    type="checkbox"
                    placeholder=""
                />
            </div>
            `
        }
        else if(children[id].type==="NORMALBUTTON")
        {
            str=str+`
            <div style={divstyle${id}}>
                <button/>
            </div>
            `
        }
        else if(children[id].type==="NORMALDATEPICKER")
        {
            str=str+`
            <div style={divstyle${id}}>
                <input className="form-control"
                    id="input"
                    type="date"
                    placeholder=""
                />
            </div>
            `
        }
    }
    console.log(`componentstring`, str);
    return str;

}
export const htmlString =()=>{ 
    var str=
`import React, { Component, PropTypes } from 'react';
const divstyle={
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'pink',
    marginLeft: "${0}px",
    marginTop: "${0}px"
  
  }
  ;
  `
  +
  createStyleString()
  +
  `
export class Body extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return(
            <div style={divstyle}>`
        
        +
            createComponentString()
            +
            `
            </div>
        )
    }
} ;
`
return str;
}