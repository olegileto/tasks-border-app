import React, {Component} from 'react'

class Card extends Component{
    render() {
        return(
            <div className="Card">
                <h3 className="card-title">{this.props.title}</h3>
                <p className="card-description">{this.props.description}</p>
                <button className="remove-card-btn" onClick={this.props.removeCard}>Remove</button>
            </div>
        )
    }
}

export default Card;