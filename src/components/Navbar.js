import { Link, NavLink  } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/product">Product</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
