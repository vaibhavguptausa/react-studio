
import {children} from './../Toolkit/constants'

const createStyleString=()=>{
    var str="";
  
    children.map((child, id)=>{
        str=str+`
        const divstyle${id}=
        {
         marginTop: "${child.y}px",
         padding: "${0}px",
         marginLeft: "${child.x}px",
         position: "inherit",
         height: "${child.height}px",
         width: "${child.width}px",
         backgroundColor: "${child.color}"
     };
     `
    })
    console.log(`stylestring`,str);
    return str;
}
const createComponentString=()=>{
    var str="";
   
    children.map((child, id)=>{
        if(child.type==="NORMALBOX")
        {
            str=str+`
            <div style={divstyle${id}}>
            <div><h1>${child.text}</h1>
            </div>
            </div>
        `
        }
        else if(child.type==="INPUT")
        {
            str=str+`
            <div style={divstyle${id}}>
                <input className="form-control"
                    id="input"
                    type="${child.inputType}"
                    placeholder=""

                />
            </div>
            `
        }

    })
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
    backgroundColor: 'none',
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