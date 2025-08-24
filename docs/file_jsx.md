# JSX - Lume
Options
-------

**extensions** _string\[\]_

File extensions to load

**Default:**

```
[ ".jsx", ".tsx" ]
```


**pageSubExtension** _string_

Optional sub-extension for page files

**Default:**

```
".page"
```


**includes** _string_

Custom includes path

**Default:**

```
site.options.includes
```


[Description](#description)
---------------------------

[JSX](https://facebook.github.io/jsx/) (or the equivalent TSX for TypeScript) is a template language to create and render HTML code, very popular in some frameworks. This plugin adds support for `JSX / TSX` to create pages and layouts, using [`SSX`](https://github.com/oscarotero/ssx/) for rendering.

Note that this plugin only provides JSX support to generate the pages at building time. This means that client-side properties like `onClick` won't work. If you want to use a JSX library like React, Preact, etc for creating code for the browser (like SPAs), use the [ESbuild](https://lume.land/plugins/esbuild/) plugin.

[Installation](#installation)
-----------------------------

Import this plugin in your `_config.ts` file to use it:

```
import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";

const site = lume();

site.use(jsx(/* Options */));

export default site;

```


### [Configuration](#configuration)

You might want to add the following `compilerOptions` to `deno.json` in order to configure the JSX transform:

```
{
  // ...
  "imports": {
    //...
    "lume/jsx-runtime": "https://deno.land/x/ssx@v0.1.10/jsx-runtime.ts"
  },
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "lume"
    //...
  }
}

```


[Creating pages](#creating-pages)
---------------------------------

To create a page with this format, just add a file with `.page.jsx` or `.page.tsx` extension to your site. The `.page` subextension is required to differentiate JSX/TSX files that generate HTML pages from other files to be executed in the browser. This format works exactly the same as [JavaScript/TypeScript files](https://lume.land/plugins/modules/), but with the addition of the ability to export JSX code in the default export:

```
export const title = "Welcome to my page";
export const layout = "layouts/main.vto";

export default (data: Lume.Data, helpers: Lume.Helpers) => (
  <>
    <h1>{data.title}</h1>
    <p>This is my first post using lume. I hope you like it!</p>
  </>
);

```


Note that this page uses the `layouts/main.vto` Vento layout to wrap the content. (You can mix different template languages like Nunjucks and JSX.)

[Creating layouts](#creating-layouts)
-------------------------------------

To create layouts in JSX, just add `.jsx` or `.tsx` files to the `_includes` directory. Note that we need to use the variable `children` to render the page content instead of `content`. The difference is that `content` is a string and cannot be easily used in JSX because it's escaped, and `children` is the JSX object un-rendered.

```
export default ({ title, children }: Lume.Data, helpers: Lume.Helpers) => (
  <>
    {{ __html: "<!DOCTYPE html>" }}
    <html>
      <head>
        <title>{title}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  </>
);

```


[Components](#components)
-------------------------

You can create [Lume components](https://lume.land/docs/core/components/) in JSX creating files in the `_components` folder. For example:

```
export default function ({ children }) {
  return (
    <button class="my-button">
      {children}
    </button>
  );
}

```


To render the component in your templates use the `comp` variable:

```
export default function ({ comp }) {
  return (<comp.Button>Click me!</comp.Button>);
}

```


Important

Importing a component with `import Button from "./_components/button.tsx"` doesn't work for live-reloading due a limitation of Deno that [cannot update any imported module](https://github.com/denoland/deno/issues/8327) without restarting the entire process. So it's highly recomendable to use the `comp` variable to consume components and mitigate this limitation.