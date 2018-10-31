import React from 'react';
import './App.css';
import Toolkit from './Core Layout/Toolkit/Toolkit.js';
import Header from './Core Layout/Header/Header.js';
import Workspace from './Core Layout/Workspace/Workspace.js';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Toolkit />
        <Workspace />
      </div>
    );
  }
}