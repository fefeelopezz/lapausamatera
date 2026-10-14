"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/components/cart-provider"
import { CartIcon, MenuIcon } from "@/components/icons"

const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/pedidos", label: "Pedidos" },
  { href: "/contacto", label: "Contacto" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const { count } = useCart()

  const links = (inSheet?: boolean) =>
    NAV.map((n) => {
      const link = (
        <Link
          key={n.href}
          href={n.href}
          aria-current={pathname === n.href ? "page" : undefined}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary",
            pathname === n.href && "bg-primary text-primary-foreground hover:bg-primary"
          )}
        >
          {n.label}
        </Link>
      )
      return inSheet ? <SheetClose key={n.href} render={link} nativeButton={false} /> : link
    })

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logoPausaMatera.png" alt="La Pausa Matera" width={44} height={44} className="rounded-full" priority />
          <span className="hidden font-heading text-lg font-semibold tracking-tight sm:inline">La Pausa Matera</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">{links()}</nav>

        <div className="flex items-center gap-1">
          <Link
            href="/pedidos"
            className={cn(buttonVariants({ variant: "ghost", size: "icon-lg" }), "relative")}
            aria-label={`Carrito, ${count} productos`}
          >
            <CartIcon className="size-5" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 grid size-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </Link>
          <Sheet>
            <SheetTrigger className={cn(buttonVariants({ variant: "ghost", size: "icon-lg" }), "md:hidden")} aria-label="Abrir menú">
              <MenuIcon className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="p-6">
              <SheetTitle>Menú</SheetTitle>
              <nav className="mt-4 flex flex-col gap-1">{links(true)}</nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
