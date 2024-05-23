import { Random, mock } from "mockjs";

const template = mock({
  "arr|66": [
    {
      status: "@boolean",
      createTime: "@date",
      updateTime: "@date",
      "id|+1": 1,
      username: "@cname",
      email: "@email",
      image: "@image",
      title: "@ctitle",
    },
  ],
});

export function getPersonObject(isRandom = true) {
  return isRandom
    ? mock({
        status: "@boolean",
        createTime: "@date",
        updateTime: "@date",
        "id|+1": 1,
        username: "@cname",
        email: "@email",
        image: "@image",
        title: "@ctitle",
      })
    : template.arr[0];
}

export function getPersonArray() {
  return template.arr;
}
