import './index.css'
import axios from 'axios'
import Cookies from 'js-cookie'
import {useState, useEffect} from 'react'
import Header from '../Header'

const BookDetails = props => {
  const {match} = props
  const {params} = match
  const {id} = params

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const url = `/api/v1/getBooks/${id}`
        const jwtToken = Cookies.get('jwt_token')
        const options = {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            'Content-Type': 'application/json',
          },
        }
        const book = await axios.get(url, options)
        console.log(book)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBook()
  }, [])

  const [bookData, setBookData] = useState(null)

  return (
    <>
      <Header />
      <div>Book Details under progress</div>
    </>
  )
}

export default BookDetails
