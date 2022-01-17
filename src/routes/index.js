import {
    createWebHistory,
    createRouter
} from "vue-router";


// import Home from "../components/VueRouter/Home.vue"
// import About from "../components/VueRouter/About.vue"
// import Contact from "../components/VueRouter/Contact.vue"

// import Home from "../components/DynamicRouteSuspense/pages/Home.vue"
// import About from "../components/DynamicRouteSuspense/pages/About.vue"
// import Contact from "../components/DynamicRouteSuspense/pages/Contact.vue"
// import Posts from "../components/DynamicRouteSuspense/pages/Posts.vue"
// import Post from "../components/DynamicRouteSuspense/pages/Post.vue"

// import Login from "../components/NestedRouteLayout/layouts/Login.vue"
// import Dashboard from "../components/NestedRouteLayout/layouts/Dashboard.vue"
// import Home from "../components/NestedRouteLayout/pages/Home.vue"
// import About from "../components/NestedRouteLayout/pages/About.vue"
// import Contact from "../components/NestedRouteLayout/pages/Contact.vue"
// import Posts from "../components/NestedRouteLayout/pages/Posts.vue"
// import Post from "../components/NestedRouteLayout/pages/Post.vue"

// import Login from "../components/NavGuards/layouts/Login.vue"
// import Dashboard from "../components/NavGuards/layouts/Dashboard.vue"
// import Home from "../components/NavGuards/pages/Home.vue"
// import About from "../components/NavGuards/pages/About.vue"
// import Contact from "../components/NavGuards/pages/Contact.vue"
// import Posts from "../components/NavGuards/pages/Posts.vue"
// import Post from "../components/NavGuards/pages/Post.vue"

// import Login from "../components/VuexStateMutations/layouts/Login.vue"
// import Dashboard from "../components/VuexStateMutations/layouts/Dashboard.vue"
// import Home from "../components/VuexStateMutations/pages/Home.vue"
// import About from "../components/VuexStateMutations/pages/About.vue"
// import Contact from "../components/VuexStateMutations/pages/Contact.vue"
// import Posts from "../components/VuexStateMutations/pages/Posts.vue"
// import Post from "../components/VuexStateMutations/pages/Post.vue"

// import Login from "../components/VuexActions/layouts/Login.vue"
// import Dashboard from "../components/VuexActions/layouts/Dashboard.vue"
// import Home from "../components/VuexActions/pages/Home.vue"
// import About from "../components/VuexActions/pages/About.vue"
// import Contact from "../components/VuexActions/pages/Contact.vue"
// import Posts from "../components/VuexActions/pages/Posts.vue"
// import Post from "../components/VuexActions/pages/Post.vue"

// import Login from "../components/VuexMap/layouts/Login.vue"
// import Dashboard from "../components/VuexMap/layouts/Dashboard.vue"
// import Home from "../components/VuexMap/pages/Home.vue"
// import About from "../components/VuexMap/pages/About.vue"
// import Contact from "../components/VuexMap/pages/Contact.vue"
// import Posts from "../components/VuexMap/pages/Posts.vue"
// import Post from "../components/VuexMap/pages/Post.vue"

// import Login from "../components/VuexModules/layouts/Login.vue"
// import Dashboard from "../components/VuexModules/layouts/Dashboard.vue"
// import Home from "../components/VuexModules/pages/Home.vue"
// import About from "../components/VuexModules/pages/About.vue"
// import Contact from "../components/VuexModules/pages/Contact.vue"
// import Posts from "../components/VuexModules/pages/Posts.vue"
// import Post from "../components/VuexModules/pages/Post.vue"

import Login from "../components/ScriptSetup/layouts/Login.vue"
import Dashboard from "../components/ScriptSetup/layouts/Dashboard.vue"
import Home from "../components/ScriptSetup/pages/Home.vue"
import About from "../components/ScriptSetup/pages/About.vue"
import Contact from "../components/ScriptSetup/pages/Contact.vue"
import Posts from "../components/ScriptSetup/pages/Posts.vue"
import Post from "../components/ScriptSetup/pages/Post.vue"

const routes = [{
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        children: [{
                path: '',
                name: 'Home',
                component: Home
            },
            {
                path: 'about',
                name: 'About',
                component: About
            },
            {
                path: 'contact',
                name: 'Contact',
                component: Contact
            },
            {
                path: 'posts',
                name: 'Posts',
                component: Posts,
                beforeEnter:(to,from)=>{
                    console.log("saya mau masuk ke halaman post")
                }
            },
            {
                path: 'posts/:id',
                name: 'Post',
                component: Post
            }
        ]
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

router.beforeEach((to, from, next) => {

    const isAuth = JSON.parse(localStorage.getItem('auth'));

    if (to.name !== "Login" && !isAuth) {
        next({
            name: 'Login'
        })
    } else if (to.name == "Login" && isAuth) {
        next({
            name: 'Home'
        })
    } else {
        next()
    }


})