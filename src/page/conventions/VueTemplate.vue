<template>
  <div>
    <MarkdownContent :content="contents" :useHeaderOffset="false" />
  </div>
</template>

<script>
import MarkdownContent from '@/components/MarkdownContent.vue';
import anchorMixin from '@/mixin/anchorMixin';
const contents = ` 
  充分考虑项目可维护性、可重用性、与数据接口低耦合行，约定以下书写原则。
 
  * 尽可能的降低DOM 的复杂度，不写无意义的DIV。尽量降低DOM 的层级复杂度
   
  \`\`\`html
  例如：
  <template>
    <div>
      <el-dialog>...</el-dialog>
    </div>
  </template>
 应写成：
  <template> 
    <el-dialog>...</el-dialog> 
  </template> 

  <template> 
    <div class='someclass'>
      <div v-if="conditions">...</div>
      <div v-else>...</div>
    </div> 
  </template>
  可以写成
  <template>  
      <div class='someclass' v-if="conditions">...</div>
      <div class='someclass' v-else>...</div> 
  </template>
  \`\`\`
   
  * 减少DOM中的运算，能在js中进行的，不要放在DOM上
   
  \`\`\` 
    <template>
      <div class='showname-prefix'>
        <span v-if='isStudent'>学生:</span>
        <span v-if='isTeacher'>教师:</span>
        <span v-if='isAssist'>助教:</span>
        <span v-if='isAdmin'>管理员:</span>
      </div>
    </template>
    应写成:
    <template>
      <div class='showname-prefix'>
        <span >{{prefix}}</span> 
      </div>
    </template>  
    js:
      export default {
        ...
        computed:{
          prefix(){
            let prefixStr = ''
            if(this.isAdmin) {
              prefixStr =  '管理员:'
            }else if(this.isAssist){
              prefixStr =  '助教:'
            }else if(this.isTeacher) {
              prefixStr =   '教师:'
            }else if(this.isStudent) {
              prefixStr =   '学生:'
            } 
            return prefixStr
            // 或者
            // return this.isAdmin ? '管理员:' : this.isAssist ? '助教:' : this.isTeacher? '老师:' : this.isStudent ? '学生:' : ''
          }
        }
        ...
      }  
    类似的,对于叫复杂的v-if 表达式，请使用计算属性返回的结果，并写清楚注释
    <div v-if='data && data.hasname && (hasRight || isSuperAdmin)> ....</div>
    应写成
    <div v-if='domEnabled'>...</div>
    js:
      computed(){
        /** 
         * xx 判断
         *  当数据存在且
         *      当角色为超级管理员时可用
         *      当角色不是超级管理员时,有权限则可用
         */
        domEnabled() { return this.data && this.data.hasname  && (this.hasRight || this.isSuperAdmin) }
      } 
  
  \`\`\`
 
  * 尽量降低DOM树的逻辑深度,对于复杂的DOM ，合理的封装
  \`\`\` html
    例如 尽可能的循环渲染组件， 而不是完整的div
    <template>
      <div class='com_list_container'>
        <div class='com_item' v-for='item in list' :key='item.id>
          <div>
            <div>{{item.icon}}</div>
            <span>{{item.name}}</span>  
          </div>
          <div>{{item.type}}</div>
          ...
        </div>
      </div>
    </template>
    应该写成:
    <template>
       <div class='com_list_container'>
        <myCom class='com_item' v-for='item in list' :key='item.id' :item = 'item'> </myCom>
      </div>
    </template>
    并封装myCom组件
  \`\`\`

 `;
export default {
  mixins: [anchorMixin],
  components: { MarkdownContent },
  data() {
    return { contents };
  },
};
</script>
