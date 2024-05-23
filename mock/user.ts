import { MockConfig } from "../bin/getConfig";
import { resultPageSuccess, resultSuccess } from "./utils/resultUtil";
import { mock } from "mockjs";
import { getPersonObject } from "./utils/mockDataUtil";

let config: MockConfig[] = [
  {
    url: "/login",
    // method: "post",
    response: (req: any) => {
      return resultSuccess({
        token: "aabbcc",
      });
    },
  },
  {
    url: "/userInfo",
    // method: "get",
    response: (req: any) => {
      return resultSuccess(getPersonObject());
    },
  },
];

export default config;
