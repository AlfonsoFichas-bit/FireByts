
import { GithubIcon, LinkedinIcon, TwitterIcon } from './icons.tsx';

const Contact = () => {
  return (
    <footer id="contacto" class="bg-[#161B22] py-16 text-center">
      <div class="container mx-auto px-6 md:px-12">
        <h2 class="text-4xl font-bold">¿Tienes una idea? Hablemos.</h2>
        <p class="mt-4 text-medium-text max-w-xl mx-auto">
          Estamos abiertos a nuevas colaboraciones y desafíos interesantes.
        </p>
        <a 
          href="mailto:hola@firebytes.com"
          class="mt-8 inline-block text-2xl text-accent-blue font-bold hover:underline"
        >
          hola@firebytes.com
        </a>
        <div class="flex justify-center space-x-6 mt-8">
          <a href="#" class="text-medium-text hover:text-light-text transition-colors"><GithubIcon /></a>
          <a href="#" class="text-medium-text hover:text-light-text transition-colors"><LinkedinIcon /></a>
          <a href="#" class="text-medium-text hover:text-light-text transition-colors"><TwitterIcon /></a>
        </div>
        <div class="border-t border-border-color mt-12 pt-8 text-sm text-medium-text">
          <p>&copy; {new Date().getFullYear()} Firebytes. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
