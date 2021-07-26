import { createStore } from "vuex";

export default createStore({
  state: {
    countNormal: 0,
    countByMapState: 10,
    tasksByMapGetters: [ 
      {id:1 , text: '...', done: true},
      {id:2 , text: '...', done: false},
      {id:3 , text: '...', done: true},
      {id:4 , text: '...', done: false}
    ],
    chosenId: 1
  },
  mutations: { //mutations are for mutating the state in vueX; mutations are synchronous, should not have asynchronous in each mutation
    increment(state) {
      state.countNormal++
    },
    decrement (state) {
      state.countByMapState--
    },
    mutateId(state, id) {
      console.log('vuex state chosenId before:', state.chosenId)
      state.chosenId = id
      console.log('vuex state chosenId after:', state.chosenId)
    }
  },
  actions: {
    //actions are for commiting mutations; e.g. context.commit('increment') ; actions can have asynchronous operations inside the action
  }, 
  modules: {},
  getters: { // getters can perform further logics onto the state
    tasksDoneByMapGetters(state) {
      return state.tasksByMapGetters.filter((task)=> task.done === true)
    },
    tasksQueryByMapGetters: (state)=> (id)=>{
      return state.tasksByMapGetters.find(task=> task.id === id)
    }
  }
});
