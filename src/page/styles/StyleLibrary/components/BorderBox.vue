<template>
  <div class="borderBox" :class="borderClass">
    <div class="content">
      <el-popover
        placement="top"
        width="200"
        trigger="hover"
        :disabled="!showTip"
        :title="info.title"
        :content="info.label"
      >
        <div class="fill-inner" slot="reference">
          <div class="title-label">
            <div class="title">{{ info.title }}</div>
            <div class="label">{{ info.label }}</div>
          </div>
        </div>
      </el-popover>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    borderClass: {
      type: String,
      required: true,
    },
    // info: { title, label }
    info: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.borderBox {
  width: auto;
  flex: 1;
  min-width: 200px;
  height: 120px;
  border-radius: $border-radius;
  overflow: hidden;
  background-color: $color-white;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    align-self: stretch;
    padding: $space-lg;
  }
  .title-label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    .title {
      font-size: 16px;
      color: $font-color-title;
    }
    .label {
      font-size: 14px;
      margin-top: $space-xs;
      color: $font-color-assist;
    }
  }
}
</style>
