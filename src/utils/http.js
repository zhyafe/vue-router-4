import ZhyafeAxios from "@zhyafe/axios";

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
