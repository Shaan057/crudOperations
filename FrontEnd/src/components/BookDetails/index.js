import './index.css'
import axios from 'axios'
import {useState, useEffect} from 'react'

const BookDetails = props => {
  const {match} = props
  const {params} = match
  const {id} = params

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const book = await axios.get(
          `http://localhost:2000/api/v1/getBooks/${id}`,
        )
        console.log(book)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBook()
  }, [])

  const [bookData, setBookData] = useState(null)

  return <div>Book Details</div>
}

export default BookDetails
