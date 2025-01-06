import React, { Component } from 'react';

class Event extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Hello Guest!'
        }
        this.changeName = this.changeName.bind(this)
    }
    changeName() {
        this.setState({
            message: 'Hello Ranjana!'
        })
        console.log("clicked")
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

export default Event;