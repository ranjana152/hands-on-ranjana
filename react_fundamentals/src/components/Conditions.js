import React, { Component } from 'react';
import Props_example from './Props';
class Conditions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: <Props_example />,
            isLoggedIn: false
        }

    }
    render() {
        let statement
        if (this.state.test) {
            return <div>Yes! its true!</div>
        }
        else {
            return <div>No its false!</div>
        }
        //if...else conditions
        if (this.state.isLoggedIn) {
            statement = <div>Yes! its true!</div>
        }
        else {
            statement = <div>No its false!</div>
        }
        return <div>{statement}</div>
        // element variables
        return (
            this.state.isLoggedIn ?
                <div>The above logged in status is true!</div> :
                <div>The above logged in status is false!</div>
        )
        // ternary operator
        return (
            this.state.isLoggedIn &&
            <div>The above logged in status is true!</div>
        )
        // short-circuit
    }
}

export default Conditions;