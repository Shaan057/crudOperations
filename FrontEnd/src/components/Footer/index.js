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
                <a href="index.html">
                  <img
                    src="https://res.cloudinary.com/dx8csuvrh/image/upload/v1702964346/Books/Robinweatherall-Library-Books.256_dopnnh.png"
                    className="img-fluid"
                    alt="logo"
                  />
                </a>
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
                <a href="/">
                  <i className="fab fa-facebook-f facebook-bg"> </i>
                </a>
                <a href="/">
                  <i className="fab fa-twitter twitter-bg"> </i>{' '}
                </a>
                <a href="/">
                  <i className="fab fa-google-plus-g google-bg"> </i>
                </a>
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
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">about</a>
                </li>
                <li>
                  <a href="/">services</a>
                </li>
                <li>
                  <a href="/">portfolio</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
                <li>
                  <a href="/">About us</a>
                </li>
                <li>
                  <a href="/">Our Services</a>
                </li>
                <li>
                  <a href="/">Expert Team</a>
                </li>
                <li>
                  <a href="/">Contact us</a>
                </li>
                <li>
                  <a href="/">Latest News</a>
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
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Terms</a>
                </li>
                <li>
                  <a href="/">Privacy</a>
                </li>
                <li>
                  <a href="/">Policy</a>
                </li>
                <li>
                  <a href="/">Contact</a>
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
