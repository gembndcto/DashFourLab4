import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import '../assets/Product.css'

export default function NotFound() {
	return (
		<div className="web-container">
			<div className="card">
				<div className='container'>
					<h1>404 -  Not Found</h1>
				</div>
				<div className="container">
					<p className="subtitle">
						The page you are looking for does not exist or has been moved
					</p>
					<Link to="/" className="product-btn">
						Home
					</Link>
				</div>
			</div>
		</div>
	)
}
