import React, { Component } from 'react';
import Sidebar from "./components/Sidebar.js";
import Header from "./components/Header.js";
import Fill from "./components/Fill.js";
import YouTube from "./WalkThrough/WalkThrough.js";
import './App.css';
// import YouTube from 'react-youtube';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
		    <YouTube />
        <Fill />
      </div>
    );
  }
}



export default App;
