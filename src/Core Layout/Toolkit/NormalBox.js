import React, { Component } from 'react';
import { ItemTypes } from './constants';
import { DragSource } from 'react-dnd';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

 export default class NormalBox extends Component {
     
      render() {
         
          return <div> {<div style={{height: `${50}px` , width: `${50}px`, backgroundColor: `red`, position: 'relative', marginTop:`${10}px`  , zIndex:`${20}`, marginLeft:`${300}px` } }></div>} </div> 
        }
    }
   
   