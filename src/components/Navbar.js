import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink> | 
      <NavLink to="/about">About</NavLink> | 
      <NavLink to="/contact">Contact</NavLink> | 
      <NavLink to="/product/1">Product</NavLink>
    </nav>
  );
}
