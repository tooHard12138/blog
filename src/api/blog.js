import interceptor from "./interceptor";

// 分页获取博客
async function getBlogs(page = 1, limit = 10, categoryId = -1) {
  return await interceptor.get("/api/blog", {
    params: {
      page,
      limit,
      categoryId,
    },
  });
}

// 获取所有博客分类
async function getBlogTypes() {
  return await interceptor.get("/api/blogtype");
}

// 获取单个博客
async function getBlog(id) {
  return await interceptor.get(`/api/blog/${id}`);
}

// 提交评论
async function postComment(comment) {
  return await interceptor.post(`/api/comment`, comment);
}

// 分页获取评论
async function getComments(blogid, page = 1, limit = 10) {
  return await interceptor.get(`/api/comment`, {
    params: {
      blogid,
      page,
      limit,
    },
  });
}

export { getBlogs, getBlogTypes, getBlog, postComment, getComments };
