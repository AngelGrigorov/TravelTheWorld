import { createRouter, createWebHistory } from 'vue-router'
const routerOptions = [
  { path: "/", component: "HomePage" },
  { path: "/login", component: "LoginPage" },
  { path: "/register", component: "RegisterPage" },
  { path: "/home", component: "HomePage", meta: { requiresAuth: true } },
  { path: "/:catchAll(.*)", component: "NotFoundPage" }
];

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`../views/${route.component}.vue`)
  };
});

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
export default router
