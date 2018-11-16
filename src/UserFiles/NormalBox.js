import React, { Component } from 'react';
import {userChildren} from './constant';
export class NormalBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
     var id=this.props.id;
        return (
            <div  style={{ marginTop: `${userChildren[id].x}px`, padding: `${0}px`, marginLeft: `${userChildren[id].y}px`, position: 'inherit' }}>
                <div style={{ height: `${userChildren[id].height}px`, width: `${userChildren[id].width}px`, backgroundColor: `${userChildren[id].color}` }}><h1>{userChildren[id].text}</h1>
                </div>
            </div>)
    }
}





