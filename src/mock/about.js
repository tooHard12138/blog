import Mock from "mockjs";

Mock.mock("/api/about", {
  code: 0,
  msg: "",
  data: "https://www.baidu.com/",
});
