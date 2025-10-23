import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

// Simple in-memory user store for demo purposes
const USERS = [
  { username: 'alice', password: 'password123', displayName: 'Alice' },
  { username: 'bob', password: 'hunter2', displayName: 'Bob' },
];

const STORAGE_KEY = 'simple_auth_user'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try to restore user from localStorage
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        setUser(JSON.parse(raw))
      }
    } catch (e) {
      // ignore
    } finally {
      setLoading(false)
    }
  }, [])

  // login accepts an object { username, password }
  async function login({ username, password }) {
    // fake async delay
    await new Promise(r => setTimeout(r, 250))

    const found = USERS.find(u => u.username === username && u.password === password)
    if (!found) {
      const err = new Error('Invalid username or password')
      err.code = 'INVALID_CREDENTIALS'
      throw err
    }

    const u = { username: found.username, displayName: found.displayName }
    setUser(u)
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(u)) } catch (e) {}
    return u
  }

  function logout() {
    setUser(null)
    try { localStorage.removeItem(STORAGE_KEY) } catch (e) {}
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
