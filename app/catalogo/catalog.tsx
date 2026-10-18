"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { CartIcon, PlusIcon } from "@/components/icons"
import { useCart } from "@/components/cart-provider"
import { CATEGORIES, PRODUCTS, formatPrice, type Product } from "@/lib/products"

const FILTERS = [{ value: "todos", label: "Todos" }, ...CATEGORIES]

export function Catalog({ initial }: { initial: string }) {
  const [filter, setFilter] = useState(FILTERS.some((f) => f.value === initial) ? initial : "todos")
  const [justAdded, setJustAdded] = useState<string | null>(null)
  const [selected, setSelected] = useState<Product | null>(null)
  const { add, count } = useCart()

  const shown = filter === "todos" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter)

  const onAdd = (id: string) => {
    add(id)
    setJustAdded(id)
    setTimeout(() => setJustAdded((cur) => (cur === id ? null : cur)), 1200)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Tabs value={filter} onValueChange={(v) => setFilter(String(v))}>
          <TabsList className="h-10! rounded-full p-1">
            {FILTERS.map((f) => (
              <TabsTrigger key={f.value} value={f.value} className="rounded-full px-4">
                {f.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <span className="text-sm text-muted-foreground" aria-live="polite">
          {shown.length} productos
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {shown.map((p, i) => (
          <Card key={p.id} className="group gap-0 overflow-hidden pt-0 pb-0">
            <button
              type="button"
              onClick={() => setSelected(p)}
              aria-label={`Ver detalle de ${p.name}`}
              className="relative block aspect-square cursor-pointer overflow-hidden bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              <Image src={p.image} alt={p.name} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" loading={i < 4 ? "eager" : "lazy"} className="object-cover transition-transform duration-300 group-hover:scale-105" />
              <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-card to-transparent" />
              <Badge variant="secondary" className="absolute top-3 left-3 capitalize">
                {p.category}
              </Badge>
            </button>
            <CardContent className="flex flex-1 flex-col gap-1 pt-4">
              <h3 className="font-medium leading-snug">
                <button type="button" onClick={() => setSelected(p)} className="cursor-pointer text-left hover:underline">
                  {p.name}
                </button>
              </h3>
              <p className="text-sm text-muted-foreground">{formatPrice(p.price)}</p>
            </CardContent>
            <CardFooter className="border-t-0 bg-transparent pt-3 pb-4">
              <Button className="h-9 w-full rounded-full" onClick={() => onAdd(p.id)} variant={justAdded === p.id ? "secondary" : "default"}>
                {justAdded === p.id ? "¡Agregado!" : (<><PlusIcon /> Agregar</>)}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        {selected && (
          <DialogContent className="max-h-[90dvh] gap-0 overflow-y-auto p-0 sm:max-w-3xl">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square bg-muted">
                <Image src={selected.image} alt={selected.name} fill sizes="(min-width: 768px) 384px, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-4 p-6">
                <Badge variant="secondary" className="w-fit capitalize">{selected.category}</Badge>
                <DialogTitle className="font-heading text-2xl font-semibold">{selected.name}</DialogTitle>
                <p className="font-heading text-3xl font-bold text-primary">{formatPrice(selected.price)}</p>
                <DialogDescription className="text-base leading-relaxed">{selected.description}</DialogDescription>
                <Button
                  className="mt-auto h-11 w-full rounded-full text-base"
                  onClick={() => onAdd(selected.id)}
                  variant={justAdded === selected.id ? "secondary" : "default"}
                >
                  {justAdded === selected.id ? "¡Agregado!" : (<><PlusIcon /> Agregar al carrito</>)}
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>

      {count > 0 && (
        <Link
          href="/pedidos"
          className="fixed right-4 bottom-4 z-30 flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-transform hover:scale-105"
        >
          <CartIcon className="size-5" /> Ver carrito ({count})
        </Link>
      )}
    </div>
  )
}
