import type { SVGProps } from "react"

type P = SVGProps<SVGSVGElement>
const base = { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", "aria-hidden": true } as const
const stroke = { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2 } as const

export const MateIcon = (p: P) => (
  <svg {...base} viewBox="0 0 32 32" {...p}>
    <path fill="currentColor" d="m23.31 3.133l-1.91-1.1a.255.255 0 0 0-.37.15l-.796 2.646l-.044-.026a.505.505 0 0 0-.51.87l.016.01l-1.512 2.619A8 8 0 0 0 16 8a7.97 7.97 0 0 0-5.292 2H6a1 1 0 1 0 0 2a2 2 0 0 1 .28.353c.22.358.22.647.22.647c0 .245-.09.52-.225.846q-.088.207-.194.444C5.637 15.288 5 16.72 5 19c0 6.5 5 11 11 11s11-4.5 11-11c0-2.28-.637-3.712-1.08-4.71q-.107-.237-.195-.444c-.135-.327-.225-.601-.225-.846c0 0 0-.113.054-.285a1.6 1.6 0 0 1 .199-.414q.095-.148.247-.301a1 1 0 1 0 0-2h-4.708a8 8 0 0 0-1.693-1.147l1.396-2.418l.015.008c.24.14.55.05.69-.18c.14-.24.06-.55-.18-.69l-.051-.03l1.891-2.01c.12-.13.09-.32-.05-.4M8.387 13.846h15.226c.084.327.197.603.277.793c.098.235.167.389.232.534c.082.18.156.346.271.632c.305.764.607 1.759.607 3.195c0 5.336-4.044 9-9 9s-9-3.664-9-9c0-1.436.302-2.431.607-3.195c.115-.286.19-.452.27-.632c.066-.145.136-.3.234-.534c.08-.19.192-.466.276-.793" />
  </svg>
)

export const LeafIcon = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" {...p}>
    <g {...stroke}><path d="M5 21c.5-4.5 2.5-8 7-10" /><path d="M9 18c6.218 0 10.5-3.288 11-12V4h-4.014c-9 0-11.986 4-12 9c0 1 0 3 2 5z" /></g>
  </svg>
)

export const ThermosIcon = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" {...p}>
    <g {...stroke} strokeWidth={1.5}>
      <path d="M8.75 2.75h4.5q.75 0 .87.74l.26 1.52q.12.74-.63.74h-5.5q-.75 0-.63-.74l.26-1.52q.12-.74.87-.74" />
      <rect width="8" height="12.5" x="7" y="8.75" rx="2.5" />
      <path d="M15 11h1.75a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5H15" />
    </g>
  </svg>
)

export const WhatsappIcon = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" {...p}>
    <g {...stroke}><path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></g>
  </svg>
)

export const InstagramIcon = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" {...p}>
    <g {...stroke}><path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" /><path d="M8.5 12a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0-7 0M17 7v.01" /></g>
  </svg>
)

export const CartIcon = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" {...p}>
    <g {...stroke}><path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m11 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0" /><path d="M17 17H6V3H4" /><path d="m6 5l14 1l-1 7H6" /></g>
  </svg>
)

export const PlusIcon = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" {...p}><path {...stroke} d="M12 5v14m-7-7h14" /></svg>
)

export const MinusIcon = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" {...p}><path {...stroke} d="M5 12h14" /></svg>
)

export const TrashIcon = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" {...p}>
    <path {...stroke} d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
  </svg>
)

export const MailIcon = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" {...p}>
    <g {...stroke}><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="m3 7l9 6l9-6" /></g>
  </svg>
)

export const MapPinIcon = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" {...p}>
    <g {...stroke}><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0" /><path d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0" /></g>
  </svg>
)

export const MenuIcon = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" {...p}><path {...stroke} d="M4 6h16M4 12h16M4 18h16" /></svg>
)
