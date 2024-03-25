import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Books from './components/Books'
import AddBooks from './components/AddBooks'
import BookDetails from './components/BookDetails'
import NotFound from './components/NotFound'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Register from './components/Register'

const App = () => (
  <div className="bg-dark">
    <Routes>
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoute element={Home} />} />
      <Route path="/books" element={<ProtectedRoute element={Books} />} />
      <Route path="/addbooks" element={<ProtectedRoute element={AddBooks} />} />
      <Route path="/getBooks/:id" element={<ProtectedRoute element={BookDetails} />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  </div>
);

export default App;
