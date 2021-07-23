<template>
  <div class="about">
    <div class='float-right'>1. router-view component --> Profile.vue component if route is /user/:name/profile </div><br>
    <div class="float-right">2. Profile.vue component has this.$route </div> <br>
    <div>
      <ul>
        <li> Name: {{$route.params.name}}  </li>
        <li> sex: </li>
        <li> age: </li>
        <li> {{passingValueAsPropstoProfileComponent}} </li>
        <li> {{route}} </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    created() {
      console.log("Profile.vue: ",this.$route)
    },
    props: ['passingValueAsPropstoProfileComponent', 'route'],
    watch: {
        '$route'(newValue, oldValue) {
            console.log("Profile.vue: newValue", newValue)
            console.log("Profile.vue: oldValue",oldValue)
        }
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