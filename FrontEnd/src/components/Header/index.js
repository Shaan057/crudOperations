import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light header-nav">
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
        <li
          className="nav-item"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li
          className="nav-item"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <Link className="nav-link" to="/books">
            Books
          </Link>
        </li>
        {/* <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            role="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </Link>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="#">
              Action
            </Link>
            <Link className="dropdown-item" to="#">
              Another action
            </Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="#">
              Something else here
            </Link>
          </div>
        </li> */}
        <li
          className="nav-item"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <Link className="nav-link" to="/addbooks">
            Add Books
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
