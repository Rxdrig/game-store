import { createContext, useContext, useMemo, useState } from "react"

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const addToCart = (game) => {
    if (!game) return

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === game.id)
      if (existing) {
        return prev.map((item) =>
          item.id === game.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...game, quantity: 1 }]
    })
  }

  const removeFromCart = (gameId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== gameId))
  }

  const decreaseQuantity = (gameId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === gameId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const clearCart = () => setCartItems([])

  const openDrawer = () => setIsDrawerOpen(true)
  const closeDrawer = () => setIsDrawerOpen(false)
  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev)

  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  )

  const totalPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  )

  const value = {
    cartItems,
    isDrawerOpen,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    clearCart,
    openDrawer,
    closeDrawer,
    toggleDrawer,
    totalItems,
    totalPrice,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}
