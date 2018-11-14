import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let boxNum = 0;
const incrementBoxNum=()=>{
    boxNum++;
    console.log(`number of boxes`, boxNum);
}
export const  boxProp= {
    incrementBoxNum,
    boxNum
  };
  
ReactDOM.render(<App numberOfBoxes={2}/>, document.getElementById('root'));
