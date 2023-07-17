import { createRouter, createWebHistory } from 'vue-router'
const routerOptions = [
  { path: "/", component: "LandingPage" },
  { path: "/signin", component: "SignIn" },
  { path: "/signup", component: "SignUp" },
  { path: "/home", component: "HomePage", meta: { requiresAuth: true } },
  { path: "/:catchAll(.*)", component: "NotFound" }
];

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`../components/${route.component}.vue`)
  };
});

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
export default router
