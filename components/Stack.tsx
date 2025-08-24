
import { FrontendIcon, BackendIcon, ToolsIcon } from './icons.tsx';

type StackCardProps = { icon: unknown; title: string; tech: string[] };
const _StackCard = ({ icon, title, tech }: StackCardProps) => (
    <div class="bg-[#161B22] border border-border-color p-6 rounded-lg text-center">
        <div class="text-4xl mb-4 text-accent-blue inline-block">{icon}</div>
        <h3 class="text-xl font-bold mb-4">{title}</h3>
        <div class="flex flex-wrap justify-center gap-4">
            {tech.map((item: string, index: number) => (
                <div key={index} class="flex items-center space-x-2">
                    <div class="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs text-medium-text">
                    {item.substring(0,2)}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const Stack = () => {
    return (
        <section id="stack" class="py-24 text-center">
            <h2 class="text-3xl font-bold">// Nuestro Stack</h2>
            <p class="mt-4 max-w-2xl mx-auto text-medium-text">
                Utilizamos un conjunto de tecnologías modernas y robustas para dar vida a nuestras ideas.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
                <div>
                    <h3 class="text-xl font-bold text-accent-blue mb-4 text-center">Frontend</h3>
                    <div class="flex justify-center space-x-4">
                        <FrontendIcon class="h-8 w-8 text-light-text" />
                        <FrontendIcon class="h-8 w-8 text-light-text" />
                        <FrontendIcon class="h-8 w-8 text-light-text" />
                    </div>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-accent-pink mb-4 text-center">Backend</h3>
                    <div class="flex justify-center space-x-4">
                        <BackendIcon class="h-8 w-8 text-light-text" />
                        <BackendIcon class="h-8 w-8 text-light-text" />
                    </div>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-accent-green mb-4 text-center">Herramientas</h3>
                    <div class="flex justify-center space-x-4">
                        <ToolsIcon class="h-8 w-8 text-light-text" />
                        <ToolsIcon class="h-8 w-8 text-light-text" />
                        <ToolsIcon class="h-8 w-8 text-light-text" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stack;
