import './index.css'
import {Link} from 'react-router-dom'

const Home = () => (
  <div className="home-background container bg-dark text-light">
    <div className="view-books-container">
      <h1>BOOK STORE</h1>
      <h3>FOR YOU</h3>
      <p>Check Out The Books From Here</p>
      <Link to="/books">
        <button className="btn view-books-button" type="button">
          View Books
        </button>
      </Link>
    </div>
    <img
      className="books-image"
      src="https://res.cloudinary.com/dx8csuvrh/image/upload/v1702628664/Books/girl_reading_book_an0b1f.jpg"
      alt="books"
    />
  </div>
)

export default Home
