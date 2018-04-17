import React from 'react';
import { Link } from "react-router-dom";
import { bubble as Menu } from 'react-burger-menu';
import '../index.css'

const Sidebar = () => (
  // showSettings (event) {
  //   event.preventDefault();
    
  // }
    <Menu>
      <ul className="menu-item">
        <li id="home" className={window.location.pathname === "/" ? "active" : ""}>
        <Link to="/">Home</Link>
        </li>
        <li id="learn" className={window.location.pathname === "/learn" ? "active" : ""}>
        <Link to="/learn">Learn</Link>
        </li>
        <li id="create" className={window.location.pathname === "/create" ? "active" : ""}>
        <Link to="/create">Create</Link>
        </li>
        <li id="serve" className={window.location.pathname === "/server" ? "active" : ""}>
        <Link to="/server">Server</Link>
        </li>
      </ul>
      </Menu>
    );
  
// Do we need setting?

export default Sidebar;