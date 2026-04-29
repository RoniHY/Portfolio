# Portfolio — Pedro Gutierrez

## Stack

- **Framework:** Next.js 14 App Router (TypeScript)
- **Styling:** CSS Modules + CSS custom properties (`src/styles/variables.css`)
- **Animations:** framer-motion (microinteracciones) + GSAP/ScrollTrigger (scroll reveals, parallax, page transitions)
- **i18n:** custom context (`src/contexts/LanguageContext.tsx`) — `en` | `es`, sin routing por locale
- **Fuentes:** Inter (body) + Lora (heading) via `next/font`

## Arquitectura

```
src/app/
  layout.tsx                  ← RootLayout: LanguageProvider + GsapProvider aquí
  page.tsx                    ← Home single-page (secciones por anchor)
  projects/[slug]/page.tsx    ← Detalle de proyecto (SSG via generateStaticParams)
  services/page.tsx           ← Página dedicada de servicios
  api/contact/route.ts        ← POST handler del form de contacto

src/components/
  Sidebar/                    ← Nav fija, route-aware (/#anchor fuera de home)
  Hero/                       ← Sección hero con framer-motion
  About/
  Experience/
  Portfolio/                  ← Grid de cards que linkean a /projects/[slug]
  Services/
    ServicesSection.tsx       ← Resumen 3 cards para la home
    ServicesPage.tsx          ← Detalle completo para /services
  ProjectDetail/
    ProjectHero.tsx           ← Hero con parallax GSAP
    ProjectContent.tsx        ← Bloques de contenido (heading/paragraph/list/quote)
    ProjectResults.tsx        ← Métricas en grid + stack
    ProjectNav.tsx            ← Prev/next entre proyectos
  Contact/
    ContactSection.tsx        ← Form + links directos
  Resume/
  shared/
    GsapProvider.tsx          ← Registra ScrollTrigger una vez
    SectionReveal.tsx         ← Wrapper reusable: fade-up al entrar viewport
    PageTransition.tsx        ← Fade-in al montar ruta nueva

src/data/
  portfolio.ts                ← PortfolioProject[] con schema extendido (content, results, stack, etc.)
  services.ts                 ← Service[] para las 3 disciplinas
  experience.ts               ← Datos de experiencia laboral

src/i18n/translations.ts      ← Namespaces: nav, hero, about, experience, portfolio,
                                 resume, services, projectDetail, contact
```

## Convenciones importantes

- **GSAP y framer-motion NO animan los mismos elementos** — GSAP para scroll/reveals/parallax, framer para hover/tap/layoutId.
- `prefers-reduced-motion` cubierto via `gsap.matchMedia` en todos los efectos GSAP.
- Datos de proyectos en `src/data/portfolio.ts` — agregar nuevos proyectos ahí directamente.
- El `Sidebar` detecta `usePathname()`: en home usa `#anchor`, fuera de home usa `/#anchor`.
- `LanguageProvider` vive en `layout.tsx` para cubrir todas las rutas.
- Orden de secciones en page.tsx y Sidebar **deben coincidir**: `home → about → services → experience → portfolio → resume → contact`.
- `useActiveSection` usa `threshold: 0.3` + listener de scroll para activar `contact` cuando el usuario está a ≤80px del fondo (el IntersectionObserver no alcanza el 30% en la última sección sin este hack).

## Contacto

- Email: `pdgutierrezcarrera@gmail.com`
- Calendly/Google Calendar: `https://calendar.app.google/AMaCyyyZrrQw9Gu69`
- LinkedIn: `https://www.linkedin.com/in/pedro-daniel-gutierrez-carrera-7ab250254/`

---

## Pendientes de implementar

### Alta prioridad

- [ ] **Form de contacto — proveedor de email**
  - El route `/api/contact/route.ts` existe pero solo hace `console.log`
  - Opción recomendada: **Formspree** (sin API key, gratis 50/mes) — cambiar el `fetch('/api/contact', ...)` en `ContactSection.tsx` por `fetch('https://formspree.io/f/YOUR_ID', ...)`
  - Alternativas: Resend (requiere API key), EmailJS (cliente puro)

### Media prioridad

- [ ] **Build de producción** — correr `npm run build` para verificar que todo compila sin errores de TypeScript antes del siguiente deploy
- [x] **Navbar corregida** — orden de links alineado con el orden real de secciones en página; `services` y `contact` agregados al array de `useActiveSection`; `contact` activa via scroll listener al llegar al fondo
- [ ] **Imágenes de proyectos** — los 3 proyectos existentes usan gradiente placeholder; agregar screenshots/mockups reales en `public/projects/` y referenciarlos en `src/data/portfolio.ts` (campo `image`)
- [ ] **Galería de proyecto** — `ProjectGallery` component no fue implementado; el campo `gallery: string[]` está en el schema listo para usarse
- [ ] **SEO / OG images** — `generateMetadata` en `/projects/[slug]` ya existe; agregar `openGraph.images` cuando haya imágenes reales

### Dashboard / CMS (próxima fase grande)

- [ ] **Gestión dinámica de proyectos e imágenes desde un dashboard**
  - Actualmente los proyectos están hardcodeados en `src/data/portfolio.ts` — cualquier cambio requiere editar código
  - **Opción recomendada: Sanity Studio**
    - Schema de `project` en Sanity mapea 1:1 con `PortfolioProject` (ya tiene el schema listo en `portfolio.ts`)
    - `ServicesSection`, `PortfolioSection` y `/projects/[slug]` pasan de leer el array local a hacer fetch al Sanity client
    - Imágenes se suben directo desde el dashboard y Sanity devuelve URLs optimizadas (CDN propio)
    - `generateStaticParams` pasa a ser dinámico con revalidación ISR (`revalidate: 60`)
    - Studio embebible en `/studio` dentro del mismo repo Next.js
  - **Alternativas:** Contentful (más enterprise), Payload CMS (self-hosted, full control), Notion API (muy simple pero limitado)
  - **Pasos cuando se implemente:**
    1. `npm i @sanity/client @sanity/image-url next-sanity`
    2. Crear proyecto en sanity.io, copiar `projectId` y `dataset`
    3. Definir schema en `sanity/schemas/project.ts` basado en `PortfolioProject`
    4. Crear `src/lib/sanity.ts` con el cliente y queries GROQ
    5. Reemplazar imports de `src/data/portfolio.ts` en `PortfolioSection`, `PortfolioCard`, y `/projects/[slug]/page.tsx`
    6. Agregar `NEXT_PUBLIC_SANITY_PROJECT_ID` y `NEXT_PUBLIC_SANITY_DATASET` a `.env.local`

### Baja prioridad / ideas futuras

- [ ] **Más proyectos** — el schema soporta `liveUrl`, `repoUrl`, `gallery`, bloques de contenido ricos
- [ ] **Página /projects** — listado de todos los proyectos con filtro por categoría (software / marketing / design)
- [ ] **Dark mode toggle manual** — actualmente es automático via `prefers-color-scheme`; agregar toggle si se desea control manual
- [ ] **Locale en URL** — actualmente el idioma vive en React state; si se quiere `/en/` y `/es/` migrar a `next-intl`
