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

### Dashboard / CMS — fase activa

**Objetivo:** gestionar proyectos e imágenes desde `/admin` sin tocar código.

**Stack decidido:**
- **MongoDB Atlas** (free M0) — almacena los documentos de proyectos
- **Mongoose** — schema tipado + queries
- **NextAuth.js v5** con Credentials provider — protege `/admin` (usuario único: Pedro)
- **Cloudflare R2** — almacenamiento de imágenes (10 GB free, egress ilimitado)
- **Next.js Server Actions** — mutaciones CRUD sin API routes extra

#### Arquitectura objetivo

```
src/
  lib/
    mongodb.ts              ← singleton de conexión (evita múltiples conexiones en dev)
    models/
      Project.ts            ← Mongoose model (mapea PortfolioProject 1:1)
    r2.ts                   ← cliente R2 (@aws-sdk/client-s3 con endpoint Cloudflare)
    auth.ts                 ← config NextAuth (credentials provider)
  app/
    admin/
      layout.tsx            ← verifica sesión, redirige a /admin/login si no autenticado
      page.tsx              ← dashboard: lista proyectos con acciones edit/delete
      login/
        page.tsx            ← formulario email + password
      projects/
        new/page.tsx        ← formulario crear proyecto
        [id]/
          page.tsx          ← formulario editar proyecto
    api/
      auth/[...nextauth]/
        route.ts            ← handler de NextAuth
      upload/
        route.ts            ← recibe archivo → sube a R2 → devuelve URL pública
```

#### Plan paso a paso

**Fase 1 — MongoDB (30 min)**

