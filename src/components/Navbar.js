import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import '../assets/Navbar.css'

const NAV_ITEMS = [
	{ to: '/', label: 'Home' },
	{ to: '/about', label: 'About' },
	{ to: '/product', label: 'Product' },
]

function Navbar() {
	const auth = useAuth()

	return (
		<nav className='site-nav'>
			<ul className="nav-links" role="menu">
				{NAV_ITEMS.map((i) => (
					<li key={i.to} role="none">
						<NavLink
							to={i.to}
							className={({ isActive }) =>
								isActive ? 'nav-link active' : 'nav-link'
							}
							role="menuitem"
						>
							{i.label}
						</NavLink>
					</li>
				))}
			</ul>

			<div className="nav-right user-info">
				{auth?.user ? (
					<>
						<div className="avatar">
							{(auth.user.displayName || auth.user.username)
								.charAt(0)
								.toUpperCase()}
						</div>
						<div className="username">
							{auth.user.displayName || auth.user.username}
						</div>
						<button onClick={auth.logout} className="btn">
							Logout
						</button>
					</>
				) : (
					<NavLink className="nav-link" to="/login">
						Login
					</NavLink>
				)}
			</div>
		</nav>
	)
}

export default Navbar
