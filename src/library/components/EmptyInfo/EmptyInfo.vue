<!--
  通用的空内容提示组件
  @author: dupeng
  @date: 2021-03-08
-->

<template>
  <div class="empty-info-container" :style="{ paddingTop: topSpace + 'px' }">
    <div class="icon" :class="iconSize">
      <img :src="iconImageList[iconName]" />
    </div>
    <!-- 简单的可换行提示文字 -->
    <div v-if="info" class="info-text">{{ info }}</div>
    <!-- 复杂的多行带蓝色提示文字 -->
    <div v-else-if="infoList && infoList.length > 0" class="info-text">
      <div :key="index" v-for="(item, index) in infoList">
        <span :key="strIdx" v-for="(str, strIdx) in item" :class="[str.blue ? 'blue' : '']">{{
          str.text
        }}</span>
      </div>
    </div>
    <!-- 放按钮等 -->
    <slot></slot>
  </div>
</template>

<script>
import iconDefault from './images/empty-info-default.png';
import iconGroup from './images/empty-info-group.png';
import iconLetter from './images/empty-info-letter.png';
import iconSearch from './images/empty-info-search.png';
import iconAuth from './images/empty-info-auth.png';
import iconBox from './images/empty-info-box.png';
import iconChart from './images/empty-info-chart.png';
import iconConfig from './images/empty-info-config.png';
import iconNotFound from './images/empty-info-404.png';

export default {
  props: {
    info: String,
    infoList: {
      type: Array,
      default: function () {
        return [
          [
            {
              text: '参数示例: infoList是二维数组',
              blue: false,
            },
          ],
          [
            {
              text: '支持多行和',
              blue: false,
            },
            {
              text: '蓝色',
              blue: true,
            },
          ],
        ];
      },
    },
    iconName: {
      type: String,
      default: 'default', // 见data里的iconImageList
    },
    iconSize: {
      type: String,
      default: 'medium', // large, medium, small, mini
    },
    topSpace: {
      type: Number,
      default: 90,
    },
  },
  data() {
    return {
      iconImageList: {
        default: iconDefault,
        group: iconGroup,
        letter: iconLetter,
        search: iconSearch,
        auth: iconAuth,
        box: iconBox,
        chart: iconChart,
        config: iconConfig,
        notFound: iconNotFound,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
$icon-size-large: 200px;
$icon-size-medium: 160px;
$icon-size-small: 90px;
$icon-size-mini: 48px;

.empty-info-container {
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  margin-bottom: 40px;
  .icon {
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
    img {
      width: 100%;
      height: 100%;
    }
    &.large {
      width: 220px;
      height: 220px;
    }
    &.medium {
      width: 160px;
      height: 160px;
    }
    &.small {
      width: 90px;
      height: 90px;
    }
    &.mini {
      width: 48px;
      height: 48px;
    }
  }
  .info-text {
    font-size: 16px;
    color: $font-color-assist;
    margin-bottom: 20px;
    white-space: pre;
    text-align: center;
  }
  .blue {
    color: $color-theme;
  }
}
</style>
