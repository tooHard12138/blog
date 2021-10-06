function setTitle(routeTitle, webTitle) {
  if (!routeTitle && !webTitle) {
    document.title = "loading...";
  } else if (routeTitle && !webTitle) {
    document.title = routeTitle;
  } else if (!routeTitle && webTitle) {
    document.title = webTitle;
  } else if (routeTitle && webTitle) {
    document.title = `${routeTitle}-${webTitle}`;
  }
}

let routeTitle = "";
let webTitle = "";

export default {
  setRouteTitle(title) {
    routeTitle = title;
    setTitle(routeTitle, webTitle);
  },
  setWebTitle(title) {
    webTitle = title;
    setTitle(routeTitle, webTitle);
  },
};
