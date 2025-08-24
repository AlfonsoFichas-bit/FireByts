# Add data to your page - Lume
The front matter can contain any variable that you want. For example, let's define a variable with the name `title`:

```
---
layout: layout.vto
title: This is my website
---
# Welcome to my website

This if my first page using **Lume,**
a static site generator for Deno.

I hope you enjoy it.

```


This variable is accessible by the layout, so that it can be inserted into the generated HTML:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{{ title }}</title>
</head>
<body>
  {{ content }}
</body>
</html>

```


The `<title>` tag uses the `{{ title }}` placeholder, which is used to insert the value of the `title` variable.