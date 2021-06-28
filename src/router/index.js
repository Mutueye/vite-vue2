import Vue from 'vue';
import VueRouter from 'vue-router';
import routeData from './routeData';

Vue.use(VueRouter);

const recursiveRouteData = routeData => {
  const result = [];
  routeData.forEach(item => {
    if (!item.type) {
      const obj = {
        path: item.path,
        name: item.name,
        component: item.component,
      };
      if (item.redirect) obj.redirect = item.redirect;
      if (item.children && item.children.length > 0) {
        obj.children = recursiveRouteData(item.children);
      }
      result.push(obj);
    }
  });
  return result;
};

const routes = [
  {
    path: '/',
    redirect: routeData[0].path,
  },
  ...recursiveRouteData(routeData),
  // {
  //   path: '/styles',
  //   name: 'styles',
  //   component: () => import('../page/Styles.vue')
  // }
  // {
  //   path: '/components',
  //   name: 'components',
  //   component: () => import('../page/Components.vue')
  // },
  // {
  //   path: '/styles',
  //   name: 'styles',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../page/Styles.vue')
  // },
  // {
  //   path: '/demo',
  //   name: 'demo',
  //   component: () => import('../page/Demo.vue')
  // }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
