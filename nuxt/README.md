# nuxt

## helpful resource
https://maddevs.io/blog/how-to-configure-ssg-and-ssr-on-nuxt/

## NuxtJS topics

### Concepts

### Features
#### Rendering
- Server side rendering sites
    - {ssr: true} is default in nuxt.config.js
    - server side will render content to full html upon request from browser
- static sites
    - {ssr: true}
    - contents are rendered into full html in build time server and no longer need server to render
- client side rendering
    - {ssr: false}
    - client side(browser) will render content to full html
#### Deployment Targets
- static hosting
    - use 'nuxt generate' to generate static files for every routes to keep in 'dist' folder
    - {target: 'static' } should be inside nuxt.config.js
    - i think should be used in conjunction with {ssr: true}
- server hosting
    - {target: 'server'} is default in nuxt.config.js
    - for the purpose of server side rendering(SSR)
#### File System Routing
- nuxt uses page folders tree to generate vue-router configuration
- router option with extendRoutes function in nuxt.config.js for further configuring the routes
#### Data Fetching
- fetch() hook can be placed in any components's script as fetch option, & fetchOnServer and fetchDelay options too.
    - exposes $fetchState.pending, $fetchState.error & $fetchState.timestamp
- asyncData() hook can only be placed in page folder's components
    - will automatically merges the return value to the local state
    - cannot access component instance(this) and asyncData() argument is context 
#### Meta Tags and SEO
- configure meta in nuxt.config.js with head option or components in pages folder under script with head option
- can also add additional script and link to the head option
#### Configuration
#### Loading
- loadingIndicator option in nuxt.config.js
#### Components
- &lt;Nuxt /&gt; used in layout component only
- &lt;NuxtChild /&gt; used in pages component
- &lt;NuxtLink &gt; 
- &lt;client-only &gt; , only render on client-side
#### Transitions
#### Preview Mode


## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
