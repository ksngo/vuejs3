<template>
  <div class="float-left">
      LeftSidebar.vue
    <ul>
        <li> One </li>
        <li> Two </li>
        <li> Three </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "LeftSidebar",
    created() {
      console.log("LeftSidebar.vue: ",this.$route)
    }
  }
</script>

<style scoped>
  .float-left {
    /* float: left;
    width: 100px;
    border-style: dotted;
    padding: 10px 10px 10px 10px;
    margin: 10px 10px 10px 10px;
    margin-bottom: -1000px;
    padding-bottom: 100%; */
    grid-area: nav;
    border: 1px dotted;
    margin-right: 0.75rem;
    padding: 0.3rem;
  }
</style>
