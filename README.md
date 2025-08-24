# FireByts Website

Este es el repositorio para el sitio web de [FireByts](https://firebit.firebyts.deno.net/). El sitio está construido con Lume, un generador de sitios estáticos para Deno.

## Tecnologías Utilizadas

*   **Deno:** Entorno de ejecución para JavaScript y TypeScript.
*   **TypeScript/JSX:** Lenguaje de programación y sintaxis de plantillas.
*   **Markdown:** Para escribir contenido de páginas y posts.
*   **Tailwind CSS:** Framework de CSS para el diseño.


## Requisitos previos

- [Deno](https://deno.land/)

## Instalación

### Linux y macOS

Puedes instalar Deno usando el siguiente comando en tu terminal:

```sh
curl -fsSL https://deno.land/x/install/install.sh | sh
```

### Windows

Para instalar Deno en Windows, puedes usar PowerShell:

```powershell
irm https://deno.land/install.ps1 | iex
```

Asegúrate de que el directorio de instalación de Deno esté en tu variable de entorno PATH.

## Ejecutando el proyecto

Una vez que Deno esté instalado, puedes clonar este repositorio y ejecutar el proyecto localmente.

1.  **Clona el repositorio:**

    ```sh
    git clone https://github.com/AlfonsoFichas-bit/FireByts.git
    cd FireByts
    ```

2.  **Iniciar el servidor de desarrollo:**

    Este comando iniciará un servidor local con recarga en vivo. Es ideal para el desarrollo.

    ```sh
    deno task serve
    ```

    El sitio estará disponible en `http://localhost:3000`.

## Otros Comandos

### Construir el sitio

Para construir la versión de producción del sitio, ejecuta:

```sh
deno task build
```

Esto generará los archivos estáticos en el directorio `_site`.

### Desarrollo con recarga

Este comando observa los cambios en los archivos y reinicia el servidor automáticamente.

```sh
deno task dev
```
