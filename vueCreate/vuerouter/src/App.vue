<template>
  <div class='float-right'> App.vue component </div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/user">User</router-link>
  </div>
  <div id="main">
    <router-view name="LeftSidebar"></router-view>
    <router-view class="content"></router-view>
  </div>
</template>

<style>
#main {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "nav content"
}
.content {
  grid-area: content;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border-style: dotted;
  padding: 10px 10px 10px 10px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.float-right {
  float: right;
}
</style>
