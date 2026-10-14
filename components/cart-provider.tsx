"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { PRODUCTS, type Product } from "@/lib/products"

type Line = { id: string; qty: number }
type CartLine = Product & { qty: number }

const KEY = "pausa-cart"

type CartCtx = {
  lines: CartLine[]
  count: number
  total: number
  add: (id: string) => void
  setQty: (id: string, qty: number) => void
  clear: () => void
}

const Ctx = createContext<CartCtx | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Line[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) ?? "[]")
      if (Array.isArray(saved)) setItems(saved.filter((l) => PRODUCTS.some((p) => p.id === l?.id) && l.qty > 0))
    } catch {}
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    try {
      localStorage.setItem(KEY, JSON.stringify(items))
    } catch {}
  }, [items, loaded])

  const lines = items.map((l) => ({ ...PRODUCTS.find((p) => p.id === l.id)!, qty: l.qty }))

  const value: CartCtx = {
    lines,
    count: lines.reduce((s, l) => s + l.qty, 0),
    total: lines.reduce((s, l) => s + l.qty * l.price, 0),
    add: (id) =>
      setItems((prev) =>
        prev.some((l) => l.id === id) ? prev.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l)) : [...prev, { id, qty: 1 }]
      ),
    setQty: (id, qty) =>
      setItems((prev) => (qty <= 0 ? prev.filter((l) => l.id !== id) : prev.map((l) => (l.id === id ? { ...l, qty } : l)))),
    clear: () => setItems([]),
  }

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useCart() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error("useCart must be used inside CartProvider")
  return ctx
}
