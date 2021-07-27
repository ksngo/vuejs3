# vuerouter

## Notes for vue-router
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

## Notes for vuex
1. only able to change vueX state by $store.commit
2. ```javascript
    ...mapActions({
        //either use mapActions helper in computed option or use $store.dispatch('anAction') to trigger action in the store's actions property.
        //the action can returned a resolved promise, hence $store.dispatch('anAction').then(()=>{...}) is ok
        //$store.dispatch('anAction') means running anAction method in store's instance actions props. IN the anAction method, access to mutations is via context.commit('aMutation') 
        //or access to action is via context.dispatch('anAction')
        //***Remember that $store.dispatch('anAction') is for running store's instance actions action
      })
    ```
3. ```javascript
    ...mapMutations({
        //or use $store.commit('aMutation') to trigger mutation in the store's mutations property
        //$store.commit('aMutation') means running aMutation method in store's instance mutation props. In the aMutation method, access to state is via state.aParticularState
        //$store.commit('aMutation', value). The value will be passed to aMutation method as argument.
        //***Remember that $store.commit('aMutation') is for running store's instance mutations mutation
      })
    ```

## Notes for SSR
1. Don't understand Build Configuration
2. Don't understand Client Side Hydration


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
