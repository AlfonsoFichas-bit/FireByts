# Other page formats - Lume
We have seen how to create pages from Markdown files in Lume. This is a convenient format for text-based sites like blogs or documentation, but you may want to create a complex page with small text, images, videos, animations, etc. Every page has its own format.

[Create pages with Vento](#create-pages-with-vento)
---------------------------------------------------

Vento, the format we have used to create layouts in the previous examples, can also be used to create pages directly. You simply create a file with the `.vto` extension. For example:

```
---
title: Welcome to my page

links:
  - text: My Twitter
    url: https://twitter.com/misteroom
  - text: My GitHub profile
    url: https://github.com/oscarotero
---

<article>
  <header>
    <h1>{{ title }}</h1>
  </header>

  <ul>
    {{ for link of links }}
    <li>
      <a href="{{ link.url }}">
        {{ link.text }}
      </a>
    </li>
    {{ /for }}
  </ul>
</article>

```


This is an example of a page using Vento. Like markdown, it can contain front matter to store the page data, which is used to render the Vento code. Note that it has the `layout` variable, so the result of rendering this page will be passed to the layout in the `content` variable (along with the other variables `title` and `links`).

[Create pages with JavaScript](#create-pages-with-javascript)
-------------------------------------------------------------

JavaScript can be useful for complex pages requiring some logic before rendering. You have to create a file with the extension `.page.js`. The `.page` sub-extension is required to distinguish JavaScript files that generate static pages from other JavaScript files destined to be run in the browser.

Here's the previous Vento example in JavaScript:

```
export const title = "Welcome to my page";
export const layout = "layout.vto";
export const links = [
  {
    text: "My Twitter",
    url: "https://twitter.com/misteroom",
  },
  {
    text: "My GitHub profile",
    url: "https://github.com/oscarotero",
  },
];

export default function ({ title, links }) {
  return `
  <article>
    <header>
      <h1>${title}</h1>
    </header>

    <ul>
      ${
    links.map((link) => `<li><a href="${link.url}">${link.text}</a></li>`).join(
      "",
    )
  }
    </ul>
  </article>`;
}

```


As you can see, the variables exported in the front matter in the Vento example are now exported as named ES modules.

The default export is a function that returns the page content. The first argument contains all available data for this page (not only the same variables exported by the page, but also other data provided by `_data` files).

[More formats](#more-formats)
-----------------------------

Lume supports several formats to generate pages. [Go to the Plugins section](https://lume.land/plugins/?status=all&template_engine=on) to see more info about all available formats. Some of them are installed by default (like [Vento](https://lume.land/plugins/vento/), [YAML](https://lume.land/plugins/yaml/), [Modules](https://lume.land/plugins/modules/) etc), and others need to be installed in your `_config.ts` file (like [Nunjucks](https://lume.land/plugins/nunjucks/), [Eta](https://lume.land/plugins/eta/), [JSX](https://lume.land/plugins/jsx/), or [Pug](https://lume.land/plugins/pug/)).

[Data model](#data-model)
-------------------------

If you want to better understand how Lume loads pages, go to the [`Data` model](https://lume.land/docs/advanced/the-data-model/) page.