import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor:'black'}}>
       <Home/>
      </div>
    );
  }
}

export default App;
