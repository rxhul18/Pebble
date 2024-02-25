import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SCSS/navbarr.scss'
import loginIcon from '../Assets/logoIcon/human.png'
import searchIcon from '../Assets/logoIcon/search.png'
import cartIcon from '../Assets/logoIcon/cart.png'
import pebbleLogo from '../Assets/logoIcon/pebbleLogo.png'
import hamburgerTrue from '../Assets/logoIcon/hamburger2.png'
import hamburgerFalse from '../Assets/logoIcon/hamburger1.png'

function Navbarr(props) {
  
    const [hamburger, setHamburger] = useState(false); 
    

    return (
        <div className='coontainer'>
            <nav id='navbar'>
            <div className="logo">
              <button>{hamburger == false ? <img src={hamburgerFalse} />: <img src={hamburgerTrue} /> }</button>
              <Link to="/"><img src={pebbleLogo} className="m-3 img-fluid"/></Link>
            </div>
            <div className="mainlinks">
              <ul >
                <li>
                  <Link to='/smartwatch'><a href='#'>SMART WATCHES</a></Link>
                </li>
                <li>
                  <Link to='/headphone'><a href='#'>HEADPHONES</a></Link>
                </li>
                <li>
                  <Link to='/speaker'><a href='#'>WIRELESS SPEAKERS</a></Link>
                </li>
                <li>
                  <Link to='/accesosiers'><a href='#'>ACCESSOIRES</a></Link>
                </li>
              </ul>
            </div>
            <div className="mainicons">
                <ul>
                  <li><a href='#'><img src={searchIcon}/></a></li>
                  <li><a href='#'><img src={loginIcon}/></a></li>
                  <li><a href='#'><img src={cartIcon}/></a></li>
                </ul>
            </div>
            </nav>
        </div>
    );
}

export default Navbarr;