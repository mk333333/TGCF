# Seguridad

Aplicación estática sin servidor, sin cuentas, sin cookies y sin envío de datos. Solo guarda en el navegador la preferencia de tema (claro/oscuro).

## Medidas aplicadas
- CSP estricta: `default-src 'none'`; scripts y estilos solo del propio sitio (`'self'`, sin `unsafe-inline`); sin objetos, iframes, audio, vídeo ni fuentes externas; `connect-src 'self'`; `form-action 'none'`; `upgrade-insecure-requests`.
- Sin código ni estilos en línea, sin dependencias, sin peticiones a terceros.
- Datos de entrada validados (tipo, rango y longitud); los valores se escapan antes de mostrarse.
- Protección anti-iframe (clickjacking) y `referrer: no-referrer`.
- Service worker solo para el propio origen, con recarga de red primero.

## Límites conocidos
GitHub Pages no permite configurar cabeceras HTTP (HSTS, X-Frame-Options, Permissions-Policy, COOP). Las equivalentes posibles se aplican desde la propia página.

Para avisar de un fallo: mikel333@gmail.com
