import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import '../assets/Login.css'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      await auth.login({ username, password })
      navigate(from, { replace: true })
    } catch (err) {
      setError(err.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="web-container">
      <form onSubmit={handleSubmit} className="login-card" aria-labelledby="login-title">
        <h2 id="login-title">Login</h2>
        {error && <div className="error" role="alert">{error}</div>}

        <div className="form-row">
          <label htmlFor="username" style={{ color: '#ddd', fontSize: 13 }}>Username</label>
          <input id="username" className="input" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter username" />
        </div>

        <div className="form-row">
          <label htmlFor="password" style={{ color: '#ddd', fontSize: 13 }}>Password</label>
          <input id="password" className="input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button type="submit" className="btn btn-primary" disabled={loading || !username || !password}>
            {loading ? <><span className="spinner"/>Signing in...</> : 'Sign in'}
          </button>
        </div>

        <div className="helper">Try <strong>son/password123</strong> or <strong>bob/hunter2</strong></div>
      </form>
    </div>
  )
}
