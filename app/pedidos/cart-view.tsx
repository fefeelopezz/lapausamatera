"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CartIcon, MinusIcon, PlusIcon, TrashIcon, WhatsappIcon } from "@/components/icons"
import { useCart } from "@/components/cart-provider"
import { orderMessage, whatsappUrl } from "@/lib/whatsapp"
import { formatPrice } from "@/lib/products"

export function CartView() {
  const { lines, total, setQty, clear } = useCart()

  return (
    <Card id="carrito">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2 font-heading text-2xl">
          <CartIcon className="size-6 text-primary" /> Tu carrito
        </CardTitle>
        {lines.length > 0 && (
          <Button variant="ghost" size="sm" onClick={clear}>
            Vaciar
          </Button>
        )}
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {lines.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-10 text-center">
            <p className="text-muted-foreground">Todavía no sumaste productos.</p>
            <Link href="/catalogo" className={cn(buttonVariants(), "h-10 rounded-full px-5")}>
              Ir al catálogo
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex flex-col gap-3">
              {lines.map((l) => (
                <li key={l.id} className="flex items-center gap-3">
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-white">
                    <Image src={l.image} alt={l.name} fill sizes="64px" className="object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">{l.name}</p>
                    <p className="text-sm text-muted-foreground">{formatPrice(l.price)} c/u</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="outline" size="icon-sm" aria-label={`Quitar uno de ${l.name}`} onClick={() => setQty(l.id, l.qty - 1)}>
                      <MinusIcon />
                    </Button>
                    <span className="w-6 text-center tabular-nums" aria-label="Cantidad">{l.qty}</span>
                    <Button variant="outline" size="icon-sm" aria-label={`Sumar uno de ${l.name}`} onClick={() => setQty(l.id, l.qty + 1)}>
                      <PlusIcon />
                    </Button>
                  </div>
                  <span className="hidden w-24 text-right font-medium tabular-nums sm:block">{formatPrice(l.qty * l.price)}</span>
                  <Button variant="ghost" size="icon-sm" aria-label={`Eliminar ${l.name}`} onClick={() => setQty(l.id, 0)}>
                    <TrashIcon />
                  </Button>
                </li>
              ))}
            </ul>
            <Separator />
            <dl className="flex flex-col gap-1 text-sm">
              <div className="flex justify-between text-base font-semibold">
                <dt>Total</dt>
                <dd className="tabular-nums">{formatPrice(total)}</dd>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <dt>Seña (50%) para confirmar</dt>
                <dd className="tabular-nums">{formatPrice(Math.ceil(total / 2))}</dd>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <dt>Al recibir</dt>
                <dd className="tabular-nums">{formatPrice(total - Math.ceil(total / 2))}</dd>
              </div>
            </dl>
            <a
              href={whatsappUrl(orderMessage(lines, total))}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-full text-base")}
            >
              <WhatsappIcon className="size-5" /> Enviar pedido por WhatsApp
            </a>
          </>
        )}
      </CardContent>
    </Card>
  )
}
