import React from 'react'
import User from "./components/User"
import Comp from './components/comp/Comp'
import Hello from './components/hello/Hello'
import Jsx from './components/jsx/Jsx'
import InlineStyle from './components/style/InlineStyle'
import InternalStyle from './components/style/InternalStyle'
import ExternalStyle from './components/style/ExternalStyle'
import Clock1 from './components/clock1/Clock1'

const App = () => {
  return (
    <div>
      <div className="App">
        <h4>Merhaba Dünya (App)</h4>
        <Hello/>
        <Comp/>
        <User/>
        <Jsx/>
        <InlineStyle/>
        <InternalStyle/>
        <ExternalStyle/>
        <Clock1/>

    
      </div>
    </div>
  )
}

export default App
