<template>
    <div> Testing 
        <div>{{ content }}</div>
        <button @click="refresh">Refresh</button>
        <client-only>
            <vuetify-logo/>
        </client-only>
    </div>
</template>

<script>
import NuxtLogo from '../components/NuxtLogo.vue'
import VuetifyLogo from '../components/VuetifyLogo.vue'

export default {
  components: { VuetifyLogo, NuxtLogo },
    layout: 'mylayout',
    asyncData (context) { // Could be asyncData, nuxtServerInit, ...
  // Always available
  const {
    app,
    store,
    route,
    params,
    query,
    env,
    isDev,
    isHMR,
    redirect,
    error,
   $config
  } = context
//   console.log("inside asyncData")
//   console.log("app",app)
//   console.log("store",store)
//   console.log("route",route)
//   console.log("params",params)
//   console.log("query",query)
//   console.log("env",env)
//   console.log("isDev",isDev)
//   console.log("isHMR",isHMR)
//   console.log("redirect",redirect)
//   console.log("error",error)
//   console.log("$config",$config)

//   console.log('process',process)
//   console.log('process.client',process.client)
//   console.log('client' in process)
//   console.log('title' in process)
//   console.log('process.server',process.server)
//   console.log('process.static',process.static)

  // Only available on the Server-side
  if (process.server) {
    const { req, res, beforeNuxtRender } = context
    // console.log("req",req)
    // console.log("res",res)
    // console.log("beforeNuxtRender",beforeNuxtRender)
  }

  // Only available on the Client-side
  if (process.client) {
    const { from, nuxtState } = context
    // console.log("from",from)
    // console.log("nuxtState",nuxtState)
  }
  return { content: 'Created at: ' + new Date() }
},
methods: {
    refresh() {
        // console.log("this.$nuxt",this.$nuxt)
        this.$nuxt.refresh()
    }
},
beforeMount () {
    window.alert('heyhey before mount')
    console.log('heyhey before mount')
},
mounted () {
    window.alert('hey mounted')
    console.log('hey mounted')
}
}
</script>

