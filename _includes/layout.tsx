export default ({ title, children }: Lume.Data, helpers: Lume.Helpers) => (
  <>
    {{ __html: "<!DOCTYPE html>" }}
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || "FireByts"}</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body class="bg-dark-bg text-light-text font-mono"> {/* Added body classes */}
        <header class="py-8 px-6 md:px-12 container mx-auto">
          <div class="flex justify-between items-center">
            <a href="/" class="text-2xl font-bold">&lt;FireByts&gt;</a> {/* Updated name and link */}
            <nav class="hidden md:flex space-x-8"> {/* Added hidden md:flex */}
              <a href="/#proyectos" class="hover:text-accent-blue transition-colors">Proyectos</a>
              <a href="/#stack" class="hover:text-accent-blue transition-colors">Stack</a>
              <a href="/#nosotros" class="hover:text-accent-blue transition-colors">Nosotros</a>
              <a href="/#contacto" class="hover:text-accent-blue transition-colors">Contacto</a>
              <a href="/blog/" class="hover:text-accent-blue transition-colors">Blog</a> {/* Blog link */}
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  </>
);