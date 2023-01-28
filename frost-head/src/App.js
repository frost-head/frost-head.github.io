import React, { Component } from 'react';
import './App.css';
import Navbar from './utils/Navbar';
import Home from './Pages/Home'

class App extends Component {
  render() {
    return (
      <div className="App text-white bg-black min-h-screen overflow-x-hidden">
        <Navbar/>
        <Home />


      </div>
    );
  }
}

export default App;
