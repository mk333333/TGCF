# Calculadora de TGCF (PWA)

Calculadora de mínimos y simulación de las pruebas físicas del **Anexo II de la Orden DEF/15/2026**.
Se instala en el móvil como una app (sin APK ni tienda) y funciona sin conexión.

## Contenido de la carpeta
- `index.html` – la calculadora (un solo archivo).
- `manifest.webmanifest` – datos de la app (nombre, iconos, colores).
- `sw.js` – copia local para que funcione sin conexión.
- `icons/` – iconos de la app.
- `.nojekyll` – evita que GitHub procese los archivos (déjalo).

## Subirlo a GitHub Pages (gratis)
1. Crea una cuenta en <https://github.com> si no la tienes.
2. Pulsa **New** → ponle un nombre al repositorio (por ejemplo `calculadora-tgcf`) → **Public** → **Create repository**.
3. Pulsa **uploading an existing file** (o **Add file → Upload files**).
4. **Descomprime el ZIP** y arrastra TODO lo que hay dentro: `index.html`, `manifest.webmanifest`, `sw.js`, la carpeta `icons` y `.nojekyll`.
   (Importante: sube los archivos, no el ZIP. Si no ves `.nojekyll`, no pasa nada: es un archivo oculto.)
5. Baja y pulsa **Commit changes**.
6. Entra en **Settings → Pages**. En **Build and deployment → Source** elige **Deploy from a branch**, rama **main**, carpeta **/ (root)** y pulsa **Save**.
7. Espera 1-2 minutos. Tu dirección será:
   `https://TU-USUARIO.github.io/calculadora-tgcf/`

## Instalarla en Android
1. Abre esa dirección en **Chrome**.
2. Menú ⋮ → **Instalar aplicación** (o **Añadir a pantalla de inicio**).
3. Aparece el icono «TGCF». Se abre a pantalla completa y funciona sin conexión.

## Actualizarla
1. Sube el archivo cambiado al repositorio (**Add file → Upload files** y sobrescribe).
2. Si cambias `index.html`, abre también `sw.js` y sube el número de versión (`tgcf-v1` → `tgcf-v2`) para que los móviles descarguen la nueva copia.

## Notas
- El enlace es público: cualquiera que lo tenga puede abrirlo.
- La aplicación no recoge datos. El alojamiento (GitHub) puede registrar datos técnicos de conexión según su propia política.
- Herramienta orientativa, no oficial: la calificación oficial la determina el órgano evaluador con la norma vigente.
