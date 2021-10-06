import interceptor from "./interceptor";

// 提交评论
async function postMessage(message) {
  return await interceptor.post(`/api/message`, message);
}

// 分页获取评论
async function getMessages(page = 1, limit = 10) {
  return await interceptor.get(`/api/message`, {
    params: {
      page,
      limit,
    },
  });
}

export { postMessage, getMessages };


// import request from "./request";

// export async function getMessages(page = 1, limit = 10) {
//   return await request.get("/api/message", {
//     params: {
//       page,
//       limit,
//     },
//   });
// }

// export async function postMessage(msgInfo) {
//   return await request.post("/api/message", msgInfo);
// }
