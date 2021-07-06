// const Vue = require("vue");
// import Vue from 'vue'

var myinterval;

const vueAppObj = {

    data() {
        return {
            message: "Hello Vue",
            counter: 0,
            buttonMessage: `stop this button at ${new Date().toLocaleString()}`,
            isSick: false,
            complains: '...',
            illnesses: [{text :'fever'}, {text: 'flu'}, {text: 'diarrhea'}],
            samples: ['sample1', 'sample2', 'sample3']
        }
    },
    mounted() {
        myinterval = setInterval(() => {
            this.counter++;
        }, 1000);

    
    },
    methods : {
        stopInterval : function(event) {
            console.log("stopping interval");
            clearInterval(myinterval);
        }
    }
}

console.log("This file is running")

let vueApp = Vue.createApp(vueAppObj)

vueApp.component('sample-component', {
    props: ['sample'],
    template: `<li> {{sample}} </li>`
})

vueApp.mount('#hello-world');

