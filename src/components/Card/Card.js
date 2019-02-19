import React, {Component} from 'react';
import './Card.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faTrashAlt);

class Card extends Component{
    constructor(props) {
        super(props);
        this.state = {
            priority: {
                '1': 'pr-low',
                '2': 'pr-medium',
                '3': 'pr-high',
                '4': 'pr-highest'
            }
        }
    }

    render() {
        const cardPriority = this.props.card.priority;

        return(
            <div className={`Card ${this.state.priority[cardPriority]}`}>
                <h3 className="card-title">{this.props.card.title}</h3>
                <p className="card-description">{this.props.card.description}</p>
                <button className="remove-card-btn" onClick={this.props.removeCard}><FontAwesomeIcon icon="trash-alt" /></button>
            </div>
        )
    }
}

export default Card;