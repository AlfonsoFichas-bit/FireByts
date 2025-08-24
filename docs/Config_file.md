# The _config file - Lume
The configuration file is the `_config.ts` or `_config.js`, saved in the site's root directory. If you don't have it yet, see the Installation [documentation](https://lume.land/docs/overview/installation/) to learn how to create it.

The minimal required code is:

```
import lume from "lume/mod.ts";

const site = lume();

export default site;

```


The `lume()` function creates a new instance of Lume and exports it. This function accepts an object with the following configuration values:

[Basic options](#basic-options)
-------------------------------

### [src](#src)

This is the directory containing the source files of your site. All files needed to build your site must be here. Files and folders outside this directory won't be included in your site. It's relative to `cwd` and by default it's `.` (the same directory), but some people prefer to store the source files in a subfolder like `src`.

```
const site = lume({
  src: "./src",
});

```


Tip

You can override the value from the CLI with `--src`, which is useful if you have different sites in the same directory. For example: `deno task lume --src=./src`

### [dest](#dest)

This is the folder to export the generated site. It's relative to `cwd` and by default is `_site`.

```
const site = lume({
  dest: "./output",
});

```


Tip

You can override the value from the CLI with `--dest`, which is useful if you want to generate the site without overriding the previous one. For example:`deno task lume --dest=./output`

### [emptyDest](#emptydest)

By default, Lume will empty the `dest` folder before the build. You can prevent this by setting this option to false:

```
const site = lume({
  emptyDest: false,
});

```


This is useful if you want to combine two or more sites to the same folder. Other use case is for very big sites (with more than 100K pages) that needs to be built in several steps to prevent running out of memory.

### [location](#location)

This is the public URL of the site. It's useful to generate absolute URLs or fix the relative URLs if your site is published under a subdirectory, for example: `https://example.com/project-name/`. It only accepts a [URL object](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL), for example:

```
const site = lume({
  location: new URL("https://example.com"),
});

```


This value is ignored by the local server (started with `lume --serve`), which always uses `http://localhost:3000` (or the defined port if you change it).

Tip

You can override the value from the CLI with `--location`, which is useful if you want to build and deploy the site to different locations. For example: `deno task lume --location=https://my-site.com/blog/`

### [prettyUrls](#prettyurls)

By default it's enabled and generates pretty URLs, for example `/about-us/` instead of `/about-us.html`. Set `false` to disable it.

```
const site = lume({
  prettyUrls: false, // Disable pretty urls
});

```


### [cssFile](#cssfile)

Lume components and some plugins (like katex, prism, or google fonts) can generate CSS code. This option allows to configure globally the filename used to output that code.

```
const site = lume({
  cssFile: "/style.css", // This is the default value
});

```


### [jsFile](#jsfile)

Lume components can generate JavaScript code. This option allows to configure globally the filename used to output that code.

```
const site = lume({
  jsFile: "/script.js", // This is the default value
});

```


### [fontsFolder](#fontsfolder)

Some plugins like Google Fonts or Katex can output font files. This option allows to configure globally the folder where these files are saved.

```
const site = lume({
  fontsFolder: "/fonts", // This is the default value
});

```


### [caseSensitiveUrls](#casesensitiveurls)

Lume prevents saving two pages with the same URL. By default pages with the same name but different case are considered the same page, for example `/about-us/` and `/About-Us/`. This behavior matches Windows and MacOS' file systems, which are case insensitive. You can set this option to `true` to make it case sensitive, so both pages would be considered different. Note that this behavior is only compatible with Linux.

### [includes](#includes)

It's a special folder used by default by the template engines and some plugins (like sass or postcss) to look for the included files. By default is `_includes` and this value is relative to the `src` folder.

As an example, if the `src` folder is `./src` and the includes folder is configured to `_includes`, Lume will look for the included files at `./src/_includes/`.

[Server options](#server-options)
---------------------------------

The `server` key contains the configuration for the local server. It has the following options:

### [root](#root)

Set the root folder for the server. By default it's the same directory as `dest`. The only use case in which you may want to change this is if your `dest` folder is, for example `_site/blog` and you want to expose the `blog` folder when serving the site because all urls start with `/blog/`.

### [port](#port)

By default, the local server uses port `3000`. Use this option to set a different port.

```
const site = lume({
  server: {
    port: 8000,
  },
});

```


Tip

This value can be overridden from CLI with `--port`. For example: `deno task lume --serve --port=8888`

### [page404](#page404)

This option allows configuring the HTML page displayed for 404 errors. By default it is `/404.html`. If you are building a SPA with dynamic URLs, you may want to change it to `/index.html`.

### [open](#open)

Set `true` to automatically open the generated site in your default web browser after starting the local web server.

```
const site = lume({
  server: {
    open: true,
  },
});

```


Tip

This value can be set from CLI with `--open` or `-o`. For example: `deno task lume --serve --open`

### [middlewares](#middlewares)

Use this option to add middleware to the local web server. There are some middleware options for common needs at `lume/middlewares/*`, but you can create custom middleware easily. More info in the [Server documentation](about:/docs/core/server/#middleware).

```
import expires from "lume/middlewares/expires.ts";

const site = lume({
  server: {
    middlewares: [
      expires(),
    ],
  },
});

```


### [debugBar](#debugbar)

The [debug bar](https://lume.land/docs/core/debugbar/) is a development toolbar that appears in your site while the dev server is running. Use this option to disable it or provide a HTTP specifier to use a different web component.

```
const site = lume({
  server: {
    debugBar: false, // disable the debug bar
  },
});

```


[Watcher options](#watcher-options)
-----------------------------------

The `watcher` key contains an object to configure the file watcher, used to watch file changes with `lume --serve` and `lume --watch`.

*   **debounce:** The debounce interval (in milliseconds). By default is `100`.
*   **ignore:** An array of strings or functions to filter paths ignored by the watcher.

```
const site = lume({
  watcher: {
    debounce: 10,
    ignore: [
      "./ignored-folder/",
      "./ignored-file.txt",
      (path) => path.endsWith(".foo"), // ignore extension
    ],
  },
});

```


Note

There are some files and directories that are automatically ignored by the watcher, like `.git` or `.DS_Store`.

[Components options](#components-options)
-----------------------------------------

The `components` object allows to configure the output files of [Lume components](https://lume.land/docs/core/components/).

*   **cssFile:** The file name to export the CSS code of the components.
*   **jsFile:** The file name to export the JS code of the components.
*   **placeholder:** A string used as placeholder to replace the content with the css or js code.

```
import lume from "lume/mod.ts";

const site = lume({
  components: {
    cssFile: "/style.css",
    jsFile: "/script.js",
  },
});

export default site;

```
