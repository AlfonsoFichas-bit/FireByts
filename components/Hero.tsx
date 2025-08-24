
import FireAnimation from './FireAnimation.tsx';

const Hero = () => {
  return (
    <section id="inicio" class="relative min-h-[70vh] flex flex-col justify-center items-start text-left py-20">
      <div class="relative z-10">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          &gt; Creamos soluciones <br /> con <span class="text-accent-blue">código.</span>
        </h1>
        <p class="mt-6 text-lg md:text-xl max-w-2xl text-medium-text">
          Somos un colectivo de desarrolladores apasionados por construir herramientas
          digitales eficientes, elegantes y escalables.
        </p>
        <a
          href="#proyectos"
          class="mt-10 px-8 py-3 border border-accent-blue text-accent-blue rounded-md hover:bg-accent-blue hover:text-dark-bg transition-colors duration-300"
        >
          Ver nuestros proyectos
        </a>
      </div>
      <div class="absolute top-1/2 right-0 -translate-y-1/2">
        <FireAnimation />
      </div>
    </section>
  );
};

export default Hero;
