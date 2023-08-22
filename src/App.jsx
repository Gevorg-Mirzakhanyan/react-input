
import './App.css'
import React from 'react'
import TextInputDisplay from './components/textInputDisplay'
import ChangeBtn from './components/changeBtn'
import ConfirmPsw from './components/confirmPsw'

class App extends React.Component {

  render() {
    return <>
        <div className='input'>
            <TextInputDisplay />
        </div>
        <div>
          <ChangeBtn /> 
        </div>
        <div className='input'>
          <ConfirmPsw /> 
        </div>
    </>
  }
}


export default App