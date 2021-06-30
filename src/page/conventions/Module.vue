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
  ### 模块化目标
    U+平台业务模块历史代码较多，且业务逻辑比较复杂。各个模块耦合性高，维护困难。对项目按照业务对象进行模块化重构，
    降低不同模块之间的代码耦合程度，UI 与业务数据处理分离，业务数据处理与接口分离，充分利用mvvm架构的特性，优化项目结构。

    

  ### 文件结构
  
  目录结构 
  
  
          --src 
            ｜--modules
            ｜-- [moduleName]
              ｜-- api
              ｜--store
              ｜--views
              ｜--module.js

  其中 api 文件夹，存放接口请求方法 以 export 方式导出
      store 文件夹存放 前端数据结构以及 actions
      views 文件夹存放 vue 文件


  ### 约定

    * action 不能跨模块调用api 中的方法
    * views 文件夹中只允许使用action 请求数据，不允许直接import api中的方法
    * store 中的文件名称，全局唯一，不允许重复
    * vue 规范参考前端规范 
  
  ### 代码示例


  代码 api/example.js
  \`\`\` 
  /**
 * example api
 *
 * @author guoyingxu
 *
 * @description 示例
 */
  import { getResult, query } from '@/subcommon/util/request'
  import { course } from '@/config/server'
  import Axios from 'axios'
  /**
   * 获取示例详情
   * @param {string} param.courseId //课程ID
   * @param {string} param.exampleId // 示例ID
   * @returns
   */
  export function getExample ({ courseId, exampleId }) {
    // eslint-disable-next-line no-undef
    return Axios.get(query(\`\${course}/\${courseId}/example/\${exampleId}\`)).then(res => getResult(res))
  }
  /**
   * 获取示例列表
   * @param {string} param.courseId //课程ID
   * @param {undefined | number} param.pageNum  // 页数
   * @param {undefined | number} param.pageSize // 每页条数
   * @param {undefined | keyword }   params.keyword //关键字
   */
  export function getExampleList (params) {
    return Axios.get(query(\`\${course}/\${params.courseId}/example\`, params))
    // 注意
    //  query 方法会把所有的参数拼接到url里，并且自动过滤空值(undefined,null,空字符串)，不会过滤0 和false。
    // query(\`\${course}/\${params.courseId}/example\`, params) 会返回
    //   \`\${course}/\${params.courseId}/example?courseId=\${courseId}&pageNum=\${pageNum}&pageSize=\${pageSize}&keyword=\${keyword}\`
    // 如果后端要求 不能有多余的query参数,比如上面对courseId
    // 可以使用 _.pick() 或者_.omit() 对参数进行过滤
    //  return Axios.get(query(\`\${course}/\${params.courseId}/example\`, _.pick(params,['pageNum','pageSize','keyword']))
    // or
    //  return Axios.get(query(\`\${course}/\${params.courseId}/example\`, _.omit(params,['courseId']))
  }
  \`\`\`

  代码store/example.js
  \`\`\`
  import { getExampleList } from '../api/example'
import _ from 'lodash'
/**
 * 分模块 store example
 *
 * 测试 加载模块store 功能
 *
 * 注意： 原则上不允许跨模块请求，即 不能 import 非本模块的API
 */
const state = {
  list: [],
  info: 'this is for test'
}
const mutations = {
  SET_EXAMPLE_LIST (state, value) {
    state.list = value
  }
}
const actions = {
  /**
   * 获取示例列表
   * @param {*} param0
   * @param {*} params1
   */
  getExampleList ({ commit }, params1) {
    return getExampleList(params1).then(res => {
      // 如需对数据进行加工，可在此处进行
      // ...
      commit('SET_EXAMPLE_LIST', _.get(res, 'list', []))
    })
  }
}
export default {
  state,
  mutations,
  actions
}

  \`\`\`
  
  代码module.js
  \`\`\`
  const stores = require.context('./store', false, /\\.js$/)
const module = {}
stores.keys().forEach(key => {
  if (key === './index.js') return
  const moduleName = key.replace(/(\\.\\/|\\.js)/g, '')
  module[moduleName] = stores(key).default
})
export {
  module
}
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
