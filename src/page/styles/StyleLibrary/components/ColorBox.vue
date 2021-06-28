<template>
  <div class="colorBox" :class="['bg-color-' + color, { 'is-hoverable': showHover }]">
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
    <div v-if="subInfoList && subInfoList.length === 2" class="subContent">
      <div class="subItem" :class="'bg-color-' + color + '-light'" slot="reference">
        <el-popover
          placement="bottom"
          width="200"
          trigger="hover"
          style="align-self: stretch"
          :disabled="!showSubTip"
          :title="subInfoList[0].title"
          :content="subInfoList[0].label"
        >
          <div class="fill-inner" slot="reference"></div>
        </el-popover>
      </div>
      <div class="subItem" :class="'bg-color-' + color + '-lighter'" slot="reference">
        <el-popover
          placement="bottom"
          width="200"
          trigger="hover"
          style="align-self: stretch"
          :disabled="!showSubTip"
          :title="subInfoList[1].title"
          :content="subInfoList[1].label"
        >
          <div class="fill-inner" slot="reference"></div>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
    // 是否显示子颜色
    showSub: {
      type: Boolean,
      default: false,
    },
    // 是否hover时变色
    showHover: {
      type: Boolean,
      default: false,
    },
    // 是否显示相关tip
    showTip: {
      type: Boolean,
      default: false,
    },
    // 是否显示子颜色的tip
    showSubTip: {
      type: Boolean,
      default: true,
    },
    // info: { title, label }
    info: {
      type: Object,
      required: true,
    },
    // subInfoList: [{ title, label }]
    subInfoList: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.colorBox {
  width: auto;
  flex: 1;
  min-width: 200px;
  height: 120px;
  border-radius: $border-radius;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    align-self: stretch;
    padding: $space-lg;
  }
  .subContent {
    display: flex;
    flex: 1;
    flex-direction: row;
    .subItem {
      flex: 1;
      align-self: stretch;
    }
  }
  .title-label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    .title {
      font-size: 16px;
      color: $color-white;
    }
    .label {
      font-size: 14px;
      margin-top: $space-xs;
      color: rgba($color-white, 0.6);
    }
  }
}
</style>
