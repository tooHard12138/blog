import interceptor from "./interceptor";

async function getSetting() {
  return await interceptor.get("/api/setting");
}

export { getSetting };
