import React  from 'react'
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <h1 className="mustalaatikko">Welcome to React Router</h1>
      <BrowserRouter>
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
          <Link to="/contact">Contact </Link>
          <Routes>
            <Route path="/"  element={< Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
      </BrowserRouter>
</div>
  );
}

function Home() {
  return (
    <h1>This is home page</h1>
  );
}

function About() {
  return (
    <h1>This is about page</h1>
  );
}

function Contact() {
  return (
    <h1>Contact address</h1>
  );
}

export default App;
