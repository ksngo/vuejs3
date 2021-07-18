// const Vue = require("vue");
// import Vue from 'vue'


var myinterval;

const localComponentA = {
    template: `<div> I am a local Component instead of the global components that are built before me </div>`
}

//remember, props shouldn't be camelcase
const localComponentB = {
    props: ['paramone', 'interest', 'passion'],
    template: `<div> props value:  {{interest && passion? interest +","+ passion : paramone}} {{paramone && paramone.interest? paramone.interest+','+paramone.passion: ''}} ==> <slot></slot> </div>`
}

const vueAppObj = {

    components: {
        'local-component-a' : localComponentA,
        'local-component-b' : localComponentB
    },

    data() {
        return {
            message: "Hello Vue",
            counter: 0,
            buttonMessage: `stop this button at ${new Date().toLocaleString()}`,
            isSick: false,
            complains: '...',
            illnesses: [{text :'fever'}, {text: 'flu'}, {text: 'diarrhea'}],
            medicinesObj: {
                name: "panadol",
                manufacturer: 'gsk global',
                date: new Date().toLocaleDateString()
            },
            participants: [ {name: "john", age: 22}, {name: "mary", age: 25}, {name : "alice" , age: 55}, { name: "darth vadar", age: 24} ],
            samples: ['sample1', 'sample2', 'sample3'],
            attributeone: 'click',
            attributetwo: 'title',
            buttonMessage2: "testing attribute as JS expressions in v-directive argument wrapping in square bracket",
            author: {
                name: 'ks',
                books: [ 'book1', 'book2', 'book3']
            },
            redClass: { red : true},
            isBlue: true,
            purpleClass: 'purple',
            borderDotted: 'borderDotted',
            activeColor: 'red',
            fontSize: 13,
            styleObject: {color: 'blue', fontSize: '13px'},
            styleObject2: {borderStyle: 'dotted'},
            appInstanceToLearnItems: ["vuejs", "reactjs", "javascript", "python"],
            tolearnInput: "",
            keyModifiers: ["enter","tab","delete","escape","space","arrowup","arrowdown","arrowleft","arrowright"],
            keyupeventsname: "keyup.enter",
            testVmodel: "",
            testManualBinding: "",
            sampleComponent6Input: "",
            sampleComponent7Input: "",
            interestPassionOBj: {interest: 'soccer', passion: 'music'}
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
        },
        filterYoungerParticipants() {
            return this.participants.filter((person)=> {
                return person.age <= 30
            })
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
        },
        inputChange(event) {
            console.log(event.target.value)
        },
        submitNewToLearn() {
            this.appInstanceToLearnItems.push(this.tolearnInput);
            this.tolearnInput = "";
        },
        doOne(event) {
            console.log(event)
        },
        doTwo(event) {
            console.log(event)
        },
        tryEnterKeyModifiers(event) {
            console.log(event)
        },
        tryDeleteKeyModifiers(event) {
            console.log(event)
        },
        tryDifferentKeyModifiers(event, modifier){
            // console.log(modifier)
            // console.log(event.key.toLowerCase())
            if(event.key.toLowerCase() === modifier){
                console.log(event)
            }
        },
        bindToData(event) {
            console.log(event.target.value)
            this.testManualBinding = event.target.value;
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
    template: ` <h5>start of sample-component2 &#x2935;</h5><button @click='methodClick'> Try component's method click </button><br>
    <button @click='createdClick'> Try component's created lifecycle click </button>
    <div>'this' in sample-component2 instance : {{ this }} </div> 
    <div>By JS expressions in template: There are {{ authorprop.books.length > 0 ? authorprop.books.length : 'no'}} books. </div>
    <div>By computed property: There are {{ isBooksAvailable}} books. </div>
    <div> author's name : {{authorprop.name}} </div>
    <div> {{sample_component2_data}} </div>
    <button @click="this.sample_component2_data = 'good'"> change to "good" </button>
    <h5>end of sample-component2 &#x2934;</h5>
    `
    //you see, there are no data set in this component instance(i.e. sample-component2); I am using sample-component2 property's 'authorprop' to fetch in the value from the application instance
    // if i use `this` in this scope, it refers to the sample-component2 instance only and not referring to the vueApp instance only
})

vueApp.component('sample-component3', {
    props: ['testprop'],
    created(){
        console.log("sample-component3 instance's $attrs:", this.$attrs)
        console.log("location of testprop in instance:", this.testprop)
    },
    template: `
    <h5>start of sample-component3 &#x2935;</h5>
    <p :class="$attrs.class"> class inheritance from component to a target root element, this is done through $attrs </p>
    <p :class="$attrs.class"> props value(testprop): {{testprop}} </p>
    <h5>end of sample-component3 &#x2934;</h5>
    `
})
// this.$attrs is a property in the component instance. 
// it stores the attributes found in <sample-component3>
// the attributes can be props defined in the component
// or the attributes can be non-prop, meaning the props are not defined in the component
// this.$attrs or $attrs seem fine

vueApp.component('sample-component4', {
    data() {
        return {
            placeholder : "sample-component4"
        }
    },
    template: `
        <div> <h5>start of sample-component4 &#x2935;</h5>
        <blockquote open>
        &#x2935; <br>
        1. inheriting attribute from component to root element. (don't confuse with root instance; root element is found inside template within the component; root instance is the Vue application instance) <br>
        2. This is a non-prop attribute as it is not defined in the component in props/emits. <br>
        3. Notice that the method has to be placed in the application instance instead of the sample-component-4 instance.
        </blockquote>
        <input size="50" :placeholder='placeholder'/>
        <h5>end of sample-component4 &#x2934;</h5></div>
    `
})

vueApp.component('sample-component5', {
    inheritAttrs: false,
    data() {
        return {
            placeholder : "sample-component5"
        }
    },
    created() {
        console.log("sample-component5 instance's $attrs:", this.$attrs)
    },
    template: `
        <div> <h5>start of sample-component5 &#x2935;</h5>
        <blockquote open>
        &#x2935; <br>
        1. Difference from sample-component4 <br>
        2. placing inheritAttrs to false will prevent default inheriting attributes from component to root element(i.e div in this case) <br>
        3. to target specific &lt;input&gt; element, add v-bind="$attrs"
        </blockquote>
        <input size="50" :placeholder='placeholder' v-bind="$attrs"/>
        <h5>end of sample-component5 &#x2934;</h5></div>
    `
})

vueApp.component('to-do-component', {
    data(){
        return {
            todoItems: ["sleep", "cry", "pray"],
            inputToDo: ""
        }
    },
    methods: {
        submitToDoForm(event){
            console.log(event)
            this.todoItems.push(this.inputToDo);
            this.inputToDo = "";
        }, 
        remove(index){
            this.todoItems.splice(index,1)
        }
    },
    template: `
    <h5>start of to-do-component &#x2935;</h5>
    <form @submit.prevent="submitToDoForm">
        <label for="todo"> Add to todo </label>
        <input id="todo" placeholder="E.g. clean car" v-model="inputToDo"/>
        <input type="submit" value="Add"/>
    </form>
    <ul>
        <li v-for="(item, index) in todoItems" :key="index" > {{item}} 
        <button @click="remove(index)" >Remove by Method</button> 
        </li>
    </ul>
    <blockquote open>&#x2934;<br> 1.remove by method </blockquote>
    <h5>end of to-do-component &#x2934;</h5>
    `
})

vueApp.component("to-learn-component", {
    props: ['item'],
    emits: ['destroy'],
    template: `
        <li>  {{item}}  <button @click="$emit('destroy')"> Remove by event emitter </button> </li>
    `
})

vueApp.component("sample-component6", {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    template: `
        <input @input="$emit('update:modelValue', $event.target.value)"/>
        <label> Output: {{modelValue}} </label>
    `
})

vueApp.component("sample-component7", {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    template: `
        <input @input="$emit('update:modelValue', $event.target.value)"/>
        <label> Output: {{modelValue}} </label>
    `
})

vueApp.component("sample-component8", {
    data() {
        return {
            sampleComponent8Msg : "hello 8"
        }
    },
    template: `
        <div> <strong> Passing content into component tags by using &lt;slot&gt; :</strong>  <slot>Default Value</slot></div>
    `
})

vueApp.component("sample-component9", {
    template: `
        <div>
            <strong><slot></slot></strong> <br>
            <slot name="sentenceone"> </slot> <br>
            <slot name="sentencetwo"> </slot> <br>
            <slot name="sentencethree"> </slot>
            
        </div>
    `
})

vueApp.component("sample-component10", {
    data() {
        return {
            sampleComponent10Msg: "sampleComponent10Msg"
        }
    },
    template: `
        <div>
            <strong><slot></slot></strong> <br>
            <slot name="sentenceone" :customattribute="sampleComponent10Msg"> </slot>
        </div>
    `
})

vueApp.component("todo-list", {
    data() {
        return {
            user: "a_user"
        }
    },
    provide() {
        return {
            user : this.user
        }
    },
    template: `
    <div class="borderDotted">
        <small>todo-list </small><br><br/>
        <todo-item></todo-item>
        <todo-list-footer></todo-list-footer>
    </div>
    `
})

vueApp.component("todo-item", {
    data() {
        return {
            todoItems: ['Nothing', 'Nothing2', 'nothing3'],
            inputstream: ""
        }
    },
    methods: {
        submitForm(event) {
            this.todoItems.push(this.inputstream);
            this.inputstream = "";
            //submit event is normal html event, we use v-on:submit and preventdefault to trigger this function when form is submitted.
        },
        remove(index) {
            this.todoItems.splice(index,1);
        }
    },
    template: `
        <div class="borderDotted"> 
        <small>todo-item </small><br><br/>
            <form @submit.prevent='submitForm'>
                <label for="todo"> </label>
                <input id='todo' type='text' v-model='inputstream' >
                <input type='submit' value='add'>
            </form>
            <br>

            <ol>
                <li v-for="(item, index) in todoItems" id="index" > {{index}}-{{item}} <button @click="remove(index)"> Remove</button></li>
            </ol>

        </div>
    `
})

vueApp.component("todo-list-footer", {
    data() {
        return {

        }
    },
    template: `
        <div class="borderDotted"> 
        <small> todo-list-footer </small> <br><br/>
            <h6>Footer</h6>
            <todo-list-statistics></todo-list-statistics> 
        </div>
    `
})

vueApp.component("todo-list-statistics", {
    data() {
        return {

        }
    },
    inject: ['user'],
    template: `
        <div class="borderDotted"> 
        <small>todo-list-statistics</small> <br><br/>    
            statistics for {{this.user}} 
        </div>
    `
})






vueApp.mount('#hello-world'); // mount the application instance to a new root/component instance; i think under the hood, it will stored into vueApp instance as vueApp.$#hello-world

