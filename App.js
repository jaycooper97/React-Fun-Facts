import React, { Component } from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import Background from './img/Background.jpg'
import Logo from './img/Logo.jpeg'
import Navbar from './Navbar'
import Fact from './Fact'
import FactTwo from './FactTwo'
import FactThree from './FactThree'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar />
        <br />
        <img src={Logo} alt="Logo" />
        <br />
        <br />
        <br />

     <Route exact path='/' component={Fact}/>
      <Route path='/FactTwo' component={FactTwo}/>
      <Route path='/FactThree' component={FactThree} />
      </div>
      </BrowserRouter>
    )
  }
}

export default App