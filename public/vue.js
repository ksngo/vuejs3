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
            samples: ['sample1', 'sample2', 'sample3'],
            attributeone: 'click',
            attributetwo: 'title',
            buttonMessage2: "testing attribute as JS expressions in v-directive argument wrapping in square bracket",
            author: {
                name: 'ks',
                books: [ 'book1', 'book2', 'book3']
            }
        }
    },
    computed: {
        authorName: {
            get() {
                return this.author.name;
            },
            set(name) {
                this.author.name = name;
            }
        }
    },
    created(){

        
        

    },
    mounted() {
        myinterval = setInterval(() => {
            this.counter++;
        }, 1000);

        // the application instance properties
        console.log('this.$data',this.$data) 
        console.log('this.$props',this.$props)
        console.log('this.$el',this.$el)
        console.log('this.$options',this.$options)
        console.log('this.$parent',this.$parent) // there is no parent instance
        console.log('this.$root',this.$root) // since this application instance is the root itself, line 36 and 37 are the same.
        console.log(this)
        console.log('this.$slots',this.$slots)
        console.log('this.$refs',this.$refs) // any tag with ref attributes within the root/component instance(the entirety of the #hello-world component instance) will be in this $refs property
        console.log('this.$attrs',this.$attrs)

    
    },
    methods : {
        stopInterval : function(event) {
            console.log("stopping interval");
            clearInterval(myinterval);
        },
        customAction: function(event) {
            confirm("testing custom attribute to the v-directives")
        }
    }
}

console.log("This file is running")

let vueApp = Vue.createApp(vueAppObj) // new application instance

vueApp.component('sample-component', { // creating a component that have a tag as 'sample-component'
    props: ['sam'], // tag will have attribute 'sam', sam takes in item value....or in this component instance, property of sam is created, it stores the value provided in the <sample-component>'s sam attribute
    template: `<li><span><strong>start sample-component</strong></span> "{{sam}}" <span><strong>end sample-component</strong></span></li>` // <sample-component>'s html template, this component's sam property's value is passed into <li>
})

vueApp.component('sample-component2',{
    data(){
        return {
            sample_component2_data : "something"
        }
    },
    props: ['authorprop'],
    created(){
        this.createdClick = function(){
            confirm('testing created lifecycle click')
        }
    },
    methods: {
        methodClick: function(){
            confirm('testing methods Click')
        }
    },
    computed: {
        isBooksAvailable(){
            return this.authorprop.books.length > 0 ? this.authorprop.books.length : 'no';
            // I could also have use computed property not in this component but in vueAppObj (i.e. the application instance)
        }

    },
    watch: {
        sample_component2_data(newValue, oldValue) {
            if(newValue === "good") {
                confirm("good");
                axios.get(window.location.href, {
                    headers: {"Access-Control-Allow-Origin": "*"}
                })
                .then(response=>{
                    console.log(response.status)
                }).catch(error=>{
                    console.log(error)
                })

            } else {
                confirm(" not good")
            }
        }
    },
    template: ` <h3>start of sample-component2</h3><button @click='methodClick'> Try component's method click </button><br>
    <button @click='createdClick'> Try component's created lifecycle click </button>
    <div>'this' in sample-component2 instance : {{ this }} </div> 
    <div>By JS expressions in template: There are {{ authorprop.books.length > 0 ? authorprop.books.length : 'no'}} books. </div>
    <div>By computed property: There are {{ isBooksAvailable}} books. </div>
    <div> author's name : {{authorprop.name}} </div>
    <div> {{sample_component2_data}} </div>
    <button @click="this.sample_component2_data = 'good'"> change to "good" </button>
    <h3>end of sample-component2</h3>
    `
    //you see, there are no data set in this component instance(i.e. sample-component2); I am using sample-component2 property's 'authorprop' to fetch in the value from the application instance
    // if i use `this` in this scope, it refers to the sample-component2 instance only and not referring to the vueApp instance only
})

vueApp.mount('#hello-world'); // mount the application instance to a new root/component instance; i think under the hood, it will stored into vueApp instance as vueApp.$#hello-world

