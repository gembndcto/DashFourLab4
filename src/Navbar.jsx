import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <NavLink to="/" style={{ margin: '0 10px' }}>Home</NavLink>
      <NavLink to="/about" style={{ margin: '0 10px' }}>About</NavLink>
      <NavLink to="/contact" style={{ margin: '0 10px' }}>Contact</NavLink>
      <NavLink to="/product/1" style={{ margin: '0 10px' }}>Product</NavLink>
      {/* Bonus: Link to protected route */}
      <NavLink to="/protected" style={{ margin: '0 10px' }}>Protected</NavLink>
    </nav>
  );
}

export default Navbar;