import React, {Component} from 'react';
import './Card.css';

import EditFields from '../EditFields/EditFields';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

library.add(faTrashAlt, faEdit);

class Card extends Component{
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
            idCard: null
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

    render() {
        const cardPriority = this.props.card.priority;

        return(
            <div className={`Card ${this.state.priority[cardPriority]}`}>
                {this.state.isEditFields
                    ? <EditFields
                        close={this.closeEditFields}
                    />
                    : (
                        <React.Fragment>
                            <h3 className="card-title">{this.props.card.title}</h3>
                            <p className="card-description">{this.props.card.description}</p>
                            <button className="edit-card" onClick={() => this.showEditFields()}>
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