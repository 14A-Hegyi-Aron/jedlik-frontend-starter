import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Index from "src/pages/index.vue";

// === Example imorts ===
import xEmpty from "src/pages/xEmpty.vue";
import xHelp from "src/pages/xHELP.vue";
import xCard from "src/pages/xcard.vue";
import xCarousel from "src/pages/xcarousel.vue";
import xTable from "src/pages/xtable.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: Index,
  },

  // #region === Example routes
  {
    path: "/empty",
    name: "empty",
    component: xEmpty,
  },
  {
    path: "/xtable",
    name: "xtable",
    component: xTable,
  },
  {
    path: "/xcarousel",
    name: "xcarousel",
    component: xCarousel,
  },
  {
    path: "/xcard",
    name: "xcard",
    component: xCard,
  },
  {
    path: "/xhelp",
    name: "qhelp",
    component: xHelp,
  },
  // #endregion
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});
export default router;
