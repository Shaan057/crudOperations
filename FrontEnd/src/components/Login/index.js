import './index.css'
import {useState} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'
import {IoEyeOutline, IoEyeOffOutline} from 'react-icons/io5'

const Login = props => {
  const {history} = props
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showErrorMsg, setShowErrorMsg] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [showHidePassword, setShowHidePassword] = useState(false)

  const userDetails = {username, password}

  const onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  const onClickSignupButton = () => {
    history.replace('/register')
  }

  const onSubmitFailure = msg => {
    setShowErrorMsg(true)
    setErrorMsg(msg)
  }

  const onClickEyebutton = () => {
    setShowHidePassword(prev => !prev)
  }

  const onSubmitForm = async event => {
    event.preventDefault()
    try {
      const url = '/api/v1/login'
      const userData = {
        username,
        password,
      }
      const response = await axios.post(url, userData)
      onSubmitSuccess(response.data.jwt_token)
    } catch (error) {
      onSubmitFailure(error.response.data.message)
    }
  }

  const updateUsername = event => {
    setUsername(event.target.value)
  }

  const updatePassword = event => {
    setPassword(event.target.value)
  }
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="Login-bg-container">
      <div className="Login-form-container">
        <form className="Login-form" onSubmit={onSubmitForm}>
          <h1 className="Login-login-text">Login</h1>
          <div>
            <label className="Login-input-label" htmlFor="username">
              USERNAME
            </label>
            <br />
            <input
              id="username"
              value={username}
              className="Login-input"
              type="text"
              required
              placeholder="username"
              onChange={updateUsername}
            />
            <br />
            <br />
            <label className="Login-input-label" htmlFor="password">
              PASSWORD
            </label>
            <br />
            <div className="Login-input-password-container">
              <input
                id="password"
                className="Login-input"
                value={password}
                type={showHidePassword ? 'text' : 'password'}
                placeholder="password"
                required
                onChange={updatePassword}
              />
              {password ? (
                <button
                  type="button"
                  className="Login-show-hide-button"
                  onClick={onClickEyebutton}
                >
                  {showHidePassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                </button>
              ) : null}
            </div>
          </div>
          {showErrorMsg ? <p className="Login-error-msg">*{errorMsg}</p> : null}
          <br />
          <button type="submit" className="Login-login-button btn-info">
            Login
          </button>
          <button
            type="button"
            className="Login-signup-button btn-success"
            onClick={onClickSignupButton}
          >
            SignUp
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
