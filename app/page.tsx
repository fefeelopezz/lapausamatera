import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LeafIcon, MateIcon, ThermosIcon } from "@/components/icons";
import { PRODUCTS, formatPrice } from "@/lib/products";

const CATS = [
  { href: "/catalogo?cat=mates", title: "Mates", text: "Camioneros, imperiales y torpedos de calabaza y algarrobo.", Icon: MateIcon },
  { href: "/catalogo?cat=termos", title: "Termos", text: "Que mantengan el agua a punto toda la ronda.", Icon: ThermosIcon },
  { href: "/catalogo?cat=bombillas", title: "Bombillas", text: "Clásicas y bombillones premium pico de loro y de rey.", Icon: LeafIcon },
];

const FEATURED = ["imperial-croco", "camionero-deluxe", "termo-media-negro", "bombillon-pico-rey"].map(
  (id) => PRODUCTS.find((p) => p.id === id)!
);

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <section className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col gap-6">
          <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-medium tracking-wide text-secondary-foreground uppercase">
            Mates · Termos · Bombillas
          </span>
          <h1 className="font-heading text-5xl leading-[1.05] font-bold tracking-tight text-balance md:text-6xl">
            Mas que un mate, <span className="text-primary">un buen momento</span>
          </h1>
          <p className="max-w-prose text-lg text-pretty text-muted-foreground">
            En La Pausa Matera nacimos con una idea simple: hacer de cada mate un momento especial. Creemos que el mate es mucho más que una costumbre; es compartir, encontrarse y disfrutar de esos pequeños momentos que hacen la diferencia. 
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/catalogo" className={cn(buttonVariants({ size: "lg" }), "h-11 rounded-full px-6")}>
              Ver catálogo
            </Link>
            <Link href="/pedidos" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 rounded-full px-6")}>
              ¿Cómo pedir?
            </Link>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-sm">
          <div className="absolute inset-6 rounded-full bg-[var(--sage)]/20 blur-2xl" />
          <Image src="/logoPausaMatera.png" alt="Logo de La Pausa Matera" fill sizes="(min-width: 768px) 384px, 90vw" className="object-contain" priority />
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <h2 className="font-heading text-3xl font-semibold tracking-tight">Lo que vas a encontrar</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {CATS.map(({ href, title, text, Icon }) => (
            <Link key={title} href={href} className="group">
              <Card className="h-full transition-all group-hover:-translate-y-1 group-hover:shadow-md">
                <CardContent className="flex flex-col gap-3">
                  <Icon className="size-10 text-primary" />
                  <h3 className="font-heading text-xl font-semibold">{title}</h3>
                  <p className="text-sm text-muted-foreground">{text}</p>
                  <span className="mt-auto text-sm font-medium text-primary">Explorar →</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-heading text-3xl font-semibold tracking-tight">Los más elegidos</h2>
          <Link href="/catalogo" className="text-sm font-medium text-primary hover:underline">
            Ver todo
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {FEATURED.map((p) => (
            <Link key={p.id} href={`/catalogo?cat=${p.category}`} className="group flex flex-col gap-2">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-white">
                <Image src={p.image} alt={p.name} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover transition-transform group-hover:scale-105" />
              </div>
              <span className="text-sm font-medium">{p.name}</span>
              <span className="text-sm text-muted-foreground">{formatPrice(p.price)}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground md:px-12">
        <MateIcon className="mx-auto mb-4 size-12 opacity-80" />
        <p className="mx-auto max-w-2xl font-heading text-2xl font-medium text-balance md:text-3xl">
            “Siempre hay un momento para hacer una pausa y disfrutar de unos buenos mates.”
        </p>
      </section>
    </div>
  );
}