- [ ] **1.1** Crear cluster M0 en [mongodb.com](https://mongodb.com) → copiar connection string
- [ ] **1.2** Instalar dependencias:
  ```bash
  npm i mongoose next-auth@beta
  ```
- [ ] **1.3** Agregar a `.env.local`:
  ```
  MONGODB_URI=mongodb+srv://...
  NEXTAUTH_SECRET=genera-con-openssl-rand-base64-32
  ADMIN_EMAIL=pdgutierrezcarrera@gmail.com
  ADMIN_PASSWORD=elige-password-seguro
  ```
- [ ] **1.4** Crear `src/lib/mongodb.ts` — singleton de conexión con cache para dev (evita el error de múltiples conexiones con hot reload)
- [ ] **1.5** Crear `src/lib/models/Project.ts` — Mongoose Schema basado en `PortfolioProject`:
  - Todos los campos bilingües como `{ en: String, es: String }`
  - `slug` generado automáticamente desde `title.en` (pre-save hook)
  - `order` (Number) para controlar posición en el grid
  - `image` y `gallery` como strings (URLs de R2)

**Fase 2 — Cloudflare R2 (30 min)**

- [ ] **2.1** Crear bucket en [Cloudflare R2 dashboard](https://dash.cloudflare.com) → habilitar acceso público
- [ ] **2.2** Generar API token con permisos `Object Read & Write` para el bucket
- [ ] **2.3** Agregar a `.env.local`:
  ```
  R2_ACCOUNT_ID=xxxx
  R2_ACCESS_KEY_ID=xxxx
  R2_SECRET_ACCESS_KEY=xxxx
  R2_BUCKET_NAME=portfolio-images
  R2_PUBLIC_URL=https://pub-xxxx.r2.dev   ← URL pública del bucket
  ```
- [ ] **2.4** Instalar SDK y crear helper:
  ```bash
  npm i @aws-sdk/client-s3 @aws-sdk/lib-storage
  ```
- [ ] **2.5** Crear `src/lib/r2.ts` — función `uploadToR2(file, filename)` que devuelve la URL pública
- [ ] **2.6** Crear `src/app/api/upload/route.ts` — recibe `multipart/form-data`, llama a `uploadToR2`, devuelve `{ url }`

**Fase 3 — Auth con NextAuth (20 min)**

- [ ] **3.1** Crear `src/lib/auth.ts` — config NextAuth con Credentials provider:
  - Compara `email` y `password` contra `ADMIN_EMAIL` y `ADMIN_PASSWORD` en env (sin DB de usuarios — solo un admin)
- [ ] **3.2** Crear `src/app/api/auth/[...nextauth]/route.ts`
- [ ] **3.3** Crear `src/app/admin/login/page.tsx` — form simple email/password con `signIn()`
- [ ] **3.4** Crear `src/app/admin/layout.tsx` — llama a `auth()`, redirige a `/admin/login` si no hay sesión

**Fase 4 — Dashboard admin (60 min)**

- [ ] **4.1** `src/app/admin/page.tsx` — lista todos los proyectos con botones Edit / Delete
  - Delete llama a Server Action que elimina de MongoDB y borra imagen de R2
- [ ] **4.2** Componente `ProjectForm.tsx` (compartido entre new y edit):
  - Campos: title (en/es), description (en/es), category, tags, client, year, role, liveUrl, repoUrl, order
  - Image upload: input file → POST a `/api/upload` → guarda URL en estado → preview
  - Content blocks: lista dinámica de bloques (heading/paragraph/list) con add/remove
  - Results: métricas (label en/es + value) + stack (array de strings)
- [ ] **4.3** `src/app/admin/projects/new/page.tsx` — usa `ProjectForm`, llama a Server Action `createProject`
- [ ] **4.4** `src/app/admin/projects/[id]/page.tsx` — carga proyecto, usa `ProjectForm`, llama a `updateProject`
- [ ] **4.5** Server Actions en `src/app/admin/actions.ts`:
  - `createProject(formData)` → inserta en MongoDB
  - `updateProject(id, formData)` → actualiza en MongoDB
  - `deleteProject(id)` → elimina de MongoDB + borra objeto de R2

**Fase 5 — Conectar portafolio al DB (45 min)**

- [ ] **5.1** Crear `src/lib/projects.ts` con funciones de lectura:
  - `getAllProjects()` — para el grid de home
  - `getProjectBySlug(slug)` — para `/projects/[slug]`
  - `getAllSlugs()` — para `generateStaticParams`
- [ ] **5.2** Convertir `PortfolioSection.tsx` a Server Component — reemplaza import de `portfolio.ts` por `getAllProjects()`
- [ ] **5.3** Actualizar `/projects/[slug]/page.tsx`:
  - `generateStaticParams` → `getAllSlugs()` desde MongoDB
  - Página → `getProjectBySlug(slug)` + `export const revalidate = 60`
- [ ] **5.4** Adaptar `PortfolioCard`, `ProjectHero`, `ProjectContent`, `ProjectResults` a los tipos de Mongoose

**Fase 6 — Migrar datos y deploy (30 min)**

- [ ] **6.1** Entrar al dashboard en `/admin` y crear los 3 proyectos (copiar desde `portfolio.ts`)
- [ ] **6.2** Subir imágenes de proyectos desde el formulario de admin
- [ ] **6.3** Verificar que el grid y las páginas de detalle funcionan correctamente
- [ ] **6.4** Agregar variables de entorno en Vercel
- [ ] **6.5** Correr `npm run build` — verificar que ISR funciona
- [ ] **6.6** Eliminar `src/data/portfolio.ts` (o marcarlo como legacy)

#### Convenciones post-migración

- `getAllProjects()` y `getProjectBySlug()` son llamadas de servidor — nunca en Client Components
- Campos bilingües se resuelven en el componente con `useLanguage()` — MongoDB devuelve `{ en, es }` y el componente elige
- Imágenes siempre via URL pública de R2 — nunca rutas `/public/` para assets de proyectos
- El admin NO tiene estilos elaborados — funcional y simple está bien
- `revalidate = 60` en rutas que lean de MongoDB

### Baja prioridad / ideas futuras

- [ ] **Más proyectos** — el schema soporta `liveUrl`, `repoUrl`, `gallery`, bloques de contenido ricos
- [ ] **Página /projects** — listado de todos los proyectos con filtro por categoría (software / marketing / design)
- [ ] **Dark mode toggle manual** — actualmente es automático via `prefers-color-scheme`; agregar toggle si se desea control manual
- [ ] **Locale en URL** — actualmente el idioma vive en React state; si se quiere `/en/` y `/es/` migrar a `next-intl`
