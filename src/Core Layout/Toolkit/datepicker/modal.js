import React from 'react';
import { Popover, Tooltip, Button, Modal, OverlayTrigger, FormControl, ControlLabel } from 'react-bootstrap';
import {SketchPicker} from 'react-color';
export class Popup extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.state =  {  height: this.props.height, width: this.props.width, color: this.props.color, type: this.props.type
       };
  
    }
  onSave=()=>{
    
    this.props.onClose();
  }
  
    handleChange=(e)=> {
        this.setState({ [e.target.id] : e.target.value });
        console.log(`input`,e.target.value)
        console.log(this.state,'state in modal')
        this.props.onSave(this.state);
      }
      handleChangeComplete = (color) => {
        this.setState({ color: color.hex });
        this.props.onSave(this.state);
      };
    
    render() {
     
      if(this.props.modalState===true)
      return (
        <div> 
          <Modal show={this.props.modalState} onHide={this.props.onClose}>
            <Modal.Header >
              <Modal.Title>Attributes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <ControlLabel>type</ControlLabel> 
            
            <select
            id="type"
            value= {this.state.type}
            placeholder=""
            onChange={this.handleChange}
            className="form-control"
            disabled= "true"
          >
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="radio">Radio</option>
          <option value="checkbox">Checkbox</option>
          <option value="date">Date</option>
          </select>  
           
            <ControlLabel>Height</ControlLabel>
            <FormControl
            id="height"
            type="number"
            value={this.state.height}
            placeholder="Enter width"
            onChange={this.handleChange}
          />
            <ControlLabel>Width</ControlLabel> 
            
            <FormControl
            id="width"
            type="number"
            value={this.state.width}
            placeholder="Enter width"
            onChange={this.handleChange}
          />
        <ControlLabel>Color</ControlLabel> 
          <SketchPicker
        color={ this.state.color }
        onChangeComplete={ this.handleChangeComplete }
      />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.onSave}>Save</Button>
              Left click to close
            </Modal.Footer>
          </Modal>
        </div>
      );
      else
      return (<div></div>)
    }
}
