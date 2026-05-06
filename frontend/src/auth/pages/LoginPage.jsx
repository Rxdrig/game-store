import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginUser, registerUser } from "../../api/authApi"
import { saveCurrentUser } from "../helpers/authStorage"
import "./LoginPage.css"

export const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isRegisterMode, setIsRegisterMode] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    try {
      setIsLoading(true)
      if (isRegisterMode) {
        const data = await registerUser({ email, password })
        setSuccess(data.message || "Cuenta creada correctamente")
        setIsRegisterMode(false)
      } else {
        const data = await loginUser({ email, password })
        saveCurrentUser(data.user)
        setSuccess(data.message)
        navigate("/home")
      }
    } catch (err) {
      setError(err.message || (isRegisterMode ? "No se pudo registrar el usuario" : "No se pudo iniciar sesión"))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Brand Header */}
        <div className="login-header">
          <div className="login-brand-mark">🎮</div>
          <h1 className="login-title">Game Store</h1>
        </div>

        {/* Glass Form Card */}
        <div className="glass-login-card">
          <h2 className="form-heading">{isRegisterMode ? "Regístrate" : "Inicia sesión"}</h2>
          <p className="form-subtitle">
            {isRegisterMode ? "Ingresa tus datos para crear tu cuenta" : "Bienvenido"}
          </p>

          {error && <p className="text-danger mb-2">{error}</p>}
          {success && <p className="text-success mb-2">{success}</p>}

          <form onSubmit={handleSubmit} className="login-form">
            {/* Email Input */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="tucorreo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">Contraseña</label>
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
              <a href="#" className="forgot-link">Olvidaste tu contraseña?</a>
            </div>

            {/* Sign In Button */}
            <button type="submit" className="btn-signin" disabled={isLoading}>
              {isLoading ? "Procesando..." : isRegisterMode ? "Crear cuenta" : "Iniciar sesión"}
            </button>
          </form>

          {/* Register Link */}
          <div className="form-divider">
            <span>{isRegisterMode ? "¿Ya tienes una cuenta?" : "¿No tienes una cuenta?"}</span>
          </div>
          <button
            type="button"
            className="btn-register"
            onClick={() => setIsRegisterMode((current) => !current)}
            disabled={isLoading}
          >
            {isRegisterMode ? "Volver a iniciar sesión" : "Crear cuenta"}
          </button>

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
