import React from 'react';
import { Link } from 'react-router-dom';

import ViewList from '@material-ui/icons/ViewList';
import TrendingUp from '@material-ui/icons/TrendingUp';
import Yhteys from '@material-ui/icons/ContactMail';

import './Menu.css';

//Alanavigaatiovalikko
function Menu(props) {
    return (
      <div className="menu">
        <Link to="/"><div className="menu__nappi"><ViewList nativeColor="#fff" /></div></Link>
        <Link to="/tilastot"><div className="menu__nappi"><TrendingUp  nativeColor="#fff" /></div></Link>
        <Link to="/yhteystiedot"><div className="menu__nappi"><Yhteys  nativeColor="#fff" /></div></Link>
      </div>
    );
}

export default Menu;