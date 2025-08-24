export const layout = "layout.tsx";

export default ({ title, children, date }: Lume.Data) => (
  <div class="grid grid-cols-1 lg:grid-cols-[1fr,250px] gap-8">
    <article class="prose prose-invert [&>h2]:border-l-4 [&>h2]:border-accent-blue [&>h2]:pl-4 [&>pre]:border [&>pre]:border-border-color [&>pre]:rounded-lg [&>img]:border [&>img]:border-border-color [&>img]:rounded-lg">
      <header>
        <h1 class="text-4xl font-bold mb-2">{title}</h1>
        {date && (
          <p class="text-gray-400 text-sm">
            {new Date(date).toLocaleDateString()}
          </p>
        )}
      </header>
      <div class="mt-8">{children}</div>
    </article>

    <aside class="hidden lg:block">
      <div id="toc" class="sticky top-24">
        <h3 class="font-bold mb-4">En esta página</h3>
      </div>
    </aside>

    <script
      dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', () => {
            const tocContainer = document.getElementById('toc');
            if (!tocContainer) return;

            const article = document.querySelector('article');
            if (!article) return;

            // 1) Construir TOC para h2, h3, h4
            const headings = article.querySelectorAll('h2, h3, h4');
            if (headings.length === 0) {
              tocContainer.style.display = 'none';
              return;
            }

            const tocList = document.createElement('ul');
            tocList.className = 'space-y-2';

            const linkMap = new Map();

            headings.forEach(heading => {
              const id = heading.id || heading.textContent.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
              heading.id = id;

              const listItem = document.createElement('li');
              const link = document.createElement('a');
              link.href = '#' + id;
              link.textContent = heading.textContent;
              link.className = 'text-gray-400 hover:text-white';
              if (heading.tagName === 'H3') link.classList.add('ml-4');
              if (heading.tagName === 'H4') link.classList.add('ml-6');

              link.addEventListener('click', (e) => {
                e.preventDefault();
                document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
              });

              listItem.appendChild(link);
              tocList.appendChild(listItem);
              linkMap.set(id, link);
            });

            tocContainer.appendChild(tocList);

            // 2) Scrollspy (resalta el título activo)
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  const id = entry.target.id;
                  linkMap.forEach((a, key) => a.classList.toggle('active', key === id));
                }
              });
            }, { rootMargin: '0px 0px -70% 0px', threshold: 0.01 });

            headings.forEach(h => observer.observe(h));

            // 3) Botón copiar y etiqueta de lenguaje en bloques de código
            const codeBlocks = article.querySelectorAll('pre');
            codeBlocks.forEach(block => {
              block.style.position = 'relative';

              // Etiqueta de lenguaje
              const codeEl = block.querySelector('code');
              let lang = '';
              if (codeEl) {
                const cls = Array.from(codeEl.classList).find(c => c.startsWith('language-') || c.startsWith('lang-'));
                if (cls) lang = cls.replace(/^language-/, '').replace(/^lang-/, '');
              }
              if (!lang) {
                const m = (block.className || '').match(/language-([a-z0-9]+)/i);
                if (m) lang = m[1];
              }
              if (lang) {
                const badge = document.createElement('span');
                badge.textContent = lang.toUpperCase();
                badge.className = 'code-lang-badge';
                block.appendChild(badge);
              }

              // Botón copiar
              const button = document.createElement('button');
              button.textContent = 'Copiar';
              button.className = 'code-copy-btn';
              block.appendChild(button);

              button.addEventListener('click', () => {
                const code = codeEl ? codeEl.innerText : '';
                navigator.clipboard.writeText(code).then(() => {
                  button.textContent = 'Copiado!';
                  setTimeout(() => {
                    button.textContent = 'Copiar';
                  }, 2000);
                });
              });
            });
          });
        `,
      }}
    />
  </div>
);