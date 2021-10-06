import Icon from "@/components/Icon";
import { getComponentRootDom } from "./index";
import style from "./showMessage.module.less";
/**
 *
 * @param {Object} options 配置对象
 * message   String   消息内容    默认""
 * type      String   消息的类型  info  error  success  warn  默认info
 * duration  Number   多久后消失  默认2000ms
 * container HTMLElement   出现在哪个容器 默认body
 * callback  Function    回调函数
 */
function showMessage(options = {}) {
  const message = options.message || "";
  const type = options.type || "info";
  const duration = options.duration || 2000;
  const container = options.container || document.body;
  const callback = options.callback || function() {};

  const div = document.createElement("div");
  const iHtml = getComponentRootDom(Icon, { type }).outerHTML;
  div.innerHTML = `
        ${iHtml}
        <span>${message}</span>
  `;
  if (getComputedStyle(container, null).position === "static") {
    container.style.position = "relative";
  }
  div.className = `${style["showMessage"]} ${style[`showMessage-${type}`]}`;

  container.appendChild(div);

  // 为了有过渡效果，强制重新渲染页面
  div.clientWidth;

  div.style.opacity = "1";
  div.style.transform = "translate(-50%, -50%)";

  setTimeout(() => {
    div.style.opacity = "0";
    div.style.transform = "translate(-50%, -100%)";
    div.addEventListener(
      "transitionend",
      () => {
        div.remove();
        callback();
      },
      { once: true }
    );
  }, duration);
}

export default showMessage;
