### 占位符

Basic : boolean, natural, integer, float, character, string, range, date, time, datetime, now
Image : image, dataImage
Color : color
Text : paragraph, sentence, word, title, cparagraph, csentence, cword, ctitle
Name : first, last, name, cfirst, clast, cname
Web : url, domain, email, ip, tld
Address : area, region
Helper : capitalize, upper, lower, pick, shuffle
Miscellaneous : guid, id

### 模板语法示例

```js
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
  obj: {
    name: "@cname",
  },
});
```
