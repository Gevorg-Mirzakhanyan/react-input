import React from "react";

class TextInputDisplay extends React.Component {

    state = {
        inputValue: '',
    }

    handleChange = (event) => {
        this.setState({inputValue:event.target.value});
    }

    getTextStyle = () => {
        const {inputValue} = this.state;
        if(inputValue.length > 15 && inputValue.length < 30) {
            return {color: 'red'}
        } else if(inputValue.length > 30) {
            return {color: 'green'}
        } else {
            return {color: 'grey'}
        }
    }
    render() {
        
        return <div>
            <div>
                <p>Text above the input:</p>
                <p style={this.getTextStyle()}>{this.state.inputValue}</p>
                
            </div>
            <input 
                type="text"
                value={this.state.inputValue}
                onChange={this.handleChange}
                placeholder="Enter text..."
            />
        </div>
    }
}

export default TextInputDisplay