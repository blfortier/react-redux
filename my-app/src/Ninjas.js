import React, { Component } from 'react';

class Ninjas extends Component {
    render() {
        // console.log(this.props);
        // destructure -- grab the property names
        // and save them to variables
        const { name, age, belt } = this.props;
        
        return (
            <div className = "ninja">
                <div>Name: { name }</div>
                <div>Age: { age }</div>
                <div>Belt: { belt }</div>
            </div>
        )
    }
}

export default Ninjas;





