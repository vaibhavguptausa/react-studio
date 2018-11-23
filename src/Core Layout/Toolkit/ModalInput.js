import React from 'react';
import { Button, Modal, FormControl, ControlLabel } from 'react-bootstrap';
import { SketchPicker } from 'react-color';
import { deleteChild } from './constants';

export class Popup extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  onSave = () => {
    this.props.onClose();
  }

  handleChange = (e) => {
    // this.setState({ [e.target.id]: e.target.value });
    this.props.onSave(e.target.id, e.target.value);
  }

  handleChangeComplete = (color) => {
    //this.setState({ color: color.hex });
    this.props.onSave(color, color.hex);
  };


  render() {

    if (this.props.modalState === true)
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
                value={this.props.type}
                placeholder=""
                onChange={this.handleChange}
                className="form-control"
                disabled="true"
              >
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="radio">Radio</option>
                <option value="checkbox">Checkbox</option>
                <option value="date">Date</option>
              </select>

              <ControlLabel>Text</ControlLabel>
              <FormControl
                id="text"
                type="text"
                value={this.props.attributes.text}
                placeholder="Enter text"
                onChange={this.handleChange}
              />

              <ControlLabel>Height</ControlLabel>
              <FormControl
                id="height"
                type="number"
                value={this.props.attributes.height}
                placeholder="Enter width"
                onChange={this.handleChange}
              />
              <ControlLabel>Width</ControlLabel>

              <FormControl
                id="width"
                type="number"
                value={this.props.attributes.width}
                placeholder="Enter width"
                onChange={this.handleChange}
              />

            

              <ControlLabel>Color</ControlLabel>
              <SketchPicker
                color={this.props.attributes.color}
                onChangeComplete={this.handleChangeComplete}
              />
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.props.onDelete}>delete item</Button>
              Right click to close
            </Modal.Footer>
          </Modal>
        </div>
      );
    else
      return (null)
  }
}