import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue"
import Profile from "../views/user/Profile.vue"
import Posts from "../views/user/Posts.vue"
import LeftSidebar from "../views/LeftSidebar.vue"
import checkUserAccess from "../myutility/login.js"

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      default: Home,
      LeftSidebar
    },
    alias: '/homealias'
  },
  {
    path: "/home",
    redirect: to => {
      console.log("to :",to);
      return "/"
    }
  },
  {
    path: "/:catchAll(.*)*",
    // . is any character, * is 0 or more.
    // additional * after parentheses is another layer of regex
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/user/:name?",
    name: "User",
    component: () =>
    import(/* webpackChunkName: "user" */ "../views/User.vue"),
    children: [
      {
        path: 'profile',
        component: Profile,
        props: (route)=> ({ passingValueAsPropstoProfileComponent: "passingValueAsPropstoProfileComponent is successful", route})
      },
      {
        path: 'posts',
        component: Posts,
        props: true
      },

    ],
    meta: {requiresAuth: true}
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to,from)=>{

  let canAccess;
  console.log("from",from)

  if(to.meta.requiresAuth) {
    canAccess = await checkUserAccess(to);
    if(!canAccess) return '/'
  }

})

console.log(router.getRoutes())



export default router;
