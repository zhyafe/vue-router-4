import { App } from "vue";
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import setupGuard from "./guard";

function setupRouter(app: App<Element>) {
  const routes: RouteRecordRaw[] = [
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/index.vue"),
    },
    {
      path: "/",
      name: "root",
      component: () => import("@/views/layout/index.vue"),
      redirect: "/dashboard",
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: () => import("@/views/dashboard/index.vue"),
        },
      ],
    },
  ];
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  setupGuard(router);

  app.use(router);
}

export default setupRouter;
