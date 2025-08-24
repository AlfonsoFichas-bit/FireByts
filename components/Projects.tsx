
import { GithubIcon, ExternalLinkIcon } from './icons.tsx';

type PropsWithChildren = { children?: unknown };
const TechPill = ({ children }: PropsWithChildren) => (
  <span class="bg-gray-800 text-medium-text text-sm px-3 py-1 rounded-full">{children}</span>
);

const Projects = () => {
  return (
    <section id="proyectos" class="py-24">
      <h2 class="text-3xl font-bold mb-12">"// Proyectos Destacados"</h2>

      <div class="space-y-20">
        {/* Project 1 */}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div class="bg-[#161B22] rounded-lg p-8 flex items-center justify-center h-80">
            <h3 class="text-4xl font-bold text-accent-blue">Proyecto 1</h3>
          </div>
          <div class="flex flex-col items-start">
            <h3 class="text-2xl font-bold text-accent-pink">Sistema de Gestión de Tareas</h3>
            <p class="mt-4 text-medium-text">
              Una aplicación web completa para la gestión de proyectos y tareas en equipo, con tableros Kanban, seguimiento de tiempo y reportes.
            </p>
            <div class="flex flex-wrap gap-2 mt-6">
              <TechPill>React</TechPill>
              <TechPill>Node.js</TechPill>
              <TechPill>PostgreSQL</TechPill>
              <TechPill>GraphQL</TechPill>
            </div>
            <div class="flex items-center space-x-6 mt-6">
              <a href="#" class="flex items-center space-x-2 text-light-text hover:text-accent-blue transition-colors">
                <GithubIcon />
                <span>Ver Código</span>
              </a>
              <a href="#" class="flex items-center space-x-2 text-light-text hover:text-accent-blue transition-colors">
                <ExternalLinkIcon />
                <span>Demo en Vivo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div class="flex flex-col items-start lg:order-2">
            <h3 class="text-2xl font-bold text-accent-green">Plataforma de E-learning</h3>
            <p class="mt-4 text-medium-text">
              Desarrollamos una plataforma interactiva para cursos en línea, con streaming de video, quizzes, y certificados de finalización.
            </p>
            <div class="flex flex-wrap gap-2 mt-6">
              <TechPill>Vue.js</TechPill>
              <TechPill>Python (Django)</TechPill>
              <TechPill>MongoDB</TechPill>
            </div>
            <div class="flex items-center space-x-6 mt-6">
              <a href="#" class="flex items-center space-x-2 text-light-text hover:text-accent-blue transition-colors">
                <GithubIcon />
                <span>Ver Código</span>
              </a>
            </div>
          </div>
          <div class="bg-[#161B22] rounded-lg p-8 flex items-center justify-center h-80 lg:order-1">
            <h3 class="text-4xl font-bold text-accent-pink">Proyecto 2</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
