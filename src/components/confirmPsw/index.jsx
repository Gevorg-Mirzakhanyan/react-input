import React from "react";
import './style.css';

class ConfirmPsw extends React.Component {
   
    render() {
        return <div className="inputPsw">
            <input 
                type="password" 
            />
            <input 
                type="password" 
            />
            <button className="btn">Submit</button>
        </div>
    }
}

export default ConfirmPsw