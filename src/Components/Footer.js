import React from "react";
import "./SCSS/Footer.scss";
import logo from "../Assets/logoIcon/FooterBrandLogo.avif";
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
function Footer(props) {


  const Navigate = useNavigate()
  const navigation = (event) => {
      const buttonValue = event.target.value;
      if (buttonValue === "earphone") {
          Navigate('/earphone')
          window.scrollTo(0,0)
          // <ScrollToTop smooth />
      } else if (buttonValue === "speaker"){
          Navigate('/speaker')
          window.scrollTo(0,0)
      } else if(buttonValue === "accesosiers"){
          Navigate('/accesosiers')
          window.scrollTo(0,0);
      }
  };
  return (
    <div id="footer">
      <div className="row coontainer">
        <div className="brand col-sm-12 col-md-4 col-lg-3">
          <img src={logo} className="img-fluid" alt="Logo"/>
          <p className="mt-4 pr-3">
            Since inception in 2013, there has been one principle that we, at
            Pebble have held as holy grail - build experiences crafted around
            'you'. We are a technology brand that endeavours to get the perfect
            blend of innovation, technology and design in each of our products.
          </p>
        </div>
        <div className="details col-sm-12 col-md-8 col-lg-6 row">
          {/* <div class=""> */}
          <div class="accordion d-flex" id="accordionPanelsStayOpenExample">
              <div class="accordion-item col-sm-12 col-md-4 col-lg-4 items">
                <p class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Products
                  </button>
                </p>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                  <div class="accordion-body">
                    <ul>
                      <li>
                        <button to='/earphone' value="earphone" onClick={navigation}>Headphones</button>
                      </li>
                      <li>
                        <button to='/speaker' value="speaker" onClick={navigation}>Wireless Speakers</button>
                      </li>
                      <li>
                        <button to='/accesosiers' value="accesosiers" onClick={navigation}>Accessories</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="accordion-item col-sm-12 col-md-4 col-lg-4 items">
                <p class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Company
                  </button>
                </p>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show">
                  <div class="accordion-body">
                    <ul>
                      <li>
                        <Link to={""}>Our Story</Link>
                      </li>
                      <li>
                        <Link to={""}>Corporate Orders</Link>
                      </li>
                      <li>
                        <Link to={""}>Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="accordion-item col-sm-12 col-md-4 col-lg-4 items">
                <p class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Support
                  </button>
                </p>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show">
                  <div class="accordion-body">
                  <ul>
                    <li>
                      <Link href="#">Register Product Warranty</Link>
                    </li>
                    <li>
                      <Link href="#">Raise Warranty Complaint</Link>
                    </li>
                    <li>
                      <Link href="#">FAQs</Link>
                    </li>
                    <li>
                      <Link href="#">Replacement &amp; Refund Policy</Link>
                    </li>
                    <li>
                      <Link href="#">Shipping Policy</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="#">E-waste Policy</Link>
                    </li>
                    <li>
                      <Link href="#">Terms of Service</Link>
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        <div className="get-in-touch col-md-12 col-lg-3">
          <p>GET IN TOUCH</p>
          <span>
            Office: SRK Powertech Pvt. Ltd.G201, Sector 63, Noida- 201305
          </span>
          <div className="contact">
            <span>
              Email: <Link>support@pebblecart.com</Link>
            </span>
            <br />
            <span>
              Phone: <Link>+91-8800271651</Link>
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
