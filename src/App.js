// 
import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import BookList from '../src/components/BookList/BookList';

import Login from "./components/Login/Login";
import SignUp from "./components/Register/Register";
import BookForm from "./components/BookForm/BookForm";
// import BookForm from './components/BookForm';

const App = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  return (
    <div className="container">
        <Router>
          <Routes>
          <Route path="/" element={<BookList />}></Route>
            <Route path="/register" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/book-list" element={ isAuthenticated ? <BookList />: <Navigate to="/login"/>}></Route>
            <Route path="/add-book" element={ isAuthenticated ? <BookForm />: <Navigate to="/login"/>}></Route>
          </Routes>
        </Router>
     </div>
  );
};

export default App;