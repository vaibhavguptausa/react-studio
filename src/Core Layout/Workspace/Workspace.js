import React from 'react';
import './workspace.css';

export default class Workspace extends React.Component {
    constructor(props) {
        super(props);
    }

    dragstart_handler(ev) {
        ev.dropEffect = "move";
        ev.dataTransfer.setData("text/plain", ev.target.id);
    }

    dragover_handler(ev) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move"
    }

    drop_handler(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text/plain");
        ev.target.appendChild(document.getElementById('textBox1'));
    }

    

    render() {
        return (
            <div>
                <form className="input-field">
                    <label draggable="true" ondragstart="dragstart_handler(event);">
                        Name: <input type="text" name="name" placeholder="Input" />
                    </label>

                </form>
                <div draggable="true" className="text-box" id="textBox1" ondragstart="dragstart_handler(event);">Box content 1</div>
                <div draggable="true" className="text-box" id="textBox2" ondragstart="dragstart_handler(event);">Box content 2</div>
                <div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">Drop Zone</div>
            </div>
        );
    }
}