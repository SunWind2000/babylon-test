import { createRouter, createWebHistory } from 'vue-router';
import test1 from '../components/test1.vue';

const routes = [
  {
    path: '/test1',
    name: 'test1',
    component: test1,
  },
  {
    path: '/test2-1',
    name: 'test2-1',
    component: () => import('../components/test2_1.vue'),
  },
  {
    path: '/test2-2',
    name: 'test2-2',
    component: () => import('../components/test2_2.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/',
    redirect: 'test1',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
