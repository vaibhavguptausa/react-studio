import React, { Component, PropTypes } from 'react';
const divstyle={
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'none',
    marginLeft: "0px",
    marginTop: "0px"
  
  }
  ;
  
        const divstyle0=
        {
         marginTop: "122px",
         padding: "0px",
         marginLeft: "1011px",
         position: "inherit",
         height: "50px",
         width: "70px",
         backgroundColor: "red"
     };
     
        const divstyle1=
        {
         marginTop: "379px",
         padding: "0px",
         marginLeft: "1013px",
         position: "inherit",
         height: "70px",
         width: "50px",
         backgroundColor: "red"
     };
     
        const divstyle2=
        {
         marginTop: "272px",
         padding: "0px",
         marginLeft: "1442px",
         position: "inherit",
         height: "70px",
         width: "50px",
         backgroundColor: "red"
     };
     
        const divstyle3=
        {
         marginTop: "406px",
         padding: "0px",
         marginLeft: "644px",
         position: "inherit",
         height: "70px",
         width: "50px",
         backgroundColor: "red"
     };
     
export class Body extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return(
            <div style={divstyle}>
            <div style={divstyle0}>
            <div><h1></h1>
            </div>
            </div>
        
            <div style={divstyle1}>
                <input className="form-control"
                    id="input"
                    type="date"
                    placeholder=""

                />
            </div>
            
            <div style={divstyle2}>
                <input className="form-control"
                    id="input"
                    type="radio"
                    placeholder=""

                />
            </div>
            
            <div style={divstyle3}>
                <input className="form-control"
                    id="input"
                    type="button"
                    placeholder=""

                />
            </div>
            
            </div>
        )
    }
} ;
