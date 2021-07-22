# vuerouter

## Notes
1. for &lt;router-view&gt; in App.vue's template, it will look across all objects(e.g. Home.vue, About.vue, User.vue) in src/router/index.js, it will use whichever listed component according to which route
2. for &lt;router-view&gt; in User.vue's template, it will look at the object that contains name=User and component=User.vue, it will refer to the children option for which component to render accoording to the route.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
