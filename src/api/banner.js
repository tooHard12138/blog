import interceptor from "./interceptor";

async function getBanners() {
  return await interceptor.get("/api/banner");
}

export { getBanners };
