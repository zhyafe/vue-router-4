export default function setupGuard(router) {
  router.beforeEach((to, from) => {
    console.log("🚀 ~ from:", from);
    console.log("🚀 ~ to:", to);
    //白名单
    if (["login", "register"].includes(to.name)) {
      return true;
    }

    if (!localStorage.getItem("token")) {
      return { name: "login" };
    }
    // ...
    // 返回 false 以取消导航
    // return false;
  });
}
