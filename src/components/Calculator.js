import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';


class Calculator extends Component {
    constructor()
    {
        super();
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahreinheitChange = this.handleFahreinheitChange.bind(this);
        this.state = {value: '', scale: 'c'}
    }

    handleCelsiusChange(value)
    {
        this.setState({scale: 'c', value});
    }

    handleFahreinheitChange(value)
    {
        this.setState({scale: 'f', value});
    }
    
    render() {
        let scale = this.state.scale;
        let value = this.state.value;
        let celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
        let fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit) : value;

        return (
            <div>
                <TemperatureInput scale="c" value={celsius} whenChange={this.handleCelsiusChange}/>
                <TemperatureInput scale="f" value={fahrenheit} whenChange={this.handleFahreinheitChange}/>
                <BoilingVeridict celsius={parseFloat(value)}/>
            </div>
        );
    }
}

/**
 * Verify if the value is boiling up to 100 
 * 
 * @param {any} props
 * @returns
 */
function BoilingVeridict(props) {
    if (props.celsius >= 100)
        return <p>The water would boil.</p>
    return <p>The water wouldn't boil.</p>
}

/**
 * converts fahrenheit to celsius
 * 
 * @param {any} fahrenheit
 * @returns
 */
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}


/**
 * converts celsius to fahrenheit 
 * 
 * @param {any} celsius
 * @returns
 */
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}


/**
 * takes a string value and a converter function as arguments and returns a string
 * 
 * @param {any} value
 */
function tryConvert(value, convert)
{
    const input = parseFloat(value);
    if (Number.isNaN(input))
        return '';
    
    let output = convert(input);
    let rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
export default Calculator;