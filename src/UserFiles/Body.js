import React, { Component, PropTypes } from 'react';
import NormalBox from './NormalBox';
import InputField from './Inputfield';
import {userChildren} from './constant';
const divStyle={
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: 'pink',
  marginLeft: `${0}px`,
  marginTop: `${0}px`

}
export class Body extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <div style={divStyle}>
          {userChildren.map((child, index)=>{
          if(child.type==='NORMALBOX')
         return  <NormalBox type='NORMALBOX' id={index} />
           else if(child.type==='INPUT'){
             return <InputField type='INPUT' id={index} positionX={child.x} positionY={child.y} />
          }
        })}
        </div>
    
  
    )
}
  }
