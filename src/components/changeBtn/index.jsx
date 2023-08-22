import React from "react";
import './style.css'

class ChangeBtn extends React.Component {

    state = {
        isInputDisables: false,
    };

    clickDisabled = () => {
        this.setState(event => ({
            isInputDisables: !event.isInputDisables,
        }))
    }

    clickEnabled = () => {
        this.setState(event => ({
            isInputDisables: '',
        }))
    }
       
    
    render() {
        const {isInputDisables} = this.state

        return <div>
            <input 
                type="text"
                id="myInput"
                disabled={isInputDisables}
            />
            <div>
                <button onClick={this.clickDisabled}  className="btn">Disable</button>
                <button onClick={this.clickEnabled}  className="btn">Enable</button>
            </div>
        </div>
    }
}

export default ChangeBtn