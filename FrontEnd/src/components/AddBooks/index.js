import './index.css'
import {useEffect, useState} from 'react'
import axios from 'axios'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

//  bookname: { type: String, required: true },
//     description: { type: String, required: true },
//     price: { type: Number, required: true },
//     author: { type: String, required: true },
//     imageurl: { type: String, required: true },

const AddBooks = () => {
  const [bookname, setBookName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [author, setAuthor] = useState('')
  const [imageurl, setImageurl] = useState('')

  // const {bookname, description, price, author, imageurl} = booksData

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

  const onSubmitForm = async event => {
    event.preventDefault()
    try {
      const bookData = {bookname, description, price, author, imageurl}
      const url = 'http://localhost:2000/api/v1/add'
      const response = await axios.post(url, bookData)
      console.log(response.data.message)
      setBookName('')
      setDescription('')
      setPrice('')
      setAuthor('')
      setImageurl('')
    } catch (error) {
      console.log(error.message)
    }
  }

  // const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

  // const renderLoadingView = () => <div>loading</div>

  // const renderSuccessView = () => <div>success</div>

  // const renderFailureView = () => <div>failure</div>

  // const renderDishes = () => {
  //   switch (apiStatus) {
  //     case apiStatusConstants.success:
  //       return renderSuccessView()
  //     case apiStatusConstants.failure:
  //       return renderFailureView()
  //     case apiStatusConstants.inProgress:
  //       return renderLoadingView()
  //     default:
  //       return null
  //   }
  // }

  return (
    <div className="addbooks-background container">
      <h3 className="text-white text-center mt-3 text-success">Add Books</h3>
      <form className="text-white w-100" onSubmit={onSubmitForm}>
        <div className="form-group my-4">
          <label htmlFor="bookname">Name</label>
          <input
            type="text"
            value={bookname}
            className="form-control"
            id="bookname"
            placeholder="Enter Book Name"
            required
            autoComplete="false"
            onChange={onChangeBookName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            value={description}
            className="form-control"
            id="description"
            placeholder="Enter Book Description"
            required
            autoComplete="false"
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            value={price}
            className="form-control"
            id="price"
            required
            placeholder="Enter Book Price"
            autoComplete="false"
            onChange={onChangePrice}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            value={author}
            className="form-control"
            id="author"
            required
            autoComplete="false"
            placeholder="Enter Book Author"
            onChange={onChangeAuthor}
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageurl">Image Url</label>
          <input
            type="text"
            value={imageurl}
            className="form-control"
            id="imageurl"
            required
            autoComplete="false"
            placeholder="Enter Book Url"
            onChange={onChangeImageurl}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddBooks
