import { createRouter, createWebHistory } from 'vue-router';
import test1 from '../components/test1.vue';

const routes = [
  {
    path: '/test1',
    name: 'test1',
    component: test1,
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
