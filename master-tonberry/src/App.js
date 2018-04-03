import React, { Component } from 'react';
import Sidebar from "./components/Sidebar.js";
import Header from "./components/Header.js";
import Fill from "./components/Fill.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <Sidebar />
        <Fill />
        </div>
    );
  }
}

export default App;
