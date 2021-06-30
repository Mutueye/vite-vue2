<template>
  <MarkdownRender
    :id="id"
    class="mark-down-content"
    :class="{ useHeaderOffset: useHeaderOffset }"
    :content="content"
  >
  </MarkdownRender>
</template>

<script>
// import VueScrollTo from 'vue-scrollto';
import { v4 as uuidv4 } from 'uuid';
import MarkdownRender from '@/components/MarkdownRender/index.vue';

export default {
  components: { MarkdownRender },
  props: {
    content: {
      type: String,
      required: true,
    },
    useHeaderOffset: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      id: uuidv4(),
    };
  },
};
</script>

<style lang="scss">
$headerHeight: 60px; // 应用顶部高度
.mark-down-content {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: $font-color-title;
    margin-top: -1 * $headerHeight !important;
    border-bottom: none;
  }
  &.useHeaderOffset {
    margin-top: -1 * $headerHeight - 24px;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      padding-top: $headerHeight + 24px;
    }
  }
}
</style>
