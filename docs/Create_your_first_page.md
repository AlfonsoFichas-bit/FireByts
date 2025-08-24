# Create your first page - Lume
[The page file](#the-page-file)
-------------------------------

After you setup Lume in your project's folder ([see installation instructions](https://lume.land/docs/overview/installation/) if you don't have it yet), create the file `index.md` and add some content in [markdown](https://en.wikipedia.org/wiki/Markdown) format, for example:

```
# Welcome to my website

This is my first page using **Lume,** a static site generator for Deno.

I hope you enjoy it.

```


[Build and open the page](#build-and-open-the-page)
---------------------------------------------------

Run `deno task serve` in your terminal. This task does two things:

*   Build your site. The `index.md` file is compiled and exported as `index.html` in the folder `_site`.
*   Starts a local web server, so you can see the generated site in your browser. Open the url `http://localhost:3000/` in your browser to see the page.

Tip

The web server also includes live-reloading. If you edit the `index.md` file, the browser is reloaded automatically to see the new changes.

**Congratulations, you have created your first page with Lume! 🎉**