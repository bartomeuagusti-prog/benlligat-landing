# Benlligat — Landing (marketing)

Landing pública B2B per a hotelers: passaport digital i economia circular dels matalassos.
UI en **català**, estètica **forest green / fulla** (replicant el preview de referència).

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)

## Requisits

Node.js 20+ i npm.

## Instal·lació i preview

```bash
cd /workspace/benlligat/landing
npm install
npm run dev
```

- Local: http://localhost:5173/
- Network (box): http://172.30.0.2:5173/ (si `host: true`)

### Build

```bash
npm run build
npm run preview   # http://localhost:4173
```

## Sign up (Registra’t)

- **Registra’t** (header ghost + hero primary) i **Vols provar?** obren el mateix modal.
- Camps: hotel, contacte, email, contrasenya (mock).
- Sense backend: després d’enviar es mostra un estat d’èxit local. Cap dada no surt del navegador.
- **Demanar demo** també obre el mateix modal (demo mock).

## Seccions

1. Header sticky (logo fulla + nav + Registra’t / Vols provar?)
2. Hero + glow sage + stats
3. Experiència (01–05 + visual SVG del matalàs)
4. Passaport digital (blockchain + petjada)
5. Ecosistema (fons verd fosc)
6. Preus freemium
7. Footer

Sense banner “Wake up servers”. Respecta `prefers-reduced-motion`.
