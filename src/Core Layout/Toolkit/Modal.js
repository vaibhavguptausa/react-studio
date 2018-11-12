import React from 'react';
import { Popover, Tooltip, Button, Modal, OverlayTrigger, FormControl, ControlLabel } from 'react-bootstrap';

export class Popup extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        height: '', width: ''
      };
  
    }
    // static getDerivedStateFromProps(props, state) {
    //     if (props.modalState !== state.show) {
    //         return {
    //             show: props.modalState
    //         };
    //     }
    //     return null;
    // }
    
    
  onSave=()=>{
    this.props.onSave(this.state.height, this.state.width);
  }
  
    handleChange=(e)=> {
      
        this.setState({ [e.target.id ]: e.target.value });
      }
    render() {
      const popover = (
        <Popover id="modal-popover" title="popover">
          very popover. such engagement
        </Popover>
      );
      const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
      if(this.props.modalState===true)
      return (
        <div>
          <Modal show={this.props.modalState} onHide={this.props.onClose}>
            <Modal.Header >
              <Modal.Title>Attributes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <ControlLabel>Height</ControlLabel>
            <FormControl
            id="height"
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
            <ControlLabel>Width</ControlLabel> 
            
            <FormControl
            id="width"
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
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
