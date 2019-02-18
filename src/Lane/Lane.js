import React, {Component} from 'react';
import Data from '../data/data'

import Card from '../Card/Card';

class Lane extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: Data.lanes
        }
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
                            </div>

                            {lane.cards.map((card, key) => {
                                return (
                                    <div className="lane-body" key={key}>
                                        <Card
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