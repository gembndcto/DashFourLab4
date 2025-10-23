import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children }) {
	const auth = useAuth()
	const location = useLocation()

	// If auth is still loading (restoring from storage), don't redirect yet
	if (auth?.loading) return null

	if (!auth?.user) {
		return <Navigate to="/login" state={{ from: location }} replace />
	}

	return children
}
