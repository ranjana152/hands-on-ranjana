import React, { Component } from 'react';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            chargerType: 'select'
        }
    }
    usernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    mailChange = (event) => {
        this.setState({ email: event.target.value })
    }
    passwordChange = (event) => {
        this.setState({ password: event.target.value })
    }
    changeType = (event) => {
        this.setState({ chargerType: event.target.value })
    }
    onChangeSubmit = (event) => {
        alert(
            `This form was submitted by ${this.state.username}`
        )
        event.preventDefault()
        this.setState({
            username: '',
            email: '',
            password: '',
            type: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.onChangeSubmit}>
                <div>
                    <label>Enter the Username:</label>
                    <input type='text' value={this.state.username} onChange={this.usernameChange}></input>

                </div>
                <div>
                    <label>Enter the E-mail ID:</label>
                    <input type='email' value={this.state.email} onChange={this.mailChange}></input>
                </div>
                <div>
                    <label>Enter the password:</label>
                    <input type='password' value={this.state.password} onChange={this.passwordChange}></input>
                </div>
                <div>
                    <label>Choose charger type:</label>
                    <select name='chargerType' value={this.state.chargerType} onChange={this.changeType}>
                        <option value="select" disabled>Choose Type</option>
                        <option value='Type1'>Type1</option>
                        <option value='Type2'>Type2</option>
                        <option value='AC'>AC</option>
                    </select>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form >
        );
    }
}

export default Form;