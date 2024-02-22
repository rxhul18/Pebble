import React from "react";
import "./SCSS/Footer.scss";
import logo from "../Assets/logoIcon/FooterBrandLogo.avif";
function Footer(props) {
  return (
    <div id="footer">
      {/* <div className=" row"> */}
      {/* <div className="brand col-sm-12 col-md-4 col-lg-3 ">
                <img src={logo} className="img-fluid" />
                <p className="mt-4 pr-3">Since inception in 2013, there has been one principle that we, at Pebble have held as holy grail – build experiences crafted around ‘you’. We are a technology brand that endeavours to get the perfect blend of innovation, technology and design in each of our products.</p>
                </div>
            </div>
            <div class="details col-sm-12 col-md-8 col-lg-6 col-6 row">
                <div class="col-sm-12 col-md-4 col-lg-4 items">
                <p>PRODUCTS</p>
                    <ul>
                    <li><a href="#">Smart Watches</a></li>
                    <li><a href="#">Headphones</a></li>
                    <li><a href="#">Wireless Speakers</a></li>
                    <li><a href="#">Accessories</a></li>
                    </ul>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4 items">
                <p>COMPANY</p>
                    <ul>
                    <li><a href="#">Our Story</a></li>
                    <li><a href="#">Corporate Orders</a></li>
                    <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4 items">
                <p>SUPPORT</p>
                    <ul>
                    <li><a href="#">Register Product Warranty</a></li>
                    <li><a href="#">Raise Warranty Complaint</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a>Warranty Policy</a></li>
                    <li><a href="#">Replacement &amp; Refund Policy</a></li>
                    <li><a href="#">Shipping Policy</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">E-waste Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div className="get-in-touch col-md-12 col-lg-3">
                <p>GET IN TOUCH</p>
                <span>Office: SRK Powertech Pvt. Ltd.G201, Sector 63, Noida- 201305</span>
                <div className="contact">
                <span>Email: <a>support@pebblecart.com</a></span>
                <br/>
                <span>Phone: <a>+91-8800271651</a></span>
                <br/>
                <span>Mon-Sat 10:00AM - 6:00PM</span>
            </div>
                <h5>Subscribe to Our Newsletter</h5>
                <div className="row">
                <div className="col-8 email">
                <input className="rounded" placeholder="Your Email Address" />
                </div>
                <div class="col-4 subscribe"><button>Subscribe</button></div>
                </div> */}
      <div className="row coontainer">
        <div className="brand col-sm-12 col-md-4 col-lg-3">
          <img src={logo} className="img-fluid" />
          <p className="mt-4 pr-3">
            Since inception in 2013, there has been one principle that we, at
            Pebble have held as holy grail – build experiences crafted around
            ‘you’. We are a technology brand that endeavours to get the perfect
            blend of innovation, technology and design in each of our products.
          </p>
        </div>
        <div className="details col-sm-12 col-md-8 col-lg-6 row">
          <div class="col-sm-12 col-md-4 col-lg-4 items">
            <p>PRODUCTS</p>
            <ul>
              <li>
                <a href="#">Smart Watches</a>
              </li>
              <li>
                <a href="#">Headphones</a>
              </li>
              <li>
                <a href="#">Wireless Speakers</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
            </ul>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4 items">
            <p>COMPANY</p>
            <ul>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Corporate Orders</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4 items">
            <p>SUPPORT</p>
            <ul>
              <li>
                <a href="#">Register Product Warranty</a>
              </li>
              <li>
                <a href="#">Raise Warranty Complaint</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Replacement &amp; Refund Policy</a>
              </li>
              <li>
                <a href="#">Shipping Policy</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">E-waste Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="get-in-touch col-md-12 col-lg-3">
          <p>GET IN TOUCH</p>
          <span>
            Office: SRK Powertech Pvt. Ltd.G201, Sector 63, Noida- 201305
          </span>
          <div className="contact">
            <span>
              Email: <a>support@pebblecart.com</a>
            </span>
            <br />
            <span>
              Phone: <a>+91-8800271651</a>
            </span>
            <br />
            <span>Mon-Sat 10:00AM - 6:00PM</span>
          </div>
          <h5>Subscribe to Our Newsletter</h5>
          <div className="row">
            <div className="col-8 email">
              <input className="rounded" placeholder="Your Email Address" />
            </div>
            <div class="col-4 subscribe">
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div class="copywrite col-12 mt-5 pt-4">
          <p>© 2024, Pebble. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
