import React, {Component} from 'react';
import Data from '../data/data'

import Card from '../Card/Card';

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
            }
        };

        this.addNewCard = this.addNewCard.bind(this);
    }

    addNewCard(id) {

        const {data, newCard} = this.state;
        const newLane = data.map(lane => lane.id === id ? lane.cards.push(newCard) : null);
        const newObject = newCard;
        this.setState({
            newCard: newObject
        });

        console.log(data);

    }

    render() {
        const data = this.state.data;

        return (
            <div className="Lane">
                {data.map((lane, key) => {
                    return (
                        <div className="lane" key={key}>
                            <div className="lane-header">
                                <h2>{lane.title}</h2>
                                <button onClick={() => this.addNewCard(lane.id)}>Add</button>
                            </div>

                            {lane.cards.map((card, key) => {
                                return (
                                    <div className="lane-body">
                                        <Card
                                            key={key}
                                            title={card.title}
                                            description={card.description}
                                        />

                                    </div>
                                )
                            })}
                        </div>
                    )

                })}
            </div>
        );
    }

}

export default Lane;