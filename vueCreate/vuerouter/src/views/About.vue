<template>
  <div class="about">
    <div class='float-right'>1. router-view component --> About.vue component if route is /about </div><br>
    <div class="float-right">2. About.vue component has this.$route </div>
    <div>
      <h1>This is about page(Testing VueX)</h1>
      <button @click='vuexIncrement()'>increment normal count</button><br>
      <label> countNormal in vueX's state: {{countNormal}}</label>
      <br><br>
      <button @click='vuexDecrement()'>decrement mapState's count</button><br>
      <label> count by mapState to vueX's state(arrow function expression): {{countByMapState}}</label><br>
      <label> count by mapState to vueX's state(expressed by string): {{countByMapStateAlias}}</label><br>
      <label> count by mapState to vueX's state(with logic on local data): {{countByMapStateAccessLocalData}}</label>
      <br><br>
      <label> tasks by mapGetters : {{tasksDone}}</label><br>
      <label> tasks Id by mapGetters : {{tasksDone.map((task)=>task.id)}}</label> <br>
      <label> task query by Id: {{tasksDoneQuery(chosenId) }}</label>
      <input type='number' v-model='chosenId' @keyup="vuexMutateId($event, chosenId)"/>
    </div>
  </div>
</template>

<script>

import {RouterLink} from 'vue-router'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

  export default {
    name: "About",
    created() {
      console.log("About.vue: ",this.$route)
      console.log("RouterLink.props", RouterLink.props)
    },
    data() {
      return {
        localCount: 110,
        chosenId: 1
      }
    },
    methods: {
      vuexIncrement() {
        this.$store.commit('increment') // only able to change vueX state by $store.commit
      },
      vuexDecrement() {
        this.$store.commit('decrement') // Either use $store.commit in methods option to commit mutations in the store(vueX) or use ...mapMutations helper in computed option 
      },
      vuexMutateId(event, id) {
        console.log('hello mutate')
        console.log(event)
        console.log(id)
        this.$store.commit('mutateId', id)
      }
    },
    computed: {
      countNormal() {
        return this.$store.state.countNormal
      },
      ...mapState({
        countByMapState: state=> state.countByMapState,
        countByMapStateAlias: 'countByMapState',
        countByMapStateAccessLocalData(state) {
          return state.countByMapState + this.localCount
        }

      }),
      ...mapGetters({
        tasksDone: 'tasksDoneByMapGetters',
        tasksDoneQuery: 'tasksQueryByMapGetters'
      }),
      ...mapActions({
        //either use mapActions helper in computed option or use $store.dispatch('anAction') to trigger action in the store's actions property.
        //the action can returned a resolved promise, hence $store.dispatch('anAction').then(()=>{...}) is ok
        //$store.dispatch('anAction') means running anAction method in store's instance actions props. IN the anAction method, access to mutations is via context.commit('aMutation') 
        //or access to action is via context.dispatch('anAction')
        //***Remember that $store.dispatch('anAction') is for running store's instance actions action
      }),
      ...mapMutations({
        //or use $store.commit('aMutation') to trigger mutation in the store's mutations property
        //$store.commit('aMutation') means running aMutation method in store's instance mutation props. In the aMutation method, access to state is via state.aParticularState
        //$store.commit('aMutation', value). The value will be passed to aMutation method as argument.
        //***Remember that $store.commit('aMutation') is for running store's instance mutations mutation
      })
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
