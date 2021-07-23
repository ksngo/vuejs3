<template>
  <div class="about">
    <div class='float-right'>1. router-view component --> Post.vue component if route is /user/:name/post </div><br>
    <div class="float-right">2. Post.vue component has this.$route </div> <br>
    <div>
      <h3>{{name}}'s posts:</h3>
      <!-- instead of using $route.params.name, create a props option in script refering to same name as the params and 
      introduce props: true in router/index.js -->
      <div> Lorem ipsum...</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    props: ['name'],
    created() {
      console.log("Profile.vue: ",this.$route)
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