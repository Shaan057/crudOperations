import './index.css'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const BookDetails = props => {
  const [bookData, setBookData] = useState(null)
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const { match } = props
  const { params } = match
  const { id } = params

  useEffect(() => {
    const fetchBook = async () => {
      setApiStatus(apiStatusConstants.inProgress)
      try {
        const url = `/api/v1/getBooks/${id}`
        const jwtToken = Cookies.get('jwt_token')
        const options = {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            'Content-Type': 'application/json',
          },
        }
        const response = await axios.get(url, options)
        const { book } = response.data
        // console.log(book)
        setBookData(book)
        setApiStatus(apiStatusConstants.success)
      } catch (error) {
        // console.log(error)
        setApiStatus(apiStatusConstants.failure)
      }
    }
    fetchBook()
  }, [])

  const renderSuccessView = () => {
    const { bookname, description, price, author, imageurl, category } = bookData
    return (
      <div className='book-details-container container p-2'>
        <div className='book-details-card card center-text'>
          <div className='book-details-image-container'>
            <img className='w-100 book-details-image' src={imageurl} alt='book' />
          </div>
          <div className='book-details-info-container flex-grow-1'>
            <h1 className='book-details-book-name'>{bookname}</h1>
            <p className='book-details-book-info'>by <span className='span-author'>{author}</span></p>
            <p className='book-details-book-info book-details-description'>{description}</p>
            <p className='book-details-book-info'>{category}</p>
            <div className='d-flex  justify-content-between align-items-center mt-auto'>
              <p className='book-details-book-info book-details-price m-0'>Rs {price} /-</p>
              <button className='btn btn-success'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div >)
  }

  const renderLoadingView = () => (
    <div className="loader-container">
      <Loader type="TailSpin" color="white" height="50" width="50" />
    </div>
  )

  const renderFailureView = () => <div className='failure-view'>
    <img className='failure-img' src='https://res.cloudinary.com/dx8csuvrh/image/upload/v1704527966/riseup/something_went_wrong_jng5l5.jpg' alt='failure' />
  </div>

  const renderDishes = () => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return renderSuccessView()
      case apiStatusConstants.failure:
        return renderFailureView()
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      default:
        return null
    }
  }

  return (
    <>
      <Header />
      {renderDishes()}
    </>
  )
}

export default BookDetails
