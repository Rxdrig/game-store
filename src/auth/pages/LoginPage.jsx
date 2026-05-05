import { useState } from "react"
import { useNavigate, NavLink } from "react-router-dom"
import "./LoginPage.css"

export const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica de autenticación
    if (email && password) {
      navigate("/home")
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Brand Header */}
        <div className="login-header">
          <div className="login-brand-mark">🎮</div>
          <h1 className="login-title">GameHub</h1>
        </div>

        {/* Glass Form Card */}
        <div className="glass-login-card">
          <h2 className="form-heading">Sign In</h2>
          <p className="form-subtitle">Welcome back, gamer</p>

          <form onSubmit={handleSubmit} className="login-form">
            {/* Email Input */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="form-row-between">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>

            {/* Sign In Button */}
            <button type="submit" className="btn-signin">
              Sign In
            </button>
          </form>

          {/* Register Link */}
          <div className="form-divider">
            <span>Don't have an account?</span>
          </div>
          <NavLink to="/register" className="btn-register">
            Create Account
          </NavLink>

          {/* Footer Links */}
          <div className="form-footer">
            <a href="#" className="footer-link">Terms of Use</a>
            <span className="footer-separator">•</span>
            <a href="#" className="footer-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  )
}
