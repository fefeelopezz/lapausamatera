import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { InstagramIcon, LeafIcon, MateIcon, ThermosIcon, WhatsappIcon } from "@/components/icons";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = { title: "Contacto | La Pausa Matera" };

// shortcut: Instagram handle is a placeholder, replace with the real account.
const SOCIALS = [
  { label: "WhatsApp", handle: "+54 9 11 5106-3376", href: whatsappUrl("¡Hola La Pausa Matera! Tengo una consulta 🧉"), Icon: WhatsappIcon },
  { label: "Instagram", handle: "@lapausamatera", href: "https://instagram.com/lapausamatera", Icon: InstagramIcon },
];

const CURADOS = [
  {
    title: "Cómo curar tu mate de calabaza",
    Icon: MateIcon,
    steps: [
      "Llená el mate con yerba usada húmeda.",
      "Agregá agua tibia, sin llegar al borde.",
      "Dejá reposar entre 24 y 48 horas.",
      "Retirá la yerba y raspá suavemente el interior con una cuchara para quitar los restos sueltos.",
      "Repetí el proceso si es necesario.",
      "Vaciá y dejá secar bien, en un lugar ventilado.",
    ],
    outro: "Evitá el agua hirviendo y no lo guardes húmedo.",
  },
  {
    title: "Cómo curar tu mate de algarrobo",
    Icon: LeafIcon,
    steps: [
      "Enjuagá el interior con agua tibia.",
      "Colocá yerba usada húmeda hasta llenar el mate.",
      "Agregá un poquito de agua tibia, sin llenar de más.",
      "Dejá reposar entre 24 y 48 horas.",
      "Retirá la yerba y repetí el proceso si es necesario.",
      "Vaciá y dejá secar bien, sin taparlo.",
    ],
    outro: "Evitá el agua hirviendo y no lo dejes con agua estancada.",
  },
];

const FAQ = [
  { q: "¿Hacen envíos?", a: "Sí. Coordinamos el envío o la entrega por WhatsApp cuando confirmás tu pedido." },
  { q: "¿Cómo pago?", a: "Seña del 50% para confirmar enviando el comprobante, y el 50% restante al recibir." },
  { q: "¿Puedo regalar?", a: "¡Claro! Avisanos y lo preparamos listo para regalar." },
];

export default function ContactoPage() {
  return (
    <div className="flex flex-col gap-16">
      <header className="flex flex-col gap-2">
        <h1 className="font-heading text-4xl font-bold tracking-tight">Contacto</h1>
        <p className="text-muted-foreground">¿Dudas, consultas o ganas de charlar de mate? Escribinos por donde te quede cómodo.</p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        {SOCIALS.map(({ label, handle, href, Icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group">
            <Card className="h-full transition-all group-hover:-translate-y-1 group-hover:shadow-md">
              <CardContent className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="size-6" />
                </span>
                <div className="min-w-0">
                  <p className="font-medium">{label}</p>
                  <p className="truncate text-sm text-muted-foreground">{handle}</p>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {CURADOS.map(({ title, Icon, steps, outro }) => (
          <Card key={title}>
            <CardContent className="flex h-full flex-col gap-4">
              <h2 className="flex items-center gap-2 font-heading text-2xl font-semibold">
                <Icon className="size-7 shrink-0 text-primary" /> {title}
              </h2>
              <ol className="flex flex-col gap-3">
                {steps.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <p className="mt-auto rounded-xl bg-secondary/60 px-4 py-3 text-sm text-secondary-foreground">
                <span className="font-semibold">¡Listo para disfrutar tus mates!</span> {outro}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-semibold">Preguntas frecuentes</h2>
        <div className="flex flex-col gap-2">
          {FAQ.map(({ q, a }) => (
            <details key={q} className="group rounded-xl border border-border/70 bg-card/70 px-4 py-3 open:bg-secondary/50">
              <summary className="cursor-pointer list-none font-medium">
                <span className="mr-2 inline-block transition-transform group-open:rotate-90">›</span>
                {q}
              </summary>
              <p className="mt-2 pl-4 text-sm text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center gap-3 rounded-3xl border border-dashed border-primary/40 px-6 py-10 text-center">
        <ThermosIcon className="size-10 text-primary" />
        <p className="font-heading text-2xl font-semibold">Tip del cebador</p>
        <p className="max-w-xl text-muted-foreground">
          El agua ideal está entre 70 y 80 °C: justo cuando la pava empieza a “cantar”. Más caliente, se quema la yerba y se pone amargo.
        </p>
      </section>
    </div>
  );
}
