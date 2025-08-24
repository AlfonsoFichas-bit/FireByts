import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import google_fonts from "lume/plugins/google_fonts.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import code_highlight from "lume/plugins/code_highlight.ts";

const site = lume();

site.use(jsx());
site.use(google_fonts({
    fonts:
    "https://fonts.googleapis.com/css2?family=Victor+Mono:ital,wght@0,100..700;1,100..700&display=swap"
}));
site.use(tailwindcss());
site.use(code_highlight());
site.add("style.css"); //Add the entry point

// Archivos ignorados
site.ignore("docs", ".idea");

export default site;
