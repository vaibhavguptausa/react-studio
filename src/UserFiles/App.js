import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import Body from './Body';


 export class App extends React.Component {
   constructor(props){
     super(props);
     
   } 
  render() {
    
    return (
      <div className="App">
        <Header />
        <Body />
        
      </div>
    );
  }
}
