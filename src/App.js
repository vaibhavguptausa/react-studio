import React from 'react';
import './App.css';
import Toolkit from './Core Layout/Toolkit/Toolkit.js';
import Header from './Core Layout/Header/Header.js';
import Workspace from './Core Layout/Workspace/Workspace.js';
import { DragDropContext } from 'react-dnd';
import Droppable from './Core Layout/Toolkit/droppable';
import HTML5Backend from 'react-dnd-html5-backend';
import Box from './Core Layout/Toolkit/Box';
import {boxProp} from './index';
import NormalBox from './Core Layout/Toolkit/NormalBox';
import DraggableInputField from './Core Layout/Toolkit/draggableInputField';
 export class App extends React.Component {
   constructor(props){
     super(props);
     
   }
  
   
  render() {
    
    return (
      <div className="App">
        <Header />
        <Toolkit />
        <Droppable ></Droppable>
        
      </div>
    );
  }
}
export default DragDropContext(HTML5Backend)(App);