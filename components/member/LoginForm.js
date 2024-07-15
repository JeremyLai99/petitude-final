import React, { useState } from 'react'
import { useAuth } from '@/contexts/member/auth-context'

const LoginForm = ({ onClose, switchToSignup }) => {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const success = await login(email, password)
    if (success) {
      onClose() // 登入成功後關閉 Modal
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="p-4">
      <h2 className="mb-4">登入</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            會員信箱:
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            會員密碼:
          </label>
          <input
            id="password"
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary">
          登入
        </button>
      </form>
    </div>
  )
}

export default LoginForm
