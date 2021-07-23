# vuerouter

## Notes
1. for &lt;router-view&gt; in App.vue's template, it will look across all objects(e.g. Home.vue, About.vue, User.vue) in src/router/index.js, it will use whichever listed component according to which route
2. for &lt;router-view&gt; in User.vue's template, it will look at the object that contains name=User and component=User.vue, it will refer to the children option for which component to render accoording to the route.

### passing route params to the component (three ways)
1. Without using props, use $route.params.certainParams in the component. For e.g. a route of /user/:name , the component can know params 'name' via $route.params.name
2. Using props : true in the router/index.js, also place a props option with same params name. For e.g. a route of /user/:name, the component's script has props: 'name' and use in component's template with {{name}}.
3. Using props and provide a function that returns an object in router/index.js, also place a props option matching the object. For e.g., the function is '(route)=>({name: route.params.name })'.

### navigation guards (three main types)
1. global (beforeEach, beforeResolve, afterEach) -- applies in router/index.js -- applies to every routes
2. Per-route (beforeEnter) -- applies in a single route object of the routes array in router/index.js -- applies to that particular route only
3. in-component for options api (beforeRouteEnter, beforeRouteUpdate, beforeRouteLeave) -- applies like an option in the component's object -- applies to routing that uses the component
4. in-component for composition api( onBeforeRouteUpdate, onBeforeRouteLeave)

### Don't understand
1. extending routerlink

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
