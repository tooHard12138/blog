import interceptor from "./interceptor";

async function getProject() {
  return await interceptor.get("/api/project");
}

export { getProject };
