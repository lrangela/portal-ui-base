# 🚀 Portal Tech Company — Design System Base

> **Base de diseño y arquitectura de alto rendimiento** para portales y sitios corporativos.
> Construida sobre la potente combinación de **Astro + Vue 3**, estilizada con **Tailwind CSS**, animada con **GSAP/Motion**, y documentada de principio a fin en **Storybook**.

[![Deploy Storybook](https://github.com/lrangela/portal-ui-base/actions/workflows/deploy-storybook.yml/badge.svg)](https://lrangela.github.io/portal-ui-base/)

---

## 🎯 ¿Por qué este Stack Tecnológico?

**Astro** te da una base inmejorable para sitios de empresa con requerimientos de rendimiento alto y páginas mayormente estáticas, garantizando tiempos de carga ultrarrápidos (Zero-JS por defecto). Pero al mismo tiempo, te permite **hidratar e incluir componentes interactivos de Vue** exactamente donde hagan falta, utilizando las "Islas de Arquitectura". 

Además, Astro tiene soporte oficial para **transiciones de vista (View Transitions)**, lo que proporciona una sensación de SPA (Single Page Application) sin sacrificar el SEO ni la velocidad inicial. 

Por otro lado, **Storybook** sirve como la fuente de la verdad para que el equipo de diseño y desarrollo pueda visualizar en tiempo real los componentes, sus estados, colores y variantes, facilitando la construcción del portal de forma aislada mientras la estructura estática todavía se está armando.

---

## 🛠️ Tecnologías y Librerías (Stack)

A continuación, se detalla exhaustivamente cada pieza fundamental del proyecto, cómo configurarla, editarla y ejemplos de uso práctico:

### 1. Astro 🚀
Framework web para construir sitios más rápidos, focalizado en el contenido estático por defecto.
- **Documentación:** [https://docs.astro.build/](https://docs.astro.build/)
- **Propósito:** Enrutamiento, renderizado estático/híbrido y control orquestal de las vistas.
- **Versión en `package.json`:** `"astro": "^6.x"`
- **Ejemplo de Uso (`src/pages/index.astro`):**
  Astro permite encapsular componentes e inicializar las directivas de cliente (`client:load`, `client:visible`) para dictar cuándo un componente Vue cobra vida. También soporta `<ViewTransitions />`.
  
  ```astro
  ---
  import BaseSection from '../components/atoms/BaseSection.astro';
  import HeroSection from '../components/sections/HeroSection.vue';
  import { ViewTransitions } from 'astro:transitions';
  ---
  <html lang="es">
    <head>
      <title>Portal Corporativo</title>
      <!-- Transiciones fluidas nativas entre rutas -->
      <ViewTransitions />
    </head>
    <body>
      <BaseSection>
        <!-- Componente Vue interactivo cargado al momento en el cliente -->
        <HeroSection client:load />
      </BaseSection>
    </body>
  </html>
  ```

### 2. Vue 3 (Composition API) 💚
Framework progresivo de JavaScript usado para crear interfaces de usuario robustas.
- **Documentación:** [https://vuejs.org/](https://vuejs.org/)
- **Propósito:** Componentes de interfaz interactivos (botones, formularios, modales, etc).
- **Versión en `package.json`:** `"vue": "^3.x"`, `"@astrojs/vue": "^6.x"`
- **Ejemplo de Uso (`src/components/atoms/BaseButton.vue`):**
  Aprovechando `<script setup>` logramos un código ágil y fuertemente tipado mediante TypeScript y las APIs nativas de Composition.
  
  ```vue
  <template>
    <button :class="['base-button', variantClass]" @click="handleClick">
      <slot />
    </button>
  </template>

  <script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps<{
    variant?: 'primary' | 'secondary' | 'outline'
  }>();

  const emit = defineEmits(['click']);

  const variantClass = computed(() => `btn-${props.variant || 'primary'}`);
  const handleClick = () => emit('click');
  </script>
  ```

### 3. Storybook 📖
Entorno de desarrollo de UI para probar y documentar componentes de forma desasociada del proyecto principal.
- **Documentación:** [https://storybook.js.org/](https://storybook.js.org/)
- **Propósito:** Catálogo interactivo de UI, pruebas visuales (mock de vistas), y documentación de variantes.
- **Versión en `package.json`:** `"storybook": "^10.x"`, `"@storybook/vue3-vite": "^10.x"`
- **Ejemplo de Uso (`BaseButton.stories.ts`):**
  Esquema para que los diseñadores/frontenders validen comportamientos. En el caso de portal tech, un componente se aisla por competo interactuando con los *Design Tokens* base.
  
  ```typescript
  import type { Meta, StoryObj } from '@storybook/vue3';
  import BaseButton from './BaseButton.vue';

  const meta = {
    title: 'Atoms/BaseButton',
    component: BaseButton,
    tags: ['autodocs'],
    // Controles en la UI de storybook para probar variantes
    argTypes: {
      variant: { control: 'select', options: ['primary', 'secondary'] },
    },
  } satisfies Meta<typeof BaseButton>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Primary: Story = {
    args: {
      variant: 'primary',
      default: 'Contactar de inmeadiato',
    },
  };
  ```

### 4. Tailwind CSS v4 🎨
Framework CSS Utility-first optimizado para crear diseños bajo demanda directamente desde la vista.
- **Documentación:** [https://tailwindcss.com/](https://tailwindcss.com/)
- **Propósito:** Estilización rápida y declarativa sin abandonar tus archivos (`.astro`, `.vue`).
- **Versión en `package.json`:** `"tailwindcss": "^4.2.x"`, `"@tailwindcss/vite": "^4.2.x"`
- **Ejemplo de Uso:**
  Emparejamos Tailwind con nuestros tokens globales incrustados y variables para mayor cohesión en nuestros layouts corporativos.
  
  ```vue
  <template>
    <div class="flex flex-col items-center justify-center p-8 bg-surface rounded-xl shadow-card hover:-translate-y-1 transition-transform">
      <h2 class="text-2xl font-bold text-text mb-4">Título Adaptativo</h2>
      <p class="text-text-muted">Las clases base como `text-text-muted` provienen de nuestras custom properties centralizadas.</p>
    </div>
  </template>
  ```

### 5. Lucide (Icons) 🖼️
Librería Open Source moderna de SVG Icons con un trazado consistente.
- **Documentación:** [https://lucide.dev/](https://lucide.dev/)
- **Propósito:** Proveer iconografía ligera y con tamaños unificados.
- **Versión en `package.json`:** `"lucide-vue-next": "^1.x"`
- **Ejemplo de Uso (`src/components/atoms/BaseIcon.vue`):**
  Se inyectan íconos directamente en Vue sin descargas locales estáticas pesadas, además permiten estilizado nativo con Tailwind.
  
  ```vue
  <template>
    <div class="flex items-center space-x-2">
      <!-- Invocación de ícono "Mail" destilado y redimensionado -->
      <Mail :size="24" :stroke-width="1.8" class="text-primary hover:text-accent transition-colors" />
      <span class="font-medium">Correo Electrónico</span>
    </div>
  </template>

  <script setup lang="ts">
  import { Mail } from 'lucide-vue-next';
  </script>
  ```

### 6. GSAP (GreenSock Animation Platform) / Motion 🎬
Estándar web incuestionable para la animación orquestada y de alto rendimiento.
- **Documentación:** [https://gsap.com/docs/v3/](https://gsap.com/docs/v3/)
- **Propósito:** Efectos visuales asombrosos, paralaje, secuencias lógicas elaboradas, y ScrollTriggers (ejecución atada a cuánto avanzas en la web).
- **Versión en `package.json`:** `"gsap": "^3.x"`
- **Ejemplo de Uso (`HeroSection.vue`):**
  La inyección en Vue se hace tras montar elementos en el DOM para evitar cruces reactivos tempranos.
  
  ```vue
  <template>
    <!-- Referenciamos el contenedor madre para manipular a los hijos -->
    <section ref="heroContainerRef" class="py-12 bg-background flex justify-center overflow-hidden">
      <h1 class="hero-title opacity-0 translate-y-10">Bievenido a tu Empresa</h1>
    </section>
  </template>

  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import gsap from 'gsap';

  const heroContainerRef = ref<HTMLElement | null>(null);

  onMounted(() => {
    // Animación de entrada fluida y profesional desde abajo
    if (heroContainerRef.value) {
      gsap.to(
        heroContainerRef.value.querySelectorAll('.hero-title'),
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', stagger: 0.25 }
      );
    }
  });
  </script>
  ```

---

## 🏗️ Arquitectura y Jerarquía

Para mantener la calidad y predictibilidad del software se implementó **Atomic Design**:

```text
/src
├── components/          # Componentes .vue (.astro en casos excepcionales de base pura)
│   ├── atoms/           # Unidades estructurales. Ej: Inputs, Botones (BaseButton, BaseIcon)
│   ├── molecules/       # Conjuntos de átomos. Ej: Tarjetas completas, Grupos logísticos.
│   ├── organisms/       # Macros estructuradas. Ej: Navbars con links (SiteHeader)
│   └── sections/        # Patrones completos de vistas. Ej: `HeroSection.vue`, `ContactSection.vue`
├── styles/              
│   ├── tokens.css       # 🌟 El origen y único lugar donde alterar Colores, Fuentes, Tamaños!
│   ├── global.css       # Modificaciones de CSS nativas y utilidades extendidas.
│   └── base.css         # Resetear márgenes y estandarizar componentes.
├── pages/               # Páginas generadas con Astro que consumen nuestros sections de Vue.
```

Para **editar la apariencia** de tu portal tech o corporativo, tu fuente de la verdad es *únicamente* revisar `tokens.css`. Si quieres pasarlo del color Azul-Verdoso tech a un Naranja financiero, solo edita las propiedades root:

```css
:root {
  /* COLORS */
  --color-primary: #FF7043; /* Cambiado a Naranja vibrante para el nuevo cliente final */
  --color-secondary: #2C3E50;
  
  /* BORDES */
  --radius-sm: 8px; /* Haz los bordes menos redondeados */
}
```

---

## 🛜 Validación y CI/CD: Despliegue Automatizado a GitHub Pages

El proyecto incluye, validado exhaustivamente, el `.github/workflows/deploy-storybook.yml`.

### Verificación de Despliegue 
Este pipeline de **GitHub Actions** consta de tres pasos primordiales asegurando los estándares para producción de la empresa:
1. **Paso 1: Checkeo & Lint** - Levanta un contendor `ubuntu-latest`, instala tu Node v22 (`npm ci`) y hace un test robusto `npx astro check` para certificar los tipos Typescript de la plataforma.
2. **Paso 2: Build Cauteloso** - Emplea una variante asíncrona de asignación de RAM máxima: `NODE_OPTIONS: "--max_old_space_size=4096"` obligando a V8 de node a aguantar compiliaciones que requieran más tracción. Posteriormente inyecta el `storybook-static` al artefacto de Github Pages.
3. **Paso 3: Entrega Continua** - Utiliza concurrencia configurada (`group: pages / cancel-in-progress: true`), lo que significa que el push más nuevo pisará al viejo logrando siempre eficiencia en despliegues. Adicional se emplean las APIs nativas `actions/upload-pages-artifact` y `actions/deploy-pages@v4`.

🔥 **Activación Manual de Pages:** Una vez lanzado al repositorio central, entra a `Settings -> Pages`, establece Source en **"GitHub Actions"**.

---

## 💻 Panel de Comandos de Desarrollo

Levanta y edita los ambientes usando el gestor en consola:

| Comando | Acción del framework en segundo plano |
|---------|---------------------------------------|
| `npm run dev` | Inicia el compilador Vite y Astro dev server en el puerto `4321`. Se refresca instantáneo con Hot Reload. |
| `npm run build` | Empaqueta, ofusca y comprime estáticos generando el bundle corporativo directo al folder `./dist/` |
| `npm run preview` | Previsualiza exáctamente como luce en producción el `./dist/`. Útil antes del Release. |
| `npm run storybook` | Levanta servidor de Storybook para iterar la interfaz (puerto `6006`). |
| `npm run build-storybook`| Exporta Storybook puro listo para hospedar de manera autogestionada (Github pages, Vercel, Netlify). |

---

*Desarrollado para acelerar la entrega de productos de alta fidelidad tecnológica.*
