import React from 'react'
import '../assets/Product.css'
import { Link } from 'react-router-dom'

export const PRODUCTS = [
	{ id: '1', title: 'Basic Package', price: 399.99, desc: 'Aki' },
	{ id: '2', title: 'Power Package', price: 399.99, desc: 'Biasco' },
	{ id: '3', title: 'Premium PAckage', price: 999.99, desc: 'Ter' },
]

export default function Product() {

	if( !PRODUCTS.length ) {
		return (
			<div className='web-container'>
				<div className='card'>
					<p className='subtitle'>No products available</p>
				</div>
			</div>
		)
	}


	return (
		<div className="web-container">
			<div className="card">
				<h1>Catalog</h1>
				<div className="container products-grid">
                    {PRODUCTS.map(product => (
                        <article className='product-card' key={product.id}>
                            <div className='product-body'>
                                <h2 className='product-title'>{product.title}</h2>
                            </div>
                            <div className='product-footer'>
                                <span className='product-price'>${product.price}</span>
                                <Link to={`/products/${product.id}`} className='product-btn' key={product.id}>View</Link>
                            </div>
                        </article>
                    ))}
				</div>
			</div>
		</div>
	)
}
