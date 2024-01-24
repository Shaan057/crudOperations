import { Link } from 'react-router-dom'

import './index.css'

const Footer = () => (
  <footer className="footer-section">
    <div className="container">
      <div className="footer-cta pt-5 pb-5">
        <div className="row">
          <div className="col-xl-4 col-md-4 mb-30">
            <div className="single-cta">
              <i className="fas fa-map-marker-alt"> </i>
              <div className="cta-text">
                <h4 className="text-success">Find us</h4>
                <span>SD Park, Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 mb-30">
            <div className="single-cta">
              <i className="fas fa-phone"> </i>
              <div className="cta-text">
                <h4 className="text-success">Call us</h4>
                <span>1234567890</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 mb-30">
            <div className="single-cta">
              <i className="far fa-envelope-open"> </i>
              <div className="cta-text">
                <h4 className="text-success">Mail us</h4>
                <span>mail@info.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-content pt-5 pb-5">
        <div className="row">
          <div className="col-xl-4 col-lg-4 mb-50">
            <div className="footer-widget">
              <div className="footer-logo">
                <Link to="index.html">
                  <img
                    src="https://res.cloudinary.com/dx8csuvrh/image/upload/v1702964346/Books/Robinweatherall-Library-Books.256_dopnnh.png"
                    className="img-fluid"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="footer-text">
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                  do eiusmod tempor incididuntut consec tetur adipisicing
                  elit,Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className="footer-social-icon">
                <span className="text-success">Follow us</span>
                <Link to="/">
                  <i className="fab fa-facebook-f facebook-bg"> </i>
                </Link>
                <Link to="/">
                  <i className="fab fa-twitter twitter-bg"> </i>{' '}
                </Link>
                <Link to="/">
                  <i className="fab fa-google-plus-g google-bg"> </i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3 className="text-success">Useful Links</h3>
              </div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">about</Link>
                </li>
                <li>
                  <Link to="/">services</Link>
                </li>
                <li>
                  <Link to="/">portfolio</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <Link to="/">About us</Link>
                </li>
                <li>
                  <Link to="/">Our Services</Link>
                </li>
                <li>
                  <Link to="/">Expert Team</Link>
                </li>
                <li>
                  <Link to="/">Contact us</Link>
                </li>
                <li>
                  <Link to="/">Latest News</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3 className="text-success">Subscribe</h3>
              </div>
              <div className="footer-text mb-25">
                <p>
                  Don't miss to subscribe to our new feeds, kindly fill the form
                  below.
                </p>
              </div>
              <div className="subscribe-form">
                <form action="/">
                  <input
                    className="email-input"
                    type="email"
                    placeholder="Email Address"
                  />
                  <button>
                    <i className="fab fa-telegram-plane"> </i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 text-center text-lg-left">
            <div className="copyright-text">
              <p>Copyright &copy; 2024, All Right Reserved</p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
            <div className="footer-menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Terms</Link>
                </li>
                <li>
                  <Link to="/">Privacy</Link>
                </li>
                <li>
                  <Link to="/">Policy</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
