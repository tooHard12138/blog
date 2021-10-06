import defaultImg from "@/assets/default.gif";
import bus from "@/eventBus";
import debounce from "@/utils/debounce";

let imgs = [];

function judge(img) {
  const data = img.dom.getBoundingClientRect();
  const height = data.height || 150;
  return data.top > -height && data.top < document.documentElement.clientHeight;
}

function setImg(img) {
  if (judge(img)) {
    const newImg = new Image();
    newImg.onload = function() {
      img.dom.src = img.src;
    };
    newImg.src = img.src;
    imgs = imgs.filter((item) => img.dom !== item.dom);
  }
}

function setImgs() {
  for (const img of imgs) {
    setImg(img);
  }
}

function handleScroll() {
  setImgs();
}

bus.$on("scroll", debounce(handleScroll, 50));

export default {
  inserted(el, bingding) {
    el.src = defaultImg;
    const img = {
      dom: el,
      src: bingding.value,
    };
    imgs.push(img);
    setImg(img);
  },
  unbind(el) {
    imgs = imgs.filter((item) => el !== item.dom);
  },
};
