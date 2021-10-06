import axios from "axios";
import showMessage from "@/utils/showMessage";

const ins = axios.create();

ins.interceptors.response.use(function(resp) {
  if (resp.data.code !== 0) {
    showMessage({
      message: resp.data.msg,
      type: "error",
    });
    return null;
  }
  return resp.data.data;
});

export default ins;
