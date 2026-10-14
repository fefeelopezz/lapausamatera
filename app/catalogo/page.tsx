import type { Metadata } from "next";
import { Suspense } from "react";
import { Catalog } from "./catalog";

export const metadata: Metadata = { title: "Catálogo | La Pausa Matera" };

async function CatalogFromParams({ searchParams }: Pick<PageProps<"/catalogo">, "searchParams">) {
  const { cat } = await searchParams;
  return <Catalog initial={typeof cat === "string" ? cat : "todos"} />;
}

export default function CatalogoPage({ searchParams }: PageProps<"/catalogo">) {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="font-heading text-4xl font-bold tracking-tight">Catálogo</h1>
        <p className="text-muted-foreground">Elegí tus favoritos y sumalos al carrito. El pedido se cierra por WhatsApp.</p>
      </header>
      <Suspense fallback={<p className="text-muted-foreground">Cargando productos…</p>}>
        <CatalogFromParams searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
