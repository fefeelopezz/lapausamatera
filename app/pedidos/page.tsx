import type { Metadata } from "next";
import { CartView } from "./cart-view";

export const metadata: Metadata = { title: "Pedidos | La Pausa Matera" };

const STEPS = [
  { title: "Elegí tus productos", text: "Recorré el catálogo y sumá al carrito los mates, termos y bombillas que quieras." },
  { title: "Revisá tu carrito", text: "Ajustá cantidades acá abajo y chequeá el total de tu pedido." },
  { title: "Envialo por WhatsApp", text: "Tocá “Enviar pedido” y te llega un mensaje armado con todo lo que elegiste." },
  { title: "Aboná la seña", text: "Transferí el 50% del total y mandanos el comprobante por WhatsApp para confirmar." },
  { title: "Recibí y disfrutá", text: "Cuando te llega el pedido, abonás el 50% restante. ¡Y a cebar!" },
];

export default function PedidosPage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="flex flex-col gap-2">
        <h1 className="font-heading text-4xl font-bold tracking-tight">Pedidos</h1>
        <p className="text-muted-foreground">Así de simple es hacer tu pedido.</p>
      </header>

      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {STEPS.map((s, i) => (
          <li key={s.title} className="flex flex-col gap-2 rounded-2xl border border-border/70 bg-card/70 p-5 backdrop-blur-sm">
            <span className="grid size-8 place-items-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
              {i + 1}
            </span>
            <h2 className="font-medium">{s.title}</h2>
            <p className="text-sm text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ol>

      <div role="note" className="rounded-2xl border-l-4 border-primary bg-secondary px-5 py-4 text-secondary-foreground">
        <p className="font-medium">
          Para hacer el pedido se hace una seña del 50% del precio total del pedido y enviando el comprobante a WhatsApp,
          el otro 50% se abona cuando se recibe el pedido.
        </p>
      </div>

      <CartView />
    </div>
  );
}
