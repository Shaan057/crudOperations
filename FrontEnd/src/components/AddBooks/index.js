import './index.css'
import {useState} from 'react'
import axios from 'axios'

const AddBooks = () => {
  const [bookData, setBookData] = useState({
    bookname: '',
    description: '',
    price: '',
    author: '',
    imageurl: '',
  })
  const {bookname, description, price, author, imageurl} = bookData

  const [responseMsg, setResponseMsg] = useState('')
  // const {bookname, description, price, author, imageurl} = booksData

  const updateBookData = event => {
    setBookData({
      ...bookData,
      [event.target.name]: event.target.value,
    })
  }

  const onSubmitForm = async event => {
    event.preventDefault()
    try {
      const url = 'http://localhost:2000/api/v1/add'
      const response = await axios.post(url, bookData)
      setResponseMsg(response.data.message)
    } catch (error) {
      setResponseMsg(error.response.data.message)
    }
  }

  const onCloseMsgModal = () => {
    setBookData({
      bookname: '',
      description: '',
      price: '',
      author: '',
      imageurl: '',
    })
    setResponseMsg('')
  }

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
            name="bookname"
            placeholder="Enter Book Name"
            autoComplete="false"
            onChange={updateBookData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            value={description}
            className="form-control"
            id="description"
            name="description"
            placeholder="Enter Book Description"
            autoComplete="false"
            onChange={updateBookData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            value={price}
            className="form-control"
            id="price"
            name="price"
            placeholder="Enter Book Price"
            autoComplete="false"
            onChange={updateBookData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            value={author}
            className="form-control"
            id="author"
            name="author"
            autoComplete="false"
            placeholder="Enter Book Author"
            onChange={updateBookData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageurl">Image Url</label>
          <input
            type="text"
            value={imageurl}
            className="form-control"
            id="imageurl"
            name="imageurl"
            autoComplete="false"
            placeholder="Enter Book Url"
            onChange={updateBookData}
          />
        </div>
        <div className="d-flex align-items-center">
          <button
            type="submit"
            className="btn btn-success"
            data-toggle="modal"
            data-target="#staticBackdrop1"
          >
            Submit
          </button>

          <div
            className="modal fade"
            id="staticBackdrop1"
            data-backdrop="static"
            data-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel12"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5
                    className="modal-title text-dark"
                    id="staticBackdropLabel12"
                  >
                    Status
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => onCloseMsgModal()}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body delete-modal text-secondary">
                  <p className="ml-3 pt-3 text-dark">{responseMsg}</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    onClick={() => onCloseMsgModal()}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddBooks
