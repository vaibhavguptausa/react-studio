import React, { Component, PropTypes } from 'react';
import NormalBox from './NormalBox';
//import InputField from './Inputfield';
import {userChildren} from './constant';

export class Body extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'pink',
          marginLeft: `${0}px`,
          marginTop: `${0}px`

        }}>
          {userChildren.map((child, index)=>{
          if(child.Type==='NORMALBOX')
         return  <NormalBox Type='NORMALBOX' id={index} />
          // else if(child.Type==='INPUT'){
          //   return <InputField Type='INPUT' id={index} positionX={child.x} positionY={child.y} />
          }
          )}
        </div>
    );
  }
}
