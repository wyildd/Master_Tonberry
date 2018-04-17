import React  from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/pages/Home";
import Learn from "./components/pages/Learn";
import Create from "./components/pages/Create";
import Server from "./components/pages/Server";
import Header from "./components/pages/Header";
import Fill from "./components/pages/Fill";
import './App.css';
// import './index.css'


const App = () =>(
  <Router>
    <div>
    <Header />
      <Sidebar />
      <Route exact path ="/" component={Home} />
      <Route exact path ="/learn" component={Learn} />
      <Route exact path ="/create" component={Create} />
		  <Route exact path ="/server" component={Server} />
      <Fill />
    </div>
  </Router>    
);




export default App;
