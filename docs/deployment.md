# Despliegue en Entornos Cloud (Como Firebase Studios)

Esta guía explica cómo desplegar y visualizar correctamente este sitio Lume en un entorno de desarrollo basado en la nube o en un IDE web.

## El Problema con `deno task serve`

El comando `deno task serve` es excelente para el desarrollo local. Inicia un servidor con **recarga en vivo** (live-reloading), que depende de una tecnología llamada **WebSockets** para funcionar.

En muchos entornos en la nube, una capa de red intermedia (proxy) gestiona las conexiones. Estos proxies a menudo no están configurados para manejar las conexiones de larga duración de los WebSockets, lo que provoca que la conexión se cierre inesperadamente y aparezcan errores como `Socket errored... Unexpected EOF`.

## La Solución: Construir y Servir Estáticamente

La solución es simular un entorno de producción real, que es un proceso de dos pasos:

### Paso 1: Construir el Sitio Estático

Primero, compilamos todo el proyecto (archivos JSX, Markdown, etc.) en archivos HTML, CSS y JavaScript puros. Estos archivos se guardarán en el directorio `_site`.

Usa el siguiente comando para construir el sitio:

```bash
deno task build
```

Este comando ejecutará el proceso de Lume y llenará la carpeta `_site` con la versión final de tu web.

### Paso 2: Servir los Archivos Estáticos

Una vez que el sitio está construido, no necesitamos la recarga en vivo de Lume. Solo necesitamos un servidor web simple que sirva el contenido de la carpeta `_site`. El servidor HTTP integrado de Python es perfecto para esto.

Usa este comando para iniciar un servidor simple en el puerto `3000`:

```bash
python3 -m http.server --directory _site 3000
```

### Paso 3: Acceder al Sitio

El entorno en la nube (como Firebase Studios) detectará automáticamente que has iniciado un servicio en el puerto `3000`. Realizará un **reenvío de puertos** y te proporcionará una URL pública.

Busca en la interfaz del IDE:
- Una **notificación emergente** (generalmente en la esquina inferior derecha).
- Una **pestaña o panel llamado "Ports"** (Puertos).

Haz clic en la URL proporcionada para abrir tu sitio web en una nueva pestaña del navegador.
