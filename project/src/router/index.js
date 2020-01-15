import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CSStagram from "../views/CSStagram.vue";
import NewPost from "../views/NewPost.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "Accueil - Home"
    },
    component: Home
  },
  {
    path: "/about",
    name: "about",
    meta: {
      title: "Project - About"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/csstagram",
    name: "csstagram",
    meta: {
      title: "CSStagram - Atelier"
    },
    component: CSStagram
  },
  {
    path: "/newpost",
    name: "newpost",
    component: NewPost
  },
];


const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

const DEFAULT_TITLE = "Oui Oui";
router.afterEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});

export default router;
