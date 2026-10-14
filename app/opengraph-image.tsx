import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

export const alt = "La Pausa Matera — Mates artesanales, termos y bombillas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CREAM = "#f3eee3";
const SAGE = "#7f9672";
const SAGE_DARK = "#5f7754";
const INK = "#1c1c1a";

const pub = (p: string) => join(process.cwd(), "public", p);

// ImageResponse can't decode .webp, so photos are converted to PNG data URIs.
async function photo(p: string) {
  const png = await sharp(pub(p)).resize(300, 380, { fit: "cover" }).png().toBuffer();
  return `data:image/png;base64,${png.toString("base64")}`;
}

export default async function Image() {
  const logo = `data:image/png;base64,${(await readFile(pub("logoPausaMatera.png"))).toString("base64")}`;
  const photos = await Promise.all(
    ["mates/imperialCroco.webp", "mates/camioneroAlgarrobo.webp", "mates/torpedoClasico.webp"].map(photo)
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: `linear-gradient(135deg, ${CREAM} 0%, ${CREAM} 55%, #d9e0cf 100%)`,
          padding: 28,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            border: `6px solid ${SAGE}`,
            borderRadius: 36,
            padding: "36px 48px",
            gap: 32,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", width: 540, gap: 14 }}>
            <img src={logo} width={150} height={150} alt="" style={{ marginLeft: -12 }} />
            <div style={{ display: "flex", flexDirection: "column", fontSize: 60, fontWeight: 700, color: INK, lineHeight: 1.05, letterSpacing: -1.5 }}>
              <span>Hacé de cada mate</span>
              <span style={{ color: SAGE_DARK }}>una pausa.</span>
            </div>
            <div style={{ display: "flex", fontSize: 26, color: "#5d5b52" }}>Mates artesanales · Termos · Bombillas</div>
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                marginTop: 6,
                background: SAGE_DARK,
                color: "#f8f5ee",
                fontSize: 24,
                padding: "12px 26px",
                borderRadius: 999,
              }}
            >
              Pedidos por WhatsApp
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16, marginLeft: "auto" }}>
            {photos.map((src, i) => (
              <img
                key={i}
                src={src}
                width={150}
                height={i === 1 ? 250 : 210}
                alt=""
                style={{ objectFit: "cover", borderRadius: 24, border: "5px solid white", boxShadow: "0 12px 30px rgba(0,0,0,0.18)" }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
