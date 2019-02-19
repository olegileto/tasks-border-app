import React, {Component} from 'react';
import './Modal.css';

class Modal extends Component{
    render() {
        return (
            <div className="Modal">
                <div className="modal-body">
                    <form>
                        <input placeholder="Enter title" onChange={(e) => this.props.change(e.target.value, 'title')}/>
                        <input placeholder="Enter description" onChange={(e) => this.props.change(e.target.value, 'description')}/>
                        <select>
                            <option>Choose priority</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        <button onClick={this.props.done}>Done</button>
                        <button onClick={this.props.close}>Close</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Modal;