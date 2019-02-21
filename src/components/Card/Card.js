import React, {Component} from 'react';
import './Card.css';

import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons'

library.add(faTrashAlt, faEdit);

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priority: {
                '1': 'pr-low',
                '2': 'pr-medium',
                '3': 'pr-high',
                '4': 'pr-highest'
            },
            isEditFields: false,
            idCard: null,
            title: "",
            description: "",
            pr: ""
        };

        this.showEditFields = this.showEditFields.bind(this);
        this.closeEditFields = this.closeEditFields.bind(this);

    }

    showEditFields(id) {
        this.setState({
            isEditFields: true,
            idCard: id
        })
    }

    closeEditFields() {
        this.setState({
            isEditFields: false,
            idCard: null
        })
    }

    componentDidMount() {
        this.setState({
            title: this.props.card.title,
            description: this.props.card.description,
            pr: this.props.card.priority
        });
    }

    change(e, option) {
        this.setState({
            [option]: e
        })
    }

    streak(id) {
        this.props.done(id, this.state.title, this.state.description, this.state.pr);
        this.closeEditFields();
    }

    render() {
        const cardPriority = this.props.card.priority;
        const editFields = (<div>
            <h3>Editor</h3>
            <div className="EditFields">
                <input type="text" placeholder="Change title" onChange={(e) => this.change(e.target.value, "title")}
                       value={this.state.title}/>
                <textarea placeholder="Change description"
                          onChange={(e) => this.change(e.target.value, "description")}
                          value={this.state.description}>
                    </textarea>
                <select onChange={(e) => this.change(e.target.value, "pr")} value={this.state.pr}>
                    <option>Change priority</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

                <button className="done-edit-card" onClick={(e) => this.streak(this.props.card.id)}>Done</button>
                <button className="close-edit-card" onClick={this.closeEditFields}>Close</button>
            </div>
        </div>);

        return (
            <div className={`Card ${this.state.priority[cardPriority]}`}>
                {this.state.isEditFields
                    ? editFields
                    : (
                        <React.Fragment>
                            <h3 className="card-title">{this.props.card.title}</h3>
                            <p className="card-description">{this.props.card.description}</p>
                            <button className="edit-card" onClick={() => this.showEditFields(this.props.card.id)}>
                                <FontAwesomeIcon icon="edit"/>
                            </button>
                            <button className="remove-card-btn" onClick={this.props.removeCard}>
                                <FontAwesomeIcon icon="trash-alt"/>
                            </button>
                        </React.Fragment>
                    )
                }
            </div>
        )
    }
}

export default Card;