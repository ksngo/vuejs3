<template>
  <div class="about">
    <div class='float-right'>1. router-view component --> NotFound.vue component if route is /:catchall(.*)* </div><br>
    <div class="float-right">2. NotFound.vue component has this.$route </div>
    <div>
      <h1>Not Found 404</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NotFound",
    created() {
      console.log("NotFOund.vue: ",this.$route)
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
