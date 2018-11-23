import { children } from './../Toolkit/constants'

// const createStyleString = () => {
//     var str = "";

//     children.map((child, id) => {
//         if (child.ifRender) {
//             str = str + `
//         const divstyle${id}=
//         {
//          marginTop: "${child.y}px",
//          padding: "${0}px",
//          marginLeft: "${child.x}px",
//          position: "inherit",
//          height: "${child.height}px",
//          width: "${child.width}px",
//          backgroundColor: "${child.color}"
//      };
//      `
//         }
//     })
//     console.log(`stylestring`, str);
//     return str;
// }
export const createStyleClassesString = () => {
    var str = `
        .Divstyle 
        {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: none;
            margin-left: ${0}px;
            margin-top: ${0}px;
        }

      `
    children.map((child, id) => {
        if (child.ifRender) {
            if (child.type === "INPUT") {
                str = str + `
        .Divstyle${id}
        {
            margin-top: ${child.y}px;
            padding: ${0}px;
            margin-left: ${child.x}px;
            position: inherit;
            height: ${child.height}px;
            width: ${child.width}px;
            
            background: none;
        }
     `}
            else {
                str = str + `
        .Divstyle${id}
        {
            margin-top: ${child.y}px;
            padding: ${0}px;
            margin-left: ${child.x}px;
            position: inherit;
            height: ${child.height}px;
            width: ${child.width}px;
            
            background-color: ${child.color};
        }`
            }
        }
    })
    return str;
}

const createComponentString = () => {
    var str = "";

    children.map((child, id) => {
        if (child.ifRender) {
            if (child.type === "NORMALBOX") {
                str = str + `
            <div className="Divstyle${id}">
            <h1>${child.text}</h1>
            </div>`
            }
            else if (child.type === "INPUT" && child.inputType !== 'button') {
                str = str + `
            <div className="Divstyle${id}">
                <input className="form-control"
                    id="input"
                    type="${child.inputType}"
                    placeholder=""
                />
            </div>`
            }
            else {
                str = str + `
                <div className="Divstyle${id}">
                    <input className="btn btn-default"
                        id="input"
                        type="${child.inputType}"
                        placeholder=""
                    />
                </div>`
            }
        }
    }
    )

    console.log(`componentstring`, str);
    return str;
}

export const htmlString = () => {
    var str =
        `
    import React, { Component, PropTypes } from 'react';
    import './component.css' ;
    export class App extends Component {
        constructor(props) {
        super(props);
        }
        render() {
            return(
                <div className="Divstyle">`
        +
        createComponentString()
        +
        `
                </div>
            )
        }
    } ;`
    return str;
}