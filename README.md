# Cabañas Rurales - Landing Page

Plataforma de reserva y gestión de cabañas rurales construida con Next.js 15, React 19 y Tailwind CSS.

## Descripción

Aplicación web para la reserva y alquiler de cabañas rurales con soporte multiidioma. Integrada con Supabase para la gestión de datos y PayPal para procesamiento de pagos.

## Características

- 🌍 **Multiidioma**: Soporte con next-intl para múltiples idiomas
- 📅 **Selector de Fechas**: Rango de fechas interactivo con react-date-range
- 💳 **Pagos Seguros**: Integración con PayPal
- 💾 **Base de Datos**: Supabase para almacenamiento en la nube
- 🎨 **Diseño Responsivo**: Tailwind CSS para una interfaz moderna
- ⚡ **Rendimiento**: Powered by Next.js con Turbopack

## Requisitos Previos

- **Node.js** 18+ 
- **npm** o **yarn**

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/e-nihilus/landing-cabanas.git
cd cabanas-rurales
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno (crear archivo `.env.local`):
```
NEXT_PUBLIC_SUPABASE_URL=tu_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
NEXT_PUBLIC_PAYPAL_CLIENT_ID=tu_client_id_paypal
```

## Comandos Disponibles

### Desarrollo
```bash
npm run dev
```
Inicia el servidor de desarrollo con Turbopack en `http://localhost:3000`

### Producción
```bash
npm run build
npm start
```
Compila la aplicación y la inicia en modo producción

### Linting
```bash
npm run lint
```
Ejecuta ESLint para verificar el código

## Estructura del Proyecto

```
src/
├── app/              # Rutas y layouts de Next.js
├── components/       # Componentes React reutilizables
├── i18n/            # Configuración de internacionalización
├── lib/             # Utilidades y funciones auxiliares
└── middleware.ts    # Middleware de Next.js
```

## Tecnologías

| Tecnología | Versión |
|-----------|---------|
| Next.js | 15.3.0 |
| React | 19.0.0 |
| Tailwind CSS | 4.0.0 |
| TypeScript | 5.7.0 |
| Supabase | 2.100.1 |
| PayPal | 9.1.0 |
| next-intl | 4.8.4 |

## Variables de Entorno

La aplicación requiere las siguientes variables de entorno en `.env.local`:

- `NEXT_PUBLIC_SUPABASE_URL` - URL de tu proyecto Supabase
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Clave anónima de Supabase
- `NEXT_PUBLIC_PAYPAL_CLIENT_ID` - ID de cliente de PayPal

## Licencia

MIT

## Autor

e-nihilus
