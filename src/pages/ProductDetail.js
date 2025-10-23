import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { PRODUCTS } from './Product'
import '../assets/Product.css'

export default function ProductDetail() {
	const { id } = useParams()
	const product = PRODUCTS.find((p) => p.id === id)

	if (!product) {
		return (
			<div className="web-container">
				<div className="card">
					<h1>Product Not Found</h1>
					<Link to="/product">Back to Catalog</Link>
				</div>
			</div>
		)
	}

	return (
		<div className="web-container">
			<div className="card">
				<h1>{product.title}</h1>
				<div className="container">
					<p className="product-desc">{product.desc}</p>
					<p className="product-price">${product.price.toFixed(2)}</p>
				</div>
				<Link to="/product" className="product-btn">
					Back
				</Link>
			</div>
		</div>
	)
}
