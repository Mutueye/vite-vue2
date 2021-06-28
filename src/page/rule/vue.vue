<template>
  <div>
    <MarkdownContent :content="contents[0]" :useHeaderOffset="true" />
    <!-- <MarkdownContent :content="contents[1]" :useHeaderOffset="true" /> -->
  </div>
</template>

<script>
/* eslint-disable no-undef */
import MarkdownContent from '@/components/MarkdownContent.vue';
import anchorMixin from '@/mixin/anchorMixin';
const contents = [
  `
  ###  文件夹命名规范
    * index.js 或者 index.vue，统一使用小写字母开头
    * 属于组件或类的，统一使用大写字母开头
    * 其他非组件或类的，统一使用小写字母开头
    * 属于components文件夹下的子文件夹，使用大写字母开头的PascalBase风格
      *  全局通用的组件放在 /src/components下
      *  其他业务页面中的组件，放在各自页面下的 ./components文件夹下
      *  每个components文件夹下最多只有一层文件夹，且文件夹名称为组件的名称，文件夹下必须有index.vue或
         index.js，其他.vue文件统一大写开头（Pascal case），components下的子文件夹名称统一大写开头（PascalCase）
    * 其他文件夹统一使用kebab-case的风格
  ### 全局公共组件：/src/components示例
        - [components]
          - [Breadcrumb]
            - index.vue
          - [Hamburger]
            - index.vue
          - [SvgIcon]
            - index.vue
  业务页面内部封装的组件：以 /src/views/layout/components示例
   
        -[src]
          - [views]
            - [layout]
              - [components]
                - [Sidebar]
                  - index.vue
                  - Item.vue
                  - SidebarItem.vue
                - AppMain.vue
                - index.js
                - Navbar.vue

  index.js 中导出组件方式如下：

  \`\`\`
  export { default as AppMain } from './AppMain'
  export { default as Navbar } from './Navbar'
  export { default as Sidebar } from './Sidebar'
  \`\`\`

  ###  其他文件
    属于类的.js文件，除index.js外，使用PascalBase风格
    其他类型的.js文件，使用kebab-case风格
    属于Api的，统一加上Api后缀
    除index.vue之外，其他.vue文件统一用PascalBase风格
    统一使用kebab-case命名风格
    
  
  ### vue组件命名规范
  1、组件名 
    官方推荐的组件名是 每个单词首字母大写（PascalCase） 或者 全小写用 - 连接（kebab-case） 。 在DOM中使用的时候， 改为全小写， 单词之间用 - 连接。
    \`\`\`
    Vue.component('MyComponent', {})； 
    //或者
    Vue.component('my-component', {});
    import MyComponent from 'MyComponent.vue';
    export default {
      name: 'MyComponent'
    }
    \`\`\`
    在DOM中使用的时候， <my-component></my-component>
  2、props （待定）
   声明prop的时候，
   使用驼峰命名（myProps）， 模板中使用的时候， 用 - 连接（my-props）
  \`\`\`
  props: {
    myProps: {}
  }
  <my-component :my-props="abc"></my-component>
  \`\`\`
  3、自定义事件名(待定）
    因为html对大小写不敏感，所以大写的都会被转为小写的。 所以推荐 都用 -连接来命名。
  \`\`\`
  this.$emit（'my-event'）;
  <my-component @my-event="abc"></my-component>
 
  \`\`\`
 `,
];
export default {
  mixins: [anchorMixin],
  components: { MarkdownContent },
  data() {
    return { contents };
  },
};
</script>
