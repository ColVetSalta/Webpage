import React from "react";
// import { NavLink } from 'react-router-dom';
import ColvetLogo from '../../../assets/logo_.png'
import n from './NavBar.module.css'

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = () => {

  return <nav className={n.Cont}>
    <span id={n.logotipe}>
      <img src={ColvetLogo} className={n.logoCol} alt="ColVet" />
      <span id={n.Title}>
        <p>Colegio de Médicos Veterinarios</p>
        <p>de Salta</p>
      </span>
    </span>
    <ul>
      <li>INSTITUCIONAL</li>
      <li>CONTACTO</li>
      <li>NOVEDADES</li>
    </ul>
  </nav>;
}

export default NavBar;