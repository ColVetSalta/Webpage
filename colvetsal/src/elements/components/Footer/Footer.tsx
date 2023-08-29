import React from "react";
// import { NavLink } from 'react-router-dom';
import f from './Footer.module.css'

interface NavBarProps {
    
  }
  
  const NavBar: React.FC<NavBarProps> = () => {

    return <nav
    className={f.Cont}></nav>;
}

export default NavBar;