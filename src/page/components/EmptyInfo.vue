<template>
  <div>
    <MarkdownContent :content="contents[0]" />
    <DemoContent>
      <EmptyInfo info="此处为空白提示文字" />
      <template v-slot:code>
        <MarkdownContent :content="contents[1]" :useHeaderOffset="false" />
      </template>
    </DemoContent>
    <MarkdownContent :content="contents[2]" />
    <DemoContent>
      <div class="flex-row flex-wrap align-center justify-start">
        <EmptyInfo style="width: 200px" :topSpace="30" iconName="default" info="default" />
        <EmptyInfo style="width: 200px" :topSpace="30" iconName="group" info="group" />
        <EmptyInfo style="width: 200px" :topSpace="30" iconName="letter" info="letter" />
        <EmptyInfo style="width: 200px" :topSpace="30" iconName="search" info="search" />
        <EmptyInfo style="width: 200px" :topSpace="30" iconName="auth" info="auth" />
        <EmptyInfo style="width: 200px" :topSpace="30" iconName="box" info="box" />
        <EmptyInfo style="width: 200px" :topSpace="30" iconName="chart" info="chart" />
        <EmptyInfo style="width: 200px" :topSpace="30" iconName="config" info="config" />
        <EmptyInfo style="width: 200px" :topSpace="30" iconName="notFound" info="notFound" />
      </div>
      <template v-slot:code>
        <MarkdownContent :content="contents[3]" :useHeaderOffset="false" />
      </template>
    </DemoContent>
    <MarkdownContent :content="contents[4]" />
    <DemoContent>
      <div class="flex-row flex-wrap align-center justify-start">
        <EmptyInfo
          style="width: auto; margin-left: 20px"
          :topSpace="30"
          info="large"
          iconSize="large"
        />
        <EmptyInfo style="width: auto; margin-left: 20px" :topSpace="30" info="medium" />
        <EmptyInfo
          style="width: auto; margin-left: 20px"
          :topSpace="30"
          info="small"
          iconSize="small"
        />
        <EmptyInfo
          style="width: auto; margin-left: 20px"
          :topSpace="30"
          info="mini"
          iconSize="mini"
        />
      </div>
      <template v-slot:code>
        <MarkdownContent :content="contents[5]" :useHeaderOffset="false" />
      </template>
    </DemoContent>
    <MarkdownContent :content="contents[6]" />
    <DemoContent>
      <EmptyInfo
        :infoList="[
          [{ text: 'infoList属性是二维数组' }],
          [{ text: '支持多行和' }, { text: '蓝色高亮', blue: true }],
        ]"
      >
      </EmptyInfo>
      <template v-slot:code>
        <MarkdownContent :content="contents[7]" :useHeaderOffset="false" />
      </template>
    </DemoContent>
    <MarkdownContent :content="contents[8]" />
    <DemoContent>
      <EmptyInfo info="提示文字">
        <div>
          <el-button type="primary" size="small">按钮A</el-button>
          <el-button type="primary" size="small">按钮B</el-button>
        </div>
      </EmptyInfo>
      <template v-slot:code>
        <MarkdownContent :content="contents[9]" :useHeaderOffset="false" />
      </template>
    </DemoContent>
    <MarkdownContent :content="contents[10]" />
    <AttributeTable :tableData="tableData" />
  </div>
</template>

