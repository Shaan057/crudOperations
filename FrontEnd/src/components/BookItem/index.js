import './index.css'

const BookItem = props => {
  const {
    data,
    updateDetails,
    onDeleteBook,
    onChangeBookName,
    onChangeDescription,
    onChangePrice,
    onChangeAuthor,
    onChangeImageurl,
    onSubmitted,
    onEditButtonClicked,
    onSubmitForm,
    bookUpdateStatus,
  } = props

  const onClickEditButton = () => {
    onEditButtonClicked(data)
  }

  const {id, bookName, description, price, author, imageUrl} = data

  const onClickDeleteBook = async () => {
    onDeleteBook(id)
  }

  const onSubmitClicked = event => {
    event.preventDefault()
    onSubmitForm(data)
  }

  return (
    <li className="d-flex flex-column card text-dark book-item m-2">
      <img className="book-image" src={imageUrl} alt="book" />
      <div className="p-1">
        <h5 className="book-title">{bookName.slice(0, 15)}...</h5>
        <p className="book-author">
          By <span className="author-span">{author}</span>
        </p>
        <p className="book-description">{description.slice(0, 30)}...</p>
        <p className="book-price">Rs {price}</p>
      </div>
      <div className="d-flex justify-content-between align-items-center p-1 mt-auto buttons-container">
        <button
          type="button"
          className="btn btn-outline-success update-delete-button"
          data-toggle="modal"
          data-target="#staticBackdrop"
          onClick={onClickEditButton}
        >
          Edit
        </button>
        <div
          className="modal"
          id="staticBackdrop"
          data-backdrop="static"
          data-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Update Book Details
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => onSubmitted()}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {bookUpdateStatus === '' ? (
                  <form
                    // id={formId}
                    className="text-white w-100"
                    onSubmit={onSubmitClicked}
                  >
                    <div className="form-group my-4">
                      <label className="books-label" htmlFor="bookname">
                        Name
                      </label>
                      <input
                        type="text"
                        value={updateDetails.bookname}
                        className="form-control"
                        id="bookname"
                        placeholder="Enter Book Name"
                        autoComplete="false"
                        onChange={onChangeBookName}
                      />
                    </div>
                    <div className="form-group">
                      <label className="books-label" htmlFor="description">
                        Description
                      </label>
                      <input
                        type="text"
                        value={updateDetails.description}
                        className="form-control"
                        id="description"
                        placeholder="Enter Book Description"
                        autoComplete="false"
                        onChange={onChangeDescription}
                      />
                    </div>
                    <div className="form-group">
                      <label className="books-label" htmlFor="price">
                        Price
                      </label>
                      <input
                        type="number"
                        value={updateDetails.price}
                        className="form-control"
                        id="price"
                        placeholder="Enter Book Price"
                        autoComplete="false"
                        onChange={onChangePrice}
                      />
                    </div>
                    <div className="form-group">
                      <label className="books-label" htmlFor="author">
                        Author
                      </label>
                      <input
                        type="text"
                        value={updateDetails.author}
                        className="form-control"
                        id="author"
                        autoComplete="false"
                        placeholder="Enter Book Author"
                        onChange={onChangeAuthor}
                      />
                    </div>
                    <div className="form-group">
                      <label className="books-label" htmlFor="imageurl">
                        Image Url
                      </label>
                      <input
                        type="text"
                        value={updateDetails.imageurl}
                        className="form-control"
                        id="imageurl"
                        autoComplete="false"
                        placeholder="Enter Book Url"
                        onChange={onChangeImageurl}
                      />
                    </div>
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                  </form>
                ) : (
                  <p>{bookUpdateStatus}</p>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={() => onSubmitted()}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          className="btn btn-danger update-delete-button"
          type="button"
          onClick={onClickDeleteBook}
        >
          Delete
        </button>
      </div>
    </li>
  )
}
export default BookItem
