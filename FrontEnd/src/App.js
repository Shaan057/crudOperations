import './App.css'
import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Books from './components/Books'
import Header from './components/Header'
import AddBooks from './components/AddBooks'
import BookDetails from './components/BookDetails'
import NotFound from './components/NotFound'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Register from './components/Register'

const App = () => (
  <div className="bg-dark">
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/books" component={Books} />
      <ProtectedRoute exact path="/addbooks" component={AddBooks} />
      <ProtectedRoute exact path="/getBooks/:id" component={BookDetails} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </div>
)

export default App
