
export const layout = "layout.tsx";

import Hero from './components/Hero.tsx';
import Projects from './components/Projects.tsx';
import Stack from './components/Stack.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';

// BackgroundAnimation uses client-side React features (useState, useEffect)
// which are not compatible with Lume's static build process.
// It has been removed for static site generation.

export default () => {
  return (
    <div class="relative overflow-hidden min-h-screen">
      {/* <BackgroundAnimation /> */}
      <div class="relative z-10">
        
        <main class="container mx-auto px-6 md:px-12">
          <Hero />
          <Projects />
          <Stack />
          <About />
        </main>
        <Contact />
      </div>
    </div>
  );
};
