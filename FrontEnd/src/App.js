import './App.css'

import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Books from './components/Books'
import Header from './components/Header'
import AddBooks from './components/AddBooks'

const App = () => (
  <div className="bg-dark">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/books" component={Books} />
      <Route exact path="/addbooks" component={AddBooks} />
    </Switch>
  </div>
)

export default App
