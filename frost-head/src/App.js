import React, { Component } from 'react';
import './App.css';
import Navbar from './utils/Navbar';


class App extends Component {
  render() {
    return (
      <div className="App text-white bg-black min-h-screen">
        <Navbar/>
        
      </div>
    );
  }
}

export default App;
