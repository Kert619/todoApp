import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  routes,
  history: createWebHistory(),
  linkActiveClass: "font-bold",
});

router.beforeEach((to, from) => {
  if (to.meta.auth) {
    return { name: "login", query: { redirect: to.fullPath } };
  }
});

export default router;
