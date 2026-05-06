import { useEffect, useRef, useState } from "react"
import "./PurchaseConfirmation.css"

export const PurchaseConfirmation = ({
  title = "Compra realizada con éxito",
  subtitle = "Aquí tienes las claves de tus juegos comprados.",
  items = [],
  className = "",
}) => {
  const [copiedGameId, setCopiedGameId] = useState(null)
  const copyTimeoutRef = useRef(null)

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current)
      }
    }
  }, [])

  const handleCopyKey = async (gameKey, gameId) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(gameKey)
      } else {
        const tempInput = document.createElement("textarea")
        tempInput.value = gameKey
        tempInput.setAttribute("readonly", "true")
        tempInput.style.position = "absolute"
        tempInput.style.left = "-9999px"
        document.body.appendChild(tempInput)
        tempInput.select()
        document.execCommand("copy")
        document.body.removeChild(tempInput)
      }

      setCopiedGameId(gameId)

      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current)
      }

      copyTimeoutRef.current = setTimeout(() => {
        setCopiedGameId(null)
      }, 1500)
    } catch (error) {
      setCopiedGameId(null)
    }
  }

  if (!items || items.length === 0) {
    return null
  }

  return (
    <div className={`purchase-confirmation ${className}`.trim()}>
      <h5>{title}</h5>
      {subtitle && <p className="purchase-confirmation-text">{subtitle}</p>}
      <ul className="purchase-keys-list">
        {items.map((item) => (
          <li key={item.gameId}>
            <span>{item.name}</span>
            <div className="purchase-key-row">
              <strong>{item.gameKey}</strong>
              <button
                type="button"
                className={`purchase-key-copy ${copiedGameId === item.gameId ? "is-copied" : ""}`.trim()}
                onClick={() => handleCopyKey(item.gameKey, item.gameId)}
              >
                {copiedGameId === item.gameId ? "Copiada" : "Copiar"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}