import url from "@/assets/loading.svg";
import style from "./loading.module.less";
function createLoadingImg() {
  const img = document.createElement("img");
  img.dataset.type = "loading";
  img.src = url;
  img.className = style.center;
  return img;
}

function getLoadingImg(el) {
  return el.querySelector("img[data-type='loading']");
}

export default function(el, bingding) {
  const isImg = getLoadingImg(el);
  if (bingding.value) {
    // 如果没有createLoadingImg元素,就创建
    if (!isImg) {
      el.appendChild(createLoadingImg());
    }
  } else {
    // 如果有createLoadingImg元素,就删除
    if (isImg) {
      isImg.remove();
    }
  }
}
