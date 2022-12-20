// file: router/index.js
// 导入相关路由组件对象
// import Overview from '../components/pages/Overview/index.vue'

// 定义路由映射：路由映射到具体组件
import routes from './config/routes';

// 导入相关函数
import { createRouter, createWebHashHistory } from 'vue-router';

// 创建路由实例（`router`）并传递路由映射配置（`route`）
const router = createRouter({
  // 配置导航模式，此处采用 hash 模式
  history: createWebHashHistory(),
  routes,
});

// 导出 router 实例
export default router;