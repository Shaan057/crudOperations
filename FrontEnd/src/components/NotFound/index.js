import './index.css'
import {Link} from 'react-router-dom'

const NotFound = () => (
  <div className="bg-not-found">
    <div className="card">
      <p className="not-found-para">Something Went Wrong!!!</p>
      <Link to="/">
        <button className="not-found-button" type="button">
          Home
        </button>
      </Link>
    </div>
  </div>
)

export default NotFound
