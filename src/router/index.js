import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "auth",
    component: () => import("../views/auth/Index.vue"),
    children: [
      // Start your routing from here
      {
        path: "/",
        name: "welcome",
        component: () => import("../views/auth/Welcome.vue"),
      },
      {
        path: "/login",
        name: "login",
        component: () => import("../views/auth/Login.vue"),
      },
      {
        path: "/register",
        name: "register",
        component: () => import("../views/auth/Register.vue"),
      },
    ],
  },
  {
    path: "/web",
    component: () => import("../views/web/Index.vue"),
    children: [
      // Start your routing from here
      {
        path: "/web",
        name: "web",
        component: () => import("../views/web/Home.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
