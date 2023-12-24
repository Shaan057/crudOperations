import './App.css'

import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Books from './components/Books'
import Header from './components/Header'
import AddBooks from './components/AddBooks'
import BookDetails from './components/BookDetails'
import NotFound from './components/NotFound'

const App = () => (
  <div className="bg-dark">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/books" component={Books} />
      <Route exact path="/addbooks" component={AddBooks} />
      <Route exact path="/getBooks/:id" component={BookDetails} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </div>
)

export default App
