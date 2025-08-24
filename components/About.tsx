
const About = () => {
  return (
    <section id="nosotros" class="py-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="flex justify-center">
          <div class="w-72 h-72 md:w-80 md:h-80 bg-slate-950 rounded-full flex items-center justify-center text-white">
            <h3 class="text-5xl font-bold">Equipo</h3>
          </div>
        </div>
        <div>
          <h2 class="text-3xl font-bold">Un poco sobre nosotros</h2>
          <p class="mt-6 text-medium-text leading-relaxed">
            Empezamos como un grupo de amigos que amaban construir cosas. Esa pasión nos une y nos impulsa a colaborar en proyectos que nos desafían y divierten. Creemos en el código limpio, la comunicación abierta y un buen café para potenciar la creatividad. Nuestro objetivo es transformar ideas complejas en experiencias de usuario simples y memorables.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
