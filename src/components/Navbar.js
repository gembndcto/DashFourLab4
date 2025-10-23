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

            <div className='nav-right user-info'>
                {auth?.user ? (
                    <>
                        <div className="avatar">{(auth.user.displayName || auth.user.username).charAt(0).toUpperCase()}</div>
                        <div className="username">{auth.user.displayName || auth.user.username}</div>
                        <button onClick={auth.logout} className="btn">Logout</button>
                    </>
                ) : (
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                )}
            </div>
        </nav>
    )
}

export default Navbar
