import React from 'react';
import { NavLink } from "react-router-dom";
 const Menu = (props) => <nav className="navbar navbar-expand-lg navbar-light bg-inverse">
    <div className="collapse navbar-collapse" >
        <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
                <NavLink to={'/'} activeClassName="active" className="nav-link "  >Users</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={'/Repo'} activeClassName="active" className="nav-link "  >Repo</NavLink>
            </li>
        </ul>
        {props.children}
    </div>
</nav>;

export default Menu;