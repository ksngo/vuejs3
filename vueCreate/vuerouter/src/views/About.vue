<template>
  <div class="about">
    <div class='float-right'>1. router-view component --> About.vue component if route is /about </div><br>
    <div class="float-right">2. About.vue component has this.$route </div>
    <div>
      <h1>This is an about page</h1>
    </div>
  </div>
</template>

<script>

import {RouterLink} from 'vue-router'

  export default {
    name: "About",
    created() {
      console.log("About.vue: ",this.$route)
      console.log("RouterLink.props", RouterLink.props)
    }
  }
</script>

<style scoped>
  .about {
    border-style: dotted;
    padding: 10px 10px 10px 10px;
  }
  .float-right {
    float: right;
  }
</style>
