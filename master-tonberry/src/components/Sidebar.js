import React from 'react';
import { Link } from "react-router-dom";
import { bubble as Menu } from 'react-burger-menu';

const Sidebar = () => (
  // showSettings (event) {
  //   event.preventDefault();
    
  // }

      <ul className="menu-item">
        <li className={window.location.pathname === "/" ? "active" : ""}>
        <Link to="/">Home</Link>
        </li>
        <li className={window.location.pathname === "/learn" ? "active" : ""}>
        <Link to="/learn">Learn</Link>
        </li>
        <li className={window.location.pathname === "/create" ? "active" : ""}>
        <Link to="/create">Create</Link>
        </li>
        <li className={window.location.pathname === "/server" ? "active" : ""}>
        <Link to="/server">Server</Link>
        </li>
      </ul>
    );
  
// Do we need setting?

export default Sidebar;