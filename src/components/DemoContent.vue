<template>
  <div class="demo-container">
    <div class="demo-content">
      <div v-if="topTitle" class="content-title top">{{ topTitle }}</div>
      <slot></slot>
      <div v-if="showCode && bottomTitle" class="content-title bottom">{{ bottomTitle }}</div>
    </div>
    <div v-if="showCode" class="code-content">
      <slot name="code"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showCode: {
      type: Boolean,
      default: true,
    },
    topTitle: {
      type: String,
      default: '演示',
    },
    bottomTitle: {
      type: String,
      default: '代码',
    },
  },
};
</script>

<style lang="scss" scoped>
.demo-container {
  margin-bottom: $space-xxl;
}
.demo-content {
  margin-top: 25px;
  border: 1px solid $color-border;
  position: relative;
  .content-title {
    position: absolute;
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    padding: 4px 10px;
    height: 24px;
    background-color: $color-white;
    color: $font-color-title;
    &.top {
      left: 20px;
      top: -12px;
    }
    &.bottom {
      left: 20px;
      bottom: -12px;
    }
  }
}
.code-content {
  margin-top: -14px;
  border: 1px solid $color-border;
  border-top: none;
  padding: $space-lg;
  padding-top: $space-xl;
}
</style>
