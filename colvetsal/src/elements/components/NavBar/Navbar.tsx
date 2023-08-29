import React from "react";
// import { NavLink } from 'react-router-dom';
import n from './NavBar.module.css'

interface NavBarProps {
    
  }
  
  const NavBar: React.FC<NavBarProps> = () => {

    return <nav
    className={n.Cont}></nav>;
}

export default NavBar;