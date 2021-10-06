import interceptor from "./interceptor";

async function getAbout() {
  return await interceptor.get("/api/about");
}

export { getAbout };
