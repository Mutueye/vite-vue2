/**
 * 菜单&路由根据此处数组生成
 * 约定1: 为方便解析和定位，path和name使用相同的命名
 * 约定2: 目前侧边栏仅支持一层，因此children下不能再包含children
 */
const routeData = [
  {
    path: '/conventions',
    name: 'conventions',
    title: '规范',
    component: () => import('../page/ContentPage.vue'),
    children: [
      {
        // 通过空路由+redirect自动跳转到左侧菜单的第一个路由
        path: '',
        redirect: 'naming',
      },
      {
        type: 'title',
        title: 'Vue',
      },
      {
        path: 'naming',
        name: 'naming',
        title: 'Vue命名规范',
        component: () => import('../page/conventions/Naming.vue'),
      },
      {
        path: 'module',
        name: 'module',
        title: '业务模块',
        component: () => import('../page/conventions/Module.vue'),
      },
      {
        path: 'script',
        name: 'script',
        title: 'Vue Script',
        component: () => import('../page/conventions/VueJs.vue'),
      },
      {
        path: 'template',
        name: 'template',
        title: 'DOM模版',
        component: () => import('../page/conventions/VueTemplate.vue'),
      },
      {
        type: 'title',
        title: 'UI',
      },
      {
        path: 'design-principle',
        name: 'design-principle',
        title: '设计规范',
        component: () => import('../page/conventions/DesignPrinciple.vue'),
      },
    ],
  },
  {
    path: '/styles',
    name: 'styles',
    title: '样式',
    component: () => import('../page/ContentPage.vue'),
    children: [
      {
        // 通过空路由+redirect自动跳转到左侧菜单的第一个路由
        path: '',
        redirect: 'style-library',
      },
      {
        path: 'style-library',
        name: 'style-library',
        title: '全局样式库',
        component: () => import('../page/styles/StyleLibrary/index.vue'),
      },
    ],
  },
  {
    path: '/components',
    name: 'components',
    title: '组件',
    component: () => import('../page/ContentPage.vue'),
    children: [
      {
        path: '',
        redirect: 'empty-info',
      },
      {
        type: 'title',
        title: '基本',
      },
      {
        path: 'empty-info',
        name: 'empty-info',
        title: 'EmptyInfo 空白提示',
        component: () => import('../page/components/EmptyInfo.vue'),
      },
    ],
  },
  {
    path: '/demos',
    name: 'demos',
    title: '示例',
    component: () => import('../page/ContentPage.vue'),
    children: [
      {
        path: '',
        redirect: 'layout',
      },
      {
        type: 'title',
        title: '布局',
      },
      {
        path: 'layout',
        name: 'layout',
        title: '布局',
        component: () => import('../page/demos/Layout.vue'),
      },
      {
        type: 'title',
        title: '装饰',
      },
      {
        type: 'title',
        title: '组件',
      },
    ],
  },
];

export default routeData;
