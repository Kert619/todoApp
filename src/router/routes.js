const routes = [
  {
    path: "/tasks",
    component: () => import("../views/TasksPage.vue"),
    name: "tasks",
    meta: {
      auth: true,
    },
  },
  {
    path: "/login",
    component: () => import("../views/LoginPage.vue"),
    name: "login",
  },
  {
    path: "/register",
    component: () => import("../views/RegisterPage.vue"),
    name: "register",
  },
  {
    path: "/summary",
    component: () => import("../views/SummaryPage.vue"),
    name: "summary",
    meta: {
      auth: true,
    },
  },
  {
    path: "/:notFound(.*)",
    name: "error.404",
    component: () => import("../views/errors/NotFoundErrorPage.vue"),
  },
];

export default routes;
