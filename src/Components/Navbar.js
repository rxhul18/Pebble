import '../SCSS/common.scss'
import '../SCSS/navbar.scss'
import pebbleLogo from "../Assets/logo & icon/pebbleLogo.png"
import searchIcon from '../Assets/logo & icon/search.png'
import personIcon from '../Assets/logo & icon/human.png'
import cartIcon from '../Assets/logo & icon/cart.png'
import {Link} from 'react-router-dom'



function navbar() {
  return (
    <div data-aos="fade-right" className="coontainer">
        <div className="row">
            <div className="col-2">
              <Link to="/"><img src={pebbleLogo} className="m-3 img-fluid"/></Link>
            </div>
            <div className="col-8">
              <ul >
                <li>
                  <Link to='/smartwatch'>SMART WATCHES</Link>
                </li>
                <li>
                  <Link to='/headphone'>HEADPHONES</Link>
                </li>
                <li>
                  <Link to='/speaker'>WIRELESS SPEAKERS</Link>
                </li>
                <li>
                  <Link to='/accesosiers'>ACCESSOIRES</Link>
                </li>
              </ul>
            </div>
            <div className="col-2 rahul">
              <div className="icons pr-2">
                <ul>
                  <li><a href='#'><img src={searchIcon}/></a></li>
                  <li><a href='#'><img src={personIcon}/></a></li>
                  <li><a href='#'><img src={cartIcon}/></a></li>
                </ul>
              </div>
              {/* <div className='col-1'>
                 
              </div> */}
            </div>
        </div>
    </div>
  )
}

export default navbar;
