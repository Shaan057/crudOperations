/* eslint-disable no-underscore-dangle */

import {useEffect, useState} from 'react'
import './index.css'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import BookItem from '../BookItem'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const Book = () => {
  const [booksList, setBooksList] = useState(null)
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

  const [bookname, setBookName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [author, setAuthor] = useState('')
  const [imageurl, setImageurl] = useState('')
  const [editId, setId] = useState(null)
  const [bookUpdateStatus, setBookUpdateStatus] = useState('')

  // const {bookname, description, price, author, imageurl} = booksData

  const formatData = data => ({
    id: data._id,
    bookName: data.bookname,
    description: data.description,
    price: data.price,
    author: data.author,
    imageUrl: data.imageurl,
  })

  const fetchData = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    try {
      const response = await axios.get('http://localhost:2000/api/v1/getBooks')
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

  const onSubmitted = () => {
    setBookName('')
    setDescription('')
    setPrice('')
    setAuthor('')
    setImageurl('')
    fetchData()
  }

  const onSubmitForm = async data => {
    try {
      // const bookData = {bookname, description, price, author, imageurl}
      const url = `http://localhost:2000/api/v1/updateBookDetails/${editId}`
      const response = await axios.patch(url, {
        bookname,
        description,
        price,
        author,
        imageurl,
      })
      setBookUpdateStatus(response.data.message)
    } catch (error) {
      console.log(error.message)
    }
  }

  const onDeleteBook = async id => {
    setApiStatus(apiStatusConstants.inProgress)
    try {
      const url = `http://localhost:2000/api/v1/deleteBook/${id}`
      const response = await axios.delete(url)
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }

  const onEditButtonClicked = data => {
    // const {bookname, description, price, author, imageurl} = data
    setBookUpdateStatus('')
    setId(data.id)
    setBookName(data.bookName)
    setDescription(data.description)
    setPrice(data.price)
    setAuthor(data.author)
    setImageurl(data.imageUrl)
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
    <ul className="books-list">
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
          }}
          onChangeBookName={onChangeBookName}
          onChangeDescription={onChangeDescription}
          onChangePrice={onChangePrice}
          onChangeAuthor={onChangeAuthor}
          onChangeImageurl={onChangeImageurl}
          onSubmitted={onSubmitted}
          onEditButtonClicked={onEditButtonClicked}
          onSubmitForm={onSubmitForm}
          bookUpdateStatus={bookUpdateStatus}
        />
      ))}
    </ul>
  )

  const renderFailureView = () => <div>failure</div>

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
    <div className="books-background container text-white">
      <h3 className="mt-3">Books</h3>
      {renderDishes()}
    </div>
  )
}
export default Book
