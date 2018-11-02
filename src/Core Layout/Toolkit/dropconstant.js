import ReactDOM from 'react-dom';
import React, { Component, PropTypes } from 'react';
import {App} from '../../App';
let boxNum = 0;
const incrementBoxNum=()=>{
    boxNum++;
    console.log(`number of boxes`, boxNum);
}
export const  boxProp= {
    incrementBoxNum,
    boxNum
  };
 
 