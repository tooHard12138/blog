import Vue from "vue";
const bus = new Vue({});
Vue.prototype.$bus = bus;
export default bus;

/*
 * 事件名：scroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 * - 滚动的dom元素
 *
 */

/*
 * 事件名：showTop
 * 含义：主区域滚动条位置变化后触发， 判断什么时候显示ToTop组件
 * 参数：
 * - 滚动的dom元素。如果是undefined， 则表示dom元素已经不存在，则不显示ToTop组件
 *
 */

/*
 * 事件名：toTop
 * 含义：点击ToTop组件时触发， 设置主区域滚动条为0
 * 参数：
 * - 无参数
 *
 */
