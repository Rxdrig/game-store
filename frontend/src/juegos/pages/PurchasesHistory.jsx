import { useEffect, useState } from 'react'
import { getCurrentUser } from '../../auth/helpers/authStorage'
import { fetchPurchases } from '../../api/purchaseApi'
import './PurchasesHistory.css'

export const PurchasesHistory = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [purchases, setPurchases] = useState([])

  useEffect(() => {
    const user = getCurrentUser()
    if (!user?.email) {
      setError('Debes iniciar sesión para ver el historial.')
      setLoading(false)
      return
    }

    let mounted = true
    const load = async () => {
      try {
        setLoading(true)
        const res = await fetchPurchases(user.email)
        if (!mounted) return
        const orderedPurchases = [...(res.compras || [])].sort(
          (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
        )
        setPurchases(orderedPurchases)
      } catch (err) {
        if (!mounted) return
        setError(err.message || 'No se pudo cargar el historial')
      } finally {
        if (mounted) setLoading(false)
      }
    }

    load()

    return () => {
      mounted = false
    }
  }, [])

  if (loading) return <p className="text-muted">Cargando historial...</p>
  if (error) return <p className="text-danger">{error}</p>

  if (!purchases || purchases.length === 0) {
    return <p className="text-muted">No tienes compras aún.</p>
  }

  return (
    <section className="purchases-page">
      <div className="container py-4 py-lg-5">
        <header className="purchases-hero">
          <div>
            <span className="purchases-kicker">Account Activity</span>
            <h2>Historial de Compras</h2>
            <p>Revisa tus compras más recientes, las claves entregadas y el detalle de cada pedido.</p>
          </div>

          <div className="purchases-hero-stats">
            <div className="purchases-stat-card">
              <span className="purchases-stat-label">Compras</span>
              <strong>{purchases.length}</strong>
            </div>
            <div className="purchases-stat-card">
              <span className="purchases-stat-label">Total acumulado</span>
              <strong>
                ${purchases.reduce((sum, comp) => sum + (comp.total || 0), 0).toFixed(2)}
              </strong>
            </div>
          </div>
        </header>

        <div className="purchases-list">
          {purchases.map((comp, index) => (
            <article key={comp.id} className="purchase-card">
              <div className="purchase-card-top">
                <div>
                  <span className="purchase-badge">Compra #{purchases.length - index}</span>
                  <h3>{comp.id}</h3>
                </div>
                <div className="purchase-card-total">
                  <span>Total</span>
                  <strong>${comp.total.toFixed(2)}</strong>
                </div>
              </div>

              <div className="purchase-meta-grid">
                <div className="purchase-meta-item">
                  <span>Fecha</span>
                  <strong>{new Date(comp.createdAt).toLocaleString()}</strong>
                </div>
                <div className="purchase-meta-item">
                  <span>Estado</span>
                  <strong className="purchase-status purchase-status-success">Pagado</strong>
                </div>
                <div className="purchase-meta-item">
                  <span>Juegos</span>
                  <strong>{comp.items.length}</strong>
                </div>
              </div>

              <div className="purchase-items-block">
                <div className="purchase-section-title">Claves entregadas</div>
                <ul className="purchase-items-list">
                  {comp.items.map((item) => (
                    <li key={item.gameId} className="purchase-item-row">
                      <div className="purchase-item-info">
                        <span className="purchase-item-name">{item.name}</span>
                        <span className="purchase-item-quantity">Cantidad: {item.quantity}</span>
                      </div>
                      <strong className="purchase-item-key">{item.gameKey}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
