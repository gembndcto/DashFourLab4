import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
    const auth = useAuth()

    return (
        <nav>
            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/product">Product</NavLink>
            </div>

            <div style={{ float: 'right' }}>
                {auth?.user ? (
                    <>
                        <span style={{ marginRight: 8 }}>Hello, {auth.user.displayName || auth.user.username}</span>
                        <button onClick={auth.logout} style={{ cursor: 'pointer' }}>Logout</button>
                    </>
                ) : (
                    <NavLink to="/login">Login</NavLink>
                )}
            </div>
        </nav>
    )
}

export default Navbar
