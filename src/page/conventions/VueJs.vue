<template>
  <div>
    <MarkdownContent :content="contents" :useHeaderOffset="false" />
  </div>
</template>

<script>
import MarkdownContent from '@/components/MarkdownContent.vue';
import anchorMixin from '@/mixin/anchorMixin';
const contents = ` 
  script 是衔接View 和VM 的关键，为了充分发挥MVVM框架的优势，并充分考虑项目的可维护性，作以下约定：
  * 尽可能的使用vuex store 作为数据源，减少 data的使用
  * 禁止在vue 文件中直接发送http请求，应使用vuex action 代替
  * DOM 遵循UI设计，vm遵循DOM需求， 并在 action 请求之后或者 mutation 中处理数据，使其符合DOM所需，而不是 根据接口格式调整DOM
  

        vm 标准化，有助于组件重用和逻辑解耦
        以U+平台课件树为例
          DOM 结构
           ｜---章
           ｜  ｜--节
           ｜  ｜ ｜---资料
           ｜---章
           ｜  ｜--资料

        章下可以是小节，也可以是资料，小节下只能是资料，章下若有小节，则不显示资料
        接口返回的数据中，章、节、资料的节点对象完全不同，所以普通的DOM 会写成
        伪代码：
        <template>
          <div v-for='章 in datalist'>
            <章>{{章.icon0}}{{章.title0}}</章> 
            <div v-if='章下有节' v-for='节 in 章'>
              <节>{{节.icon1}}{{节.name}}></节>
              <div>  v-for='资料 in 节'>
                <资料>{{资料.type｜getIcon}}{{资料.title1}}</资料>
              </div>
            </div>
            <div v-else v-for='资料 in 章'>
              <资料>{{资料.type｜getIcon}}{{资料.title1}}</div>
            </div>
          </div>
        </template>

        这种写法有以下缺点：
        1. 需要写章、节、资料三个节点组件
        2. 可扩展性差,可复用性差
        3. dom结构复杂
        4. dom结构严重依赖数据对象，假设接口字段调整，dom必须跟着改变

        正确的姿势：
        伪代码：
        
        <template>
          <TreeNode v-for='node in renderList' :item='node'>  </TreeNode>
        </template>
        treeNode:
        <template>
          <div>
            <span>{{item.icon}} {{item.title}}</span>
            <TreeNode v-for='c in item.children' :item='node'></Trege shi
          </div>
        </template>
        明显后一种在复用性和扩展性上具备巨大的优势，只是数据接口返回的并不是我们期望的结构
        因此，只需要在数据请求action中对返回对数据进行一次格式化处理即可
        actions:{
          getRenderList({commit},params) {
            return Api.getList(params).then(res => {
              const renderList = _.map(res, node => {
                // TODO 此处进行数据格式化
                // 注释：此处数据格式应为Node:
                //  {
                //    title:String, //节点title
                //    icon:String, //节点图标
                //    type:String, //节点类型
                //    children: Node[] //子节点
                //  }
                return format(node)
              })
              // 以上格式化过程也可在 mutation中进行
              commit('SET_RENDER_LIST',renderList)
            })
          }
        }
        如此写法，当接口变动时，只需修改 format()方法即可，无需处理DOM，大大提高代码可维护性。
        
  * 使用lodash 代替 js原生方法  [(lodash 文档)](https://lodash.com/docs/)

        在日常js的编码中，很容易碰到多级json对象的数据结构。当使用多级数据时必然需要进行空值验证。
        例如:
        if(this.data && this.data.objectList && this.data.objectList.length>0) {
          this.current = this.data.objectList[0].name
        }else {
          this.current = ''
        }
        如果不验证if 表达式，会出现 no property of undefined 错误，导致页面崩溃

        lodash 是一个优秀的开源库
        上面的代码 可以使用 this.current = _.get(this.data,'objectList[0].name','') 代替
        也可以写成 this.current = _.get(this.data, ['objectList',0,'name'], '')
        当某一级对象为null 时，会返回默认值 '' ,不会抛出异常
        因此，尽量使用lodash工具库
        文档地址 https://lodash.com/docs/
 `;
export default {
  mixins: [anchorMixin],
  components: { MarkdownContent },
  data() {
    return { contents };
  },
};
</script>
