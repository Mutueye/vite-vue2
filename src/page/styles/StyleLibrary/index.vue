<template>
  <div>
    <MarkdownContent :content="contents[0]" />
    <DemoContent :showCode="false" topTitle="基本色">
      <div class="layout-row marginT25">色盘</div>
      <div class="layout-row">
        <div class="layout-content">
          <div class="layout-item" v-for="item in colors" :key="item.name">
            <ColorBox :color="item.name" :info="item.info" :subInfoList="item.subInfoList" />
          </div>
        </div>
      </div>
      <div class="layout-row marginT25">中性色</div>
      <div class="layout-row"><ColorsRow /></div>
    </DemoContent>
    <DemoContent :showCode="false" topTitle="功能色">
      <div class="layout-row marginT25">基础功能色</div>
      <div class="layout-row">
        <div class="layout-content">
          <div class="layout-item" v-for="item in functionalColors" :key="item.name">
            <ColorBox :color="item.name" :info="item.info" :subInfoList="item.subInfoList" />
          </div>
        </div>
      </div>
      <div class="layout-row marginT25">边框颜色</div>
      <div class="layout-row">
        <div class="layout-content">
          <div class="layout-item" v-for="item in borderColors" :key="item.borderClass">
            <BorderBox :borderClass="item.borderClass" :info="item.info" />
          </div>
        </div>
      </div>
    </DemoContent>
  </div>
</template>

<script>
import anchorMixin from '@/mixin/anchorMixin';
import MarkdownContent from '@/components/MarkdownContent.vue';
import DemoContent from '@/components/DemoContent.vue';
import ColorBox from './components/ColorBox.vue';
import ColorsRow from './components/ColorsRow.vue';
import BorderBox from './components/BorderBox.vue';

const contents = [
  `
  ## 全局样式库
  @/library/style中定义了一些全局样式文件，包括normalize、变量、通用样式和mixin等。
  ### normalize(样式一般化)
  使用normalize修复浏览器自身的bug并保证各浏览器的一致性，优化CSS可用性。具体详见[这个repo](https://github.com/JohnAlbin/normalize-scss)的readme。
  ### 通用变量
  var.scss中定义了常用的通用变量，包括颜色/尺寸/字号等等。
  
  其中颜色变量分为两类：基本色和功能色，基本色包含主题色盘和一系列中性色；功能色引用自基本色，以功能来命名和区分各种颜色。
  `,
];

export default {
  components: { MarkdownContent, DemoContent, ColorBox, ColorsRow, BorderBox },
  mixins: [anchorMixin],
  data() {
    return {
      contents,
      colors: [
        {
          name: 'blue',
          info: { title: '$color-blue', label: '#67AEF7' },
          subInfoList: [
            { title: '$color-blue-light', label: '#E1EFFD' },
            { title: '$color-blue-lighter', label: '#F0F7FE' },
          ],
        },
        {
          name: 'red',
          info: { title: '$color-red', label: '#FC7373' },
          subInfoList: [
            { title: '$color-red-light', label: '#FEE3E3' },
            { title: '$color-red-lighter', label: '#FFF1F1' },
          ],
        },
        {
          name: 'yellow',
          info: { title: '$color-yellow', label: '#F9B552' },
          subInfoList: [
            { title: '$color-yellow-light', label: '#FEF0DC' },
            { title: '$color-yellow-lighter', label: '#FEF8EE' },
          ],
        },
        {
          name: 'green',
          info: { title: '$color-green', label: '#80C269' },
          subInfoList: [
            { title: '$color-green-light', label: '#E6F3E1' },
            { title: '$color-green-lighter', label: '#F2F9F0' },
          ],
        },
        {
          name: 'purple',
          info: { title: '$color-purple', label: '#AA62D4' },
          subInfoList: [
            { title: '$color-purple-light', label: '#EEE0F6' },
            { title: '$color-purple-lighter', label: '#F7EFFB' },
          ],
        },
      ],
      functionalColors: [
        {
          name: 'blue',
          info: { title: '$color-theme', label: '主题色 $color-blue' },
        },
        {
          name: 'blue-light',
          info: { title: '$color-assist', label: '主题辅助色 $color-blue-light' },
        },
        {
          name: 'yellow',
          info: { title: '$color-warning', label: '警告 $color-yellow' },
        },
        {
          name: 'red',
          info: { title: '$color-danger', label: '危险/错误 $color-red' },
        },
        {
          name: 'green',
          info: { title: '$color-success', label: '成功 $color-red' },
        },
        {
          name: 'gray-99',
          info: { title: '$color-info', label: '信息色 $color-gray-99' },
        },
      ],
      borderColors: [
        {
          borderClass: 'border2-dark',
          info: { title: '$color-border-dark', label: '边框色-深色' },
        },
        {
          borderClass: 'border2',
          info: { title: '$color-border-dark', label: '边框色-默认' },
        },
        {
          borderClass: 'border2-light',
          info: { title: '$color-border-light', label: '边框色-浅色' },
        },
        {
          borderClass: 'border2-lighter',
          info: { title: '$color-border-lighter', label: '边框色-淡色' },
        },
      ],
    };
  },
};
</script>
