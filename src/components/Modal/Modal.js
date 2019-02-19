import React, {Component} from 'react';
import './Modal.css';

class Modal extends Component{
    render() {
        return (
            <div className="Modal">
                <div className="modal-body">
                    <h2>Add a new Task</h2>
                    <form>
                        <label>Title</label>
                        <input name="title" placeholder="Enter title" onChange={(e) => this.props.change(e.target.value, 'title')}/><br/>

                        <label>Description</label>
                        <textarea name="description" placeholder="Enter description" onChange={(e) => this.props.change(e.target.value, 'description')}>
                        </textarea><br/>

                        <label>Priority</label>
                        <select onChange={(e) => this.props.change(e.target.value, 'priority')}>
                            <option hidden='hidden'>Choose priority</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                        </select><br/>

                        <button className="done" onClick={this.props.done}>Done</button>
                        <button className="close-modal" onClick={this.props.close}>Close</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Modal;