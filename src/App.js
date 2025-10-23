import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'
import ProductDetail from './pages/ProductDetail'

function App() {
	return (
			<Router>
				<AuthProvider>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/login" element={<Login />} />
						<Route
							path="/product"
							element={
								<ProtectedRoute>
									<Product />
								</ProtectedRoute>
							}
						/>
						<Route
						path='/products/:id'
						element={
							<ProtectedRoute>
								<ProductDetail />
							</ProtectedRoute>
						}
						/>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</AuthProvider>
			</Router>
	)
}

export default App
