import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import ProtectedRoute from './ProtectedRoute';
import './App.css';  // Import the CSS

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="page-container">  {/* Wrap routes in container */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
          {/* Bonus: Protected route example */}
          <Route path="/protected" element={<ProtectedRoute><h1>Protected Page - You are logged in!</h1></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;