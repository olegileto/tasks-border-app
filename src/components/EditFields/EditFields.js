import React, {Component} from 'react'

class EditFields extends Component{

    render() {
        return(
            <div>
                <h3>Editor</h3>
                <form className="EditFields">
                    <input type="text" placeholder="Change title" onChange={(e) => this.props.change(e.target.value, "title")}/>
                    <textarea placeholder="Change description" onChange={(e) => this.props.change(e.target.value, "description")}>
                    </textarea>
                    <select onChange={(e) => this.props.change(e.target.value, "priority")}>
                        <option>Change priority</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>

                    <button className="done-edit-card" onClick={this.props.done}>Done</button>
                    <button className="close-edit-card" onClick={this.props.close}>Close</button>
                </form>
            </div>
        )
    }
}

export default EditFields;