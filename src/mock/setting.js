import Mock from "mockjs";
import weixinQrCode from "@/assets/微信二维码.jpg"
import qqQrCode from "@/assets/qq二维码.jpg"

Mock.mock("/api/setting", {
  code: 0,
  msg: "",
  data: {
    avatar: "http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c",
    siteTitle: "五星好市民",
    github: "https://github.com/tooHard12138",
    qq: "1508134609",
    qqQrCode,
    weixin: "18711789258",
    weixinQrCode,
    mail: "tooHard12138@163.com",
    icp: "湘ICP备12138666号",
    githubName: "tooHard12138",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});
