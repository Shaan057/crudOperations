import './index.css'
import {useState} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'
import {IoEyeOutline, IoEyeOffOutline} from 'react-icons/io5'

const Register = props => {
  const {history} = props
  const [username, setUsername] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const [email, setEmail] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [showHidePassword, setShowHidePassword] = useState(false)
  const [responseStatus, setResponseStatus] = useState('')

  const onClickSignupButton = () => {
    history.replace('/login')
  }

  const onSubmitForm = async event => {
    event.preventDefault()
    try {
      if (userPassword === checkPassword) {
        const url = '/api/v1/register'
        const userDetails = {
          username,
          userPassword,
          email,
        }
        const response = await axios.post(url, userDetails)
        setResponseStatus(response.data.message)
      } else {
        throw new Error("password doesn't match")
      }
    } catch (error) {
      setErrorMsg(error.response.data.message)
    }
  }

  const updateUsername = event => {
    setUsername(event.target.value)
  }

  const updatePassword = event => {
    setUserPassword(event.target.value)
  }
  const updateCheckPassword = event => {
    setCheckPassword(event.target.value)
  }

  const updateEmail = event => {
    setEmail(event.target.value)
  }

  const onClickEyebutton = () => {
    setShowHidePassword(prev => !prev)
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="bg-container">
      <div className="form-container">
        {!responseStatus ? (
          <form className="form" onSubmit={onSubmitForm}>
            <h1 className="login-text">Register</h1>
            <div>
              <label className="input-label" htmlFor="username">
                Username
              </label>
              <br />
              <input
                id="username"
                value={username}
                className="input"
                type="text"
                placeholder="username"
                onChange={updateUsername}
                required
              />
              <label className="input-label" htmlFor="email">
                Email
              </label>
              <br />
              <input
                id="email"
                value={email}
                className="input"
                type="email"
                placeholder="email"
                onChange={updateEmail}
                required
              />
              <label className="input-label" htmlFor="password">
                Password
              </label>
              <br />
              <div className="input-password-container">
                <input
                  id="password"
                  className="input-password"
                  value={userPassword}
                  type={showHidePassword ? 'text' : 'password'}
                  placeholder="enter password (min: 8)"
                  onChange={updatePassword}
                  required
                />
                {userPassword ? (
                  <button
                    type="button"
                    className="show-hide-button"
                    onClick={onClickEyebutton}
                  >
                    {showHidePassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                  </button>
                ) : null}
              </div>
              <label className="input-label" htmlFor="reEnterpassword">
                Re-Enter Password
              </label>
              <br />
              <input
                className="input"
                id="reEnterpassword"
                value={checkPassword}
                type="password"
                placeholder="Re-enter password"
                onChange={updateCheckPassword}
                required
              />
              {errorMsg && <p className="error-msg">*{errorMsg}</p>}
            </div>
            <br />

            <button type="submit" className="signup-button btn-success">
              SignUp
            </button>
            <button
              type="button"
              className="signup-button btn-info mt-2"
              onClick={onClickSignupButton}
            >
              Login
            </button>
          </form>
        ) : (
          <div className="responseStatus-container">
            <p className="responseStatus">{responseStatus}</p>
            <button
              type="button"
              className="signup-button mt-2 btn-info"
              onClick={onClickSignupButton}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Register