<script>
import EmptyInfo from '@/library/components/EmptyInfo/EmptyInfo.vue';
import MarkdownContent from '@/components/MarkdownContent.vue';
import DemoContent from '@/components/DemoContent.vue';
import AttributeTable from '@/components/AttributeTable/AttributeTable.vue';
import anchorMixin from '@/mixin/anchorMixin';
const contents = [
  `
  ## EmptyInfo 空白提示
  在空白内容处显示一个带图标的提示文字。随着设计和组件的更新，内容会有变动，具体请看组件代码。
  ### 基本用法
  通过info属性指定提示文字内容
  `,
  `
  \`\`\`html
  <EmptyInfo info="此处为空白提示文字" />
  \`\`\`
  `,
  `
  ### 指定图标
  通过iconName属性指定不同的图标，目前有这么几种：default, group, letter, search, auth, box, chart, config, notFound.
  另外，可以通过topSpace属性，调整组件顶部的padding大小。默认topSpace为90px。
  `,
  `
  \`\`\`html
  <div class="flex-row flex-wrap align-center justify-start">
    <EmptyInfo style="width: 200px;" :topSpace="30" iconName="default" info="default" />
    <EmptyInfo style="width: 200px;" :topSpace="30" iconName="group" info="group" />
    <EmptyInfo style="width: 200px;" :topSpace="30" iconName="letter" info="letter" />
    <EmptyInfo style="width: 200px;" :topSpace="30" iconName="search" info="search" />
    <EmptyInfo style="width: 200px;" :topSpace="30" iconName="auth" info="auth" />
    <EmptyInfo style="width: 200px;" :topSpace="30" iconName="box" info="box" />
    <EmptyInfo style="width: 200px;" :topSpace="30" iconName="chart" info="chart" />
    <EmptyInfo style="width: 200px;" :topSpace="30" iconName="config" info="config" />
    <EmptyInfo style="width: 200px;" :topSpace="30" iconName="notFound" info="notFound" />
  </div>
  \`\`\`
  `,
  `
  ### 不同尺寸
  通过iconSize属性指定不同的图标尺寸(large、medium、small、mini)，默认medium
  `,
  `
  \`\`\`html
  <div class="flex-row flex-wrap align-center justify-start">
    <EmptyInfo style="width: auto; margin-left: 20px;" :topSpace="30" info="large" iconSize="large" />
    <EmptyInfo style="width: auto; margin-left: 20px;" :topSpace="30" info="medium" />
    <EmptyInfo style="width: auto; margin-left: 20px;" :topSpace="30" info="small" iconSize="small" />
    <EmptyInfo style="width: auto; margin-left: 20px;" :topSpace="30" info="mini" iconSize="mini" />
  </div>
  \`\`\`
  `,
  `
  ### 高亮文字
  通过infoList属性可设置支持多行带高亮的文字提示
  `,
  `
  \`\`\`html
  <EmptyInfo :infoList="[
      [{ text: 'infoList属性是二维数组' }],
      [{ text: '支持多行和' }, { text: '蓝色高亮', blue: true }]
    ]">
  </EmptyInfo>
  \`\`\`
  `,
  `
  ### 嵌入更多内容
  组件内嵌slot，支持嵌入更多内容
  `,
  `
  \`\`\`html
  <EmptyInfo info="提示文字">
    <div>
      <el-button type="primary" size="small">按钮A</el-button>
      <el-button type="primary" size="small">按钮B</el-button>
    </div>
  </EmptyInfo>
  \`\`\`
  `,
  `
  ### Attributes
  `,
];

export default {
  mixins: [anchorMixin],
  components: { EmptyInfo, DemoContent, MarkdownContent, AttributeTable },
  data() {
    return {
      contents,
      tableData: [
        {
          name: 'info',
          desc: '空白内容的文字描述',
          type: 'string',
        },
        {
          name: 'infoList',
          desc: '通过二维数组来显示多行且带高亮的文字信息，如果该属性有值，则忽略info属性',
          type: 'array',
        },
        {
          name: 'iconName',
          desc: '空白提示的图标',
          type: 'string',
          options: 'default/group/letter/search/auth/box/chart/config/notFound',
          default: 'default',
        },
        {
          name: 'iconSize',
          desc: '空白提示图标的大小',
          type: 'string',
          options: 'large/medium/small/mini',
          default: 'medium',
        },
        {
          name: 'topSpace',
          desc: '顶部的空白高度',
          type: 'number',
          default: '90',
        },
      ],
    };
  },
};
</script>
