import type { Metadata } from "next";
import { Geist, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";
import { SiteHeader } from "@/components/site-header";
import { LeafIcon, MateIcon, ThermosIcon } from "@/components/icons";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const heading = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Pausa Matera | Mates, termos y bombillas",
  description: "Mates, termos y bombillas para hacer de cada mate una pausa. Pedidos por WhatsApp.",
  icons: { icon: "/favicon.png" },
};

// Decorative mate motifs scattered over the gradient background.
const DECOR = [
  { Icon: MateIcon, className: "top-24 left-[6%] size-20 -rotate-12" },
  { Icon: LeafIcon, className: "top-[38%] right-[5%] size-16 rotate-45" },
  { Icon: ThermosIcon, className: "bottom-[18%] left-[4%] size-20 rotate-6" },
  { Icon: MateIcon, className: "bottom-10 right-[10%] size-24 rotate-12" },
  { Icon: LeafIcon, className: "top-[60%] left-[45%] size-12 -rotate-45" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${geistSans.variable} ${heading.variable} h-full antialiased`}>
      <body className="relative flex min-h-full flex-col bg-[linear-gradient(160deg,var(--cream)_0%,var(--cream)_35%,var(--sage-soft)_100%)] bg-fixed">
        <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden text-[var(--sage)] opacity-[0.12]">
          {DECOR.map(({ Icon, className }, i) => (
            <Icon key={i} className={`absolute ${className}`} />
          ))}
        </div>
        <CartProvider>
          <SiteHeader />
          <main className="relative z-10 mx-auto w-full max-w-6xl flex-1 px-4 py-10 md:py-16">{children}</main>
          <footer className="relative z-10 border-t border-border/60 py-6 text-center text-sm text-muted-foreground">
            © La Pausa Matera
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
