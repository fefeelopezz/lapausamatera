export type Category = "mates" | "termos" | "bombillas"

export type Product = {
  id: string
  name: string
  category: Category
  image: string
  price: number // ARS
  description: string
}

export const CATEGORIES: { value: Category; label: string }[] = [
  { value: "mates", label: "Mates" },
  { value: "termos", label: "Termos" },
  { value: "bombillas", label: "Bombillas" },
]

// Draft descriptions: review details (materials, sizes) before publishing.
export const PRODUCTS: Product[] = [
  { id: "camionero", name: "Camionero", category: "mates", image: "/mates/camioneroClasico.webp", price: 26000,
    description: "El clásico de calabaza con boca ancha y virola de metal. Cómodo de agarrar y de cebar, ideal para el mate de todos los días." },
  { id: "camionero-algarrobo", name: "Camionero Algarrobo", category: "mates", image: "/mates/camioneroAlgarrobo.webp", price: 18000,
    description: "Camionero tallado en madera de algarrobo. Aporta un sabor suave y particular a la yerba, y su veta natural hace que cada pieza sea única." },
  { id: "camionero-base-alpaca", name: "Camionero Base Alpaca", category: "mates", image: "/mates/camioneroAlpaca.webp", price: 32000,
    description: "Camionero de calabaza con base y virola de alpaca. Se sostiene firme sobre la mesa y suma un detalle elegante al ritual." },
  { id: "camionero-croco", name: "Camionero Repujado", category: "mates", image: "/mates/camioneroCroco.webp", price: 28500,
    description: "Camionero de calabaza forrado en cuero repujado a mano. Textura cálida, terminación prolija y mucha presencia." },
  { id: "camionero-deluxe", name: "Camionero Deluxe", category: "mates", image: "/mates/camioneroDeluxe.webp", price: 24000,
    description: "Nuestra versión más cuidada del camionero, con terminaciones premium. Un mate para lucirse o para regalar." },
  { id: "imperial", name: "Imperial", category: "mates", image: "/mates/imperialClasico.webp", price: 29000,
    description: "Mate imperial de calabaza, de boca ancha y forma redondeada. Pura tradición para los que disfrutan una buena ronda." },
  { id: "imperial-algarrobo", name: "Imperial Algarrobo", category: "mates", image: "/mates/imperialAlgarrobo.webp", price: 20000,
    description: "Imperial en madera de algarrobo, con la forma clásica y el sabor característico de la madera." },
  { id: "imperial-base-alpaca", name: "Imperial Base Alpaca", category: "mates", image: "/mates/imperialAlpaca.webp", price: 35000,
    description: "Imperial de calabaza con base y virola de alpaca labrada. Un clásico robusto con detalles de platería." },
  { id: "imperial-croco", name: "Imperial Croco", category: "mates", image: "/mates/imperialCroco.webp", price: 33000,
    description: "Imperial de calabaza forrado en cuero con textura croco y virola labrada. Distinguido y resistente." },
  { id: "imperial-deluxe", name: "Imperial Deluxe", category: "mates", image: "/mates/imperialDeluxe.webp", price: 27000,
    description: "Imperial con terminaciones de lujo para quienes buscan una pieza especial en la mesa." },
  { id: "torpedo", name: "Torpedo", category: "mates", image: "/mates/torpedoClasico.webp", price: 28000,
    description: "Mate torpedo de calabaza, de forma alargada y boca angosta. Ideal para cebar de a poco y disfrutar cada mate." },
  { id: "torpedo-base-alpaca", name: "Torpedo Base Alpaca", category: "mates", image: "/mates/torpedoAlpaca.webp", price: 39000,
    description: "Torpedo de calabaza con base de alpaca. Su forma estilizada y la base firme lo hacen práctico y elegante." },
  { id: "torpedo-croco", name: "Torpedo Croco", category: "mates", image: "/mates/torpedoCroco.webp", price: 35000,
    description: "Torpedo forrado en cuero con textura croco. Cómodo de sostener y con una estética moderna." },
  { id: "termo-media-negro", name: "Termo Media Manija Negro", category: "termos", image: "/termos/termoMediaNegro.webp", price: 20000,
    description: "Termo de acero con manija, en color negro. Mantiene el agua a temperatura para que la ronda no se corte." },
  { id: "termo-media-plateado", name: "Termo Media Manija Plateado", category: "termos", image: "/termos/termoMediaPlateado.webp", price: 20000,
    description: "Termo de acero con manija, en terminación plateada. Práctico para llevar a donde vayas." },
  { id: "termo-system-1l", name: "Termo System 1L", category: "termos", image: "/termos/termoSystem1L.webp", price: 32000,
    description: "Termo de 1 litro con pico cebador, pensado para cebar sin derramar y mantener el agua caliente por horas." },
  { id: "bombilla-clasica", name: "Bombilla Clásica", category: "bombillas", image: "/bombillas/bombillaClasica.webp", price: 7000,
    description: "Bombilla clásica de metal, liviana y fácil de limpiar. La compañera de todos los días." },
  { id: "bombillon-pico-loro", name: "Bombillón Premium Pico de Loro", category: "bombillas", image: "/bombillas/bombillonPremiumPicoLoro.webp", price: 25500,
    description: "Bombillón premium con pico de loro, que se apoya cómodo en la boca. Filtro amplio para una cebada sin yerba." },
  { id: "bombillon-pico-rey", name: "Bombillón Premium Pico de Rey", category: "bombillas", image: "/bombillas/bombillonPremiumPicoRey.webp", price: 25500,
    description: "Bombillón premium con pico de rey, robusto y con detalles labrados. Un toque distinguido para tu mate." },
]

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(n)
