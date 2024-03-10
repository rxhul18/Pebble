import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SCSS/navbar.scss'
import loginIcon from '../Assets/logoIcon/human.png'
import searchIcon from '../Assets/logoIcon/search.png'
import cartIcon from '../Assets/logoIcon/cart.png'
import pebbleLogo from '../Assets/logoIcon/pebbleLogo.png'
import hamburgerTrue from '../Assets/logoIcon/hamburger2.png'
import hamburgerFalse from '../Assets/logoIcon/hamburger1.png'
import rightArrow from '../Assets/logoIcon/RightIcon.png'

function Navbarr(props) {
  
    const [hamburger, setHamburger] = useState(false); 
    const burgerClick = () => {
      setHamburger(!hamburger);
    }
    

    return (
      <div style={{width:"100%",backgroundColor:"rgb(250, 250, 250)",padding:"5px"}}>
        <div className='coontainer'>
            <nav id='navbar'>
            <div className="logo">
              <button onClick={burgerClick}>{hamburger === false ? <img src={hamburgerFalse} />: <img src={hamburgerTrue} /> }</button>
              <Link to="/"><img src={pebbleLogo} className="m-3 img-fluid" /></Link>
            </div>
            <div className="mainlinks" id={hamburger === true ? 'mobile-view' : null}>
              <ul >
                <li>
                  <Link to='/smartwatch'>SMART WATCHES<img src={rightArrow} alt="arrrow icon" onClick={burgerClick} /></Link>
                </li>
                <li>
                  <Link to='/earphone'><a href='#'>EARPHONES</a> <img src={rightArrow} alt="arrrow icon" onClick={burgerClick} /></Link>
                </li>
                <li>
                  <Link to='/speaker'><a href='#'>WIRELESS SPEAKERS</a> <img src={rightArrow} alt="arrrow icon" onClick={burgerClick} /></Link>
                </li>
                <li>
                  <Link to='/accesosiers'><a href='#'>ACCESSOIRES</a> <img src={rightArrow} alt="arrrow icon" onClick={burgerClick} /></Link>
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
      </div>
    );
}

export default Navbarr;
