import ZhyafeAxios from "@zhyafe/axios";
console.log("🚀 ~ ZhyafeAxios:", ZhyafeAxios);

let instance = new ZhyafeAxios(
  {
    timeout: 3000,
  },
  {
    isReturnNativeResponse: false,
    isTransformResponse: true,
    errorMessageMode: "message",
  },
  {
    errMessageHandle: (message) => {
      console.log("err-message", message);
    },
    errModalHandle: (message) => {
      console.log("err-modal", message);
    },
    errJudgeHandle: (data) => {
      console.log("🚀 ~ data:", data);
      if (data.code === 0) {
        return { data: data.data };
      }
      return { message: data.msg };
    },
    logoutHandle: () => {
      console.log("logout");
    },
  }
);

export default instance;
