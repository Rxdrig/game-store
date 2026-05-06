import { PurchaseConfirmation } from "./PurchaseConfirmation"
import "./PurchaseConfirmationModal.css"

export const PurchaseConfirmationModal = ({
  isOpen,
  title,
  subtitle,
  items = [],
  onClose,
}) => {
  if (!isOpen || !items || items.length === 0) {
    return null
  }

  return (
    <div className="purchase-confirmation-overlay" role="dialog" aria-modal="true">
      <div className="purchase-confirmation-modal">
        <div className="purchase-confirmation-modal-header">
          <div>
            <h4>{title || "Compra realizada con éxito"}</h4>
            {subtitle && <p className="purchase-confirmation-text mb-0">{subtitle}</p>}
          </div>
          <button
            type="button"
            className="purchase-confirmation-close"
            onClick={onClose}
            aria-label="Cerrar confirmación"
          >
            ×
          </button>
        </div>

        <PurchaseConfirmation
          items={items}
          title="Claves entregadas"
          subtitle={null}
        />

        <div className="purchase-confirmation-modal-actions">
          <button type="button" className="btn btn-primary" onClick={onClose}>
            Seguir navegando
          </button>
        </div>
      </div>
    </div>
  )
}