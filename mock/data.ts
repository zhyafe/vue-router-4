import { MockConfig } from "@zhyafe/mock";
import { resultSuccess, resultPageSuccess } from "./utils/resultUtil";
import { mock } from "mockjs";
import { getPersonArray, getPersonObject } from "./utils/mockDataUtil";

let config: MockConfig[] = [
  {
    url: "/page",
    // method: "get",
    response: (req: any) => {
      const { page } = req;
      return new Promise((res, ref) => {
        setTimeout(() => {
          res(
            resultPageSuccess(page.pageIndex, page.pageSize, getPersonArray())
          );
        }, 1000);
      });
    },
  },
  {
    url: "/array",
    // method: "get",
    response: (req: any) => {
      return resultSuccess(getPersonArray());
    },
  },
  {
    url: "/object",
    // method: "get",
    response: (req: any) => {
      return resultSuccess(getPersonObject());
    },
  },
];

export default config;
