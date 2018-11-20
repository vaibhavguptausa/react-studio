import React, { Component } from 'react';
import { userChildren } from './constant';

export class NormalBox extends Component {
    constructor(props) {
        super(props);
    }
    // handleChange=(e)=>{
    //     const name= e.target.id ;

    //     this.setState({[name]: e.target.value});
    // }
    render() {
        const divStyles = {
            marginTop: `${userChildren[id].x}px`,
            padding: `${0}px`, marginLeft: `${userChildren[id].y}px`,
            position: 'inherit',
            backgroundColor: `${userChildren[id].color}`,
            height: `${userChildren[id].height}`,
            width: `${userChildren[id].width}`
        }
        var id = this.props.id;
        return (
            <div style={divStyles}>
                <input className="form-control"
                    id="input"
                    type={this.state.type}
                    placeholder=""
                // onChange = {this.handleChange}
                />
            </div>
        )
    }
}





