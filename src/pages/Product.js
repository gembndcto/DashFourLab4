import React from 'react'
import '../assets/Product.css'
import product4 from '../assets/img/product4.webp'
import placeholder from '../assets/img/animal.png'
import { Link } from 'react-router-dom'

export const PRODUCTS = [
	{
		id: '1',
		title: 'Basic Package',
		price: 199.99,
		desc: 'Basic package includes attendance',
		image: placeholder,
	},
	{
		id: '2',
		title: 'Power Package',
		price: 399.99,
		desc: 'Power Package include attendance + points',
		image: placeholder,
	},
	{
		id: '3',
		title: 'Premium Package',
		price: 999.99,
		desc: 'The Power of Premium and all arounders',
		image: placeholder,
	},
	{
		id: '4',
		title: 'Untitled Proudct',
		price: 0,
		image: product4,
	},
    {
        id: '5',
        title: 'Untitled Product 2',
        price: 0,
        image: product4,
    }
]

const formatCurrency = (value) =>
	new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP'}).format(value)

export default function Product() {
	if (!PRODUCTS.length) {
		return (
			<div className="web-container">
				<div className="card">
					<p className="subtitle">No products available</p>
				</div>
			</div>
		)
	}

	return (
        <div className="web-container">
            <div className="card">
                <header>
                    <h1 id="product-heading">Catalog</h1>
                </header>

                <div className="container products-grid">
                    {PRODUCTS.map((product) => (
                        <article className="product-card" key={product.id}>
                            <figure className="product-figure">
                                <img
                                    src={product.image}
                                    alt={`${product.title} image`}
                                    className="product-image"
                                    loading="lazy"
                                />
                                <figcaption className="product-desc">{product.desc}</figcaption>
                            </figure>

                            <div className="product-body">
                                <h2 className="product-title">{product.title}</h2>
                            </div>

                            <footer className="product-footer">
                                <span className="product-price">{formatCurrency(product.price)}</span>

                                <div className="product-actions">
                                    <Link to={`/products/${product.id}`} className="product-btn primary">
                                        View
                                    </Link>
                                    <button
                                        type="button"
                                        className="product-btn secondary"
                                        onClick={() => console.log('Add to cart', product.id)}
                                    >
                                        Add
                                    </button>
                                </div>
                            </footer>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
