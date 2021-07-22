<template>
  <div class="home"> 
    <div class="float-right">1. router-view component --> Home.vue component if route is / </div><br>
    <div class="float-right">2. Home.vue component has this.$route </div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  created() {
    console.log("Home.vue :",this.$route)
  }
};
</script>

<style scoped>
.home {
  border-style : dotted;
  padding: 10px 10px 10px 10px;
  margin: 10px 10px 10px 10px;
}

.float-right {
  float: right;
}
</style>
