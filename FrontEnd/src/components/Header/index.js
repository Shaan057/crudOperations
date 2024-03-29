import './index.css'
import {Link, useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'

const Header = () => {
  const navigate = useNavigate()
  const onLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login', {replace: true})
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light header-nav fixed-top">
      <Link className="navbar-brand text-success link-logo" to="/">
        Books
      </Link>
      <button
        className="navbar-toggler nav-menu-button"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon button-toggler-icon"> </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link text-success" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-success" to="/books">
              Books
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-success" to="/addbooks">
              Add Books
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-success" to="/">
              Cart
            </Link>
          </li>
          <li className="nav-item disabled">
            <Link className="nav-link" to="/">
              Comming soon
            </Link>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className="btn btn-danger"
              data-toggle="modal"
              data-target="#staticBackdroplogout"
            >
              Logout
            </button>
            <div
              className="modal fade"
              id="staticBackdroplogout"
              data-backdrop="static"
              data-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdroplogoutLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdroplogoutLabel">
                      Logout
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    Are you sure you want to logout?
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-dismiss="modal"
                      onClick={onLogout}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
