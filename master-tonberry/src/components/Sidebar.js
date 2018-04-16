import React from 'react';
import { Link } from "react-router-dom";
import { bubble as Menu } from 'react-burger-menu'

const Sidebar = () => (
  // showSettings (event) {
  //   event.preventDefault();
    
  // }

      <Menu className="menu-item">
        <a id={window.location.pathname === "/" ? "active" : ""}>
        <link to="/">Home</link>
        </a>
        <a id={window.location.pathname === "/learn" ? "active" : ""}>
        <link to="/">Learn</link>
        </a>
        <a id={window.location.pathname === "/create" ? "active" : ""}>
        <link to="/">Create</link>
        </a>
        <a id={window.location.pathname === "/server" ? "active" : ""}>
        <link to="/">Server</link>
        </a>
      </Menu>
    );
  
// Do we need setting?

export default Sidebar;