import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue";
import Account from "../views/Account.vue";
import AppContent from "../views/AppContent";

const routes = [
  {
    path: "/",
    name: "AppContent",
    component: AppContent,

    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "/account",
        name: "Account",
        component: Account,
      },
    ],
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
