import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

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
    <div className="container">
      <form onSubmit={handleSubmit} className="home-card" style={{ minWidth: 280 }}>
        <h2>Login</h2>
        {error && <div style={{ color: 'salmon', marginBottom: 8 }}>{error}</div>}
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="username" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="password" />
        <button type="submit" disabled={loading || !username || !password}>
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
      <div style={{ marginTop: 12, fontSize: 13, color: '#666' }}>
        Try <strong>alice/password123</strong> or <strong>bob/hunter2</strong>
      </div>
    </div>
  )
}
