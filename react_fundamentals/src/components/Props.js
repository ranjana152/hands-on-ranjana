import React, { Component } from 'react';
class Props_example extends Component {
    render() {
        const { name } = this.props
        return (
            <div>
                <h1>Welcome {name}</h1>
            </div>
        );
    }
}

export default Props_example;