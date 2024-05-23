import { resultError, resultSuccess } from "./utils/resultUtil";

let errObj: any = {
  401: "用户没有权限（令牌、用户名、密码错误）!",
  403: "用户得到授权，但是访问是被禁止的。!",
  404: "网络请求错误,未找到该资源!",
  405: "网络请求错误,请求方法未允许!",
  408: "网络请求超时!",
  500: "服务器错误,请联系管理员!",
  501: "网络未实现!",
  502: "网络错误!",
  503: "服务不可用，服务器暂时过载或维护!",
  504: "网络超时!",
  505: "http版本不支持该请求!",
};

export default [
  {
    url: "/timeout",
    // method: "get",
    status: 200,
    response: async (req: any) => {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(1);
        }, 20000);
      });
      return resultSuccess([{ name: "timeout" }]);
    },
  },
  {
    url: "/err",
    // method: "get",
    status: 555,
    response: (req: any) => {
      return resultError("错误");
    },
  },
  {
    url: "/400",
    // method: "get",
    status: 400,
    response: (req: any) => {
      return resultError("客户端错误");
    },
  },
  ...Object.keys(errObj).map((item) => {
    return {
      url: `/${item}`,
      // method: "get",
      status: item,
      response: (req: any) => {
        return resultError(errObj[item]);
      },
    };
  }),
];
