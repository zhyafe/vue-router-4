import { App } from "vue";
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import LoginView from "@/views/login/index.vue";

function setupRouter(app: App<Element>) {
  const routes: RouteRecordRaw[] = [
    {
      path: "/login",
      name: "login",
      //   component: () => import("@/views/login/index.vue"),
      component: LoginView,
    },
  ];
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  app.use(router);
}

export default setupRouter;
