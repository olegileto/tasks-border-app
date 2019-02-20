import React, {Component} from 'react';
import Data from '../../data/data'
import './Lane.css';

import Card from '../Card/Card';
import Modal from '../Modal/Modal';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus);

class Lane extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: Data.lanes,
            newCard: {
                id: null,
                title: null,
                description: null,
                priority: null
            },
            isModal: false,
            laneId: null
        };

        this.addNewCard = this.addNewCard.bind(this);
        this.removeCard = this.removeCard.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    addNewCard(id) {

        const {data, newCard} = this.state;
        const fields = {
            id: null,
            title: null,
            description: null,
            priority: null
        };

        const newLane = data.map(lane => lane.id === id ? lane.cards.push(newCard) : null);
        const newObject = newCard;

        this.setState({
            newCard: {
                newObject: newObject,
                fields: fields
            },
        });

        this.closeModal();

    }

    removeCard(id) {

        const {data} = this.state;
        const newLane = data;

        const newData = data.map(data => data.cards.filter(card => card.id !== id));
        this.newLane = newLane.map((lane, index) => lane.cards = newData[index]);

        this.setState({
            data: newLane
        })

    }

    openModal(id) {
        this.setState({
            isModal: true,
            laneId: id
        });
    }

    closeModal() {
        this.setState({
            isModal: false,
            laneId: null
        })
    }

    handleChange(data, field) {

        const newObject = this.state.newCard;

        newObject['id'] = new Date().getTime();
        newObject[field] = data;

    }

    render() {
        const data = this.state.data;

        return (
            <div className="Lane">
                {data.map((lane, key) => {
                    return (
                        <div className="lane" key={key}>
                            <div className="lane-header">
                                <h2 title={lane.title}>{lane.title}</h2>
                                <button className="add-card-btn" onClick={() => this.openModal(lane.id)}><FontAwesomeIcon icon="plus" /></button>
                                <span className="quantity">{lane.cards.length}</span>
                            </div>

                            {lane.cards ? lane.cards.map((card, key) => {
                                return (
                                    <div className="lane-body">
                                        <Card
                                            key={key}
                                            card={card}
                                            removeCard={() => this.removeCard(card.id)}
                                        />
                                    </div>
                                )
                            }) : null}
                        </div>)

                })}

                {this.state.isModal ?
                    <Modal
                        close={() => this.closeModal()}
                        change={this.handleChange}
                        done={() => this.addNewCard(this.state.laneId)}
                    />
                    : null}
            </div>
        );
    }

}

export default Lane;