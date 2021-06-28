<template>
  <div class="flex-row colorsRow">
    <div class="colorItem" :class="'bg-color-' + item.name" v-for="item in colors" :key="item.name">
      <el-popover
        placement="top"
        width="200"
        trigger="hover"
        style="align-self: stretch"
        :title="'$color-' + item.name"
        :content="item.color"
      >
        <div class="fill-inner" slot="reference"></div>
      </el-popover>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        { name: 'black', color: '#000000' },
        { name: 'gray-33', color: '#333333' },
        { name: 'gray-66', color: '#666666' },
        { name: 'gray-7e', color: '#7E7E7E' },
        { name: 'gray-99', color: '#999999' },
        { name: 'gray-cc', color: '#CCCCCC' },
        { name: 'gray-dc', color: '#DCDCDC' },
        { name: 'gray-e6', color: '#E6E6E6' },
        { name: 'gray-ea', color: '#EAEAEA' },
        { name: 'gray-f2', color: '#F2F2F2' },
        { name: 'gray-f5', color: '#F5F5F5' },
        { name: 'gray-f8', color: '#F8F8F8' },
        { name: 'white', color: '#FFFFFF' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.colorsRow {
  border: 2px solid $color-border-dark;
  border-radius: $border-radius;
  overflow: hidden;
  padding: 2px;
}
.colorItem {
  flex: 1;
  height: 80px;
  &:nth-child(1) {
    border-top-left-radius: $border-radius-sm;
    border-bottom-left-radius: $border-radius-sm;
  }
  &:nth-last-child(1) {
    border-top-right-radius: $border-radius-sm;
    border-bottom-right-radius: $border-radius-sm;
  }
}
</style>
