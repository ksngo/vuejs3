<template>
    <div class='user'>
        <div class='float-right'>1. router-view component --> User.vue component if route is /user/:name? </div><br>
        <div class="float-right">2. User.vue component has this.$route </div>
        <div>
            <p v-if="$route.params.name"> 
                User : {{$route.params.name}} 
                <router-link :to="{ path: `/user/${username}/profile`}">Profile</router-link> | 
                <router-link :to="{ path: `/user/${username}/posts`}">Posts</router-link>
                <router-view></router-view>
            </p>
            <p v-else> <input v-model="username" placeholder="Insert a name"> <button @click="$router.push({name: 'User', params: {name: username}})" > Submit </button>
            </p>
        </div>
    </div>
</template>

<script>
  export default {
    name: "User",
    data() {
        return {
            username: ""
        }
    },
    created() {
      console.log("User.vue, this.$route: ",this.$route)
      console.log("User.vue, this.$route.params : ",this.$route.params)
    },
    watch: {
        $route(to, from) {
            console.log("to: ",to)
            console.log("from: ",from)
            console.log(this.$router.resolve({name: 'User', params: {name: this.username}}).href)
        }
    }
  }
</script>

<style scoped>
  .user {
    border-style: dotted;
    padding: 10px 10px 10px 10px;
  }
  .float-right {
    float: right;
  }
</style>
