import React, { Component } from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahreinheit'
}

class TemperatureInput  extends Component {
    constructor()
    {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e)
    {
        this.props.whenChange(e.target.value);
    }

    render() {
        const value = this.props.value;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}: </legend>
                <input value={value} onChange={this.handleChange}/>
            </fieldset>
        );
    }
}

export default TemperatureInput;