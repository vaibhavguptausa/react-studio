import React from 'react';
import { Button, Modal, FormControl, ControlLabel } from 'react-bootstrap';
import { SketchPicker } from 'react-color';

export class Popup extends React.Component {
  constructor(props, context) {
    super(props, context);
    // this.state = {
    //   height: this.props.height, width: this.props.width, color: this.props.color, text: this.props.text
    //};
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
    console.log(`attr`, this.props.attributes)
    if (this.props.modalState === true)
      return (
        <div>
          <Modal show={this.props.modalState} onHide={this.props.onClose}>
            <Modal.Header >
              <Modal.Title>Attributes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
              <ControlLabel>Background-Color</ControlLabel>
              <FormControl
                id="backgroundColor"
                type="color"
                value={this.props.attributes.backgroundColor}
                placeholder="Enter width"
                onChange={this.handleChange}
              />
              <ControlLabel>Border-Width</ControlLabel>

              <FormControl
                id="borderWidth"
                type="number"
                value={this.props.attributes.borderWidth}
                placeholder="Enter border-width"
                onChange={this.handleChange}
              />
              <ControlLabel>Font-color</ControlLabel>

              <FormControl
                id="color"
                type="color"
                value={this.props.attributes.color}
                placeholder="Enter font-color"
                onChange={this.handleChange}
              />
              <ControlLabel>Font-size</ControlLabel>

              <FormControl
                id="fontSize"
                type="number"
                value={this.props.attributes.fontSize}
                placeholder="Enter Font-size "
                onChange={this.handleChange}
              />
              <ControlLabel>Border-color</ControlLabel>

              <FormControl
                id="borderColor"
                type="color"
                value={this.props.attributes.borderColor}
                placeholder="Enter Border-color "
                onChange={this.handleChange}
              />
              <ControlLabel>Font-weight</ControlLabel>

              <FormControl
                id="fontWeight"
                type="text"
                value={this.props.attributes.fontWeight}
                placeholder="Enter fontWeight "
                onChange={this.handleChange}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onDelete}>Delete item</Button>
              Right click to close
            </Modal.Footer>
          </Modal>
        </div>
      );
    else
      return (null)
  }
}