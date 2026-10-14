import { formatPrice, type Product } from "@/lib/products"

const PHONE = "5491151063376"

export function whatsappUrl(text = "") {
  return `https://api.whatsapp.com/send/?phone=${PHONE}&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`
}

export function orderMessage(lines: (Product & { qty: number })[], total: number) {
  const items = lines.map((l) => `• ${l.qty} x ${l.name} — ${formatPrice(l.qty * l.price)}`).join("\n")
  return [
    "¡Hola! Quiero hacer este pedido:",
    "",
    items,
    "",
    `Total: ${formatPrice(total)}`,
    `Seña (50%): ${formatPrice(Math.ceil(total / 2))}`,
  ].join("\n")
}
