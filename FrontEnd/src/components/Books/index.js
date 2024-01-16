/* eslint-disable no-underscore-dangle */

import {useEffect, useState} from 'react'
import './index.css'
import axios from 'axios'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import BookItem from '../BookItem'
import Header from '../Header'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const Book = () => {
  const jwtToken = Cookies.get('jwt_token')
  const options = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      'Content-Type': 'application/json',
    },
  }
  const [booksList, setBooksList] = useState(null)
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const [bookname, setBookName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [author, setAuthor] = useState('')
  const [imageurl, setImageurl] = useState('')
  const [category, setBookCategory] = useState('')
  const [editId, setId] = useState(null)
  const [bookUpdateStatus, setBookUpdateStatus] = useState('')
  const [bookDeleteStatus, setBookDeleteStatus] = useState('')
  const [bookToBeDeletedId, setBookToBeDeletedId] = useState('')

  // const {bookname, description, price, author, imageurl, category} = booksData

  const formatData = data => ({
    id: data._id,
    bookName: data.bookname,
    description: data.description,
    price: data.price,
    author: data.author,
    imageUrl: data.imageurl,
    category: data.category,
  })

  const fetchData = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    try {
      const url = '/api/v1/getBooks'
      const response = await axios.get(url, options)
      const {data} = response
      const books = data.books.map(each => formatData(each))
      setBooksList(books)
      setApiStatus(apiStatusConstants.success)
    } catch (error) {
      setApiStatus(apiStatusConstants.failure)
    }
  }

  const onChangeBookName = event => {
    setBookName(event.target.value)
  }

  const onChangeDescription = event => {
    setDescription(event.target.value)
  }

  const onChangePrice = event => {
    setPrice(event.target.value)
  }

  const onChangeAuthor = event => {
    setAuthor(event.target.value)
  }

  const onChangeImageurl = event => {
    setImageurl(event.target.value)
  }

  const onChangeCategory = event => {
    setBookCategory(event.target.value)
  }
  const onSubmitted = () => {
    setBookName('')
    setDescription('')
    setPrice('')
    setAuthor('')
    setImageurl('')
    setBookCategory('')
    fetchData()
  }

  const onCloseDeleteModal = () => {
    setBookDeleteStatus('')
    setBookToBeDeletedId('')
    fetchData()
  }

  const onSubmitForm = async () => {
    try {
      const url = `/api/v1/updateBookDetails/${editId}`
      const bookObject = {
        bookname,
        description,
        price,
        author,
        imageurl,
        category,
      }
      const response = await axios.patch(url, bookObject, options)
      setBookUpdateStatus(response.data.message)
    } catch (error) {
      console.log(error.message)
    }
  }

  const onDeleteModalButtonClicked = id => {
    setBookToBeDeletedId(id)
  }

  const onDeleteBook = async () => {
    try {
      const url = `/api/v1/deleteBook/${bookToBeDeletedId}`
      const response = await axios.delete(url, options)
      setBookDeleteStatus(response.data.message)
    } catch (error) {
      console.log(error)
    }
  }

  const onEditButtonClicked = data => {
    // const {bookname, description, price, author, imageurl,category} = data
    setBookUpdateStatus('')
    setId(data.id)
    setBookName(data.bookName)
    setDescription(data.description)
    setPrice(data.price)
    setAuthor(data.author)
    setImageurl(data.imageUrl)
    setBookCategory(data.category)
  }

  useEffect(() => {
    fetchData()
  }, [setBookUpdateStatus])

  const renderLoadingView = () => (
    <div className="loader-container">
      <Loader type="TailSpin" color="white" height="50" width="50" />
    </div>
  )
  const renderSuccessView = () => (
    <ul className="books-list w-100">
      {booksList.map(each => (
        <BookItem
          key={each.id}
          data={each}
          onDeleteBook={onDeleteBook}
          updateDetails={{
            id: each.id,
            bookname,
            description,
            price,
            author,
            imageurl,
            category,
          }}
          onChangeBookName={onChangeBookName}
          onChangeDescription={onChangeDescription}
          onChangePrice={onChangePrice}
          onChangeAuthor={onChangeAuthor}
          onChangeImageurl={onChangeImageurl}
          onChangeCategory={onChangeCategory}
          onSubmitted={onSubmitted}
          onEditButtonClicked={onEditButtonClicked}
          onSubmitForm={onSubmitForm}
          bookUpdateStatus={bookUpdateStatus}
          onDeleteModalButtonClicked={onDeleteModalButtonClicked}
          onCloseDeleteModal={onCloseDeleteModal}
          bookDeleteStatus={bookDeleteStatus}
        />
      ))}
    </ul>
  )

  const renderFailureView = () => (
    <div className="failure-view">
      <img
        className="failure-img"
        src="https://res.cloudinary.com/dx8csuvrh/image/upload/v1704527966/riseup/something_went_wrong_jng5l5.jpg"
        alt="failure"
      />
    </div>
  )

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
      <div className="books-background container text-white">
        <h3 className="mt-3">Books</h3>
        {renderDishes()}
      </div>
    </>
  )
}
export default Book
