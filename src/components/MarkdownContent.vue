<template>
  <markdown-it-vue
    class="mark-down-content"
    :id="id"
    :class="{ useHeaderOffset: useHeaderOffset }"
    :content="content"
    :options="options"
    @render-complete="handleCmplete"
  >
  </markdown-it-vue>
</template>

<script>
import VueScrollTo from 'vue-scrollto';
import { v4 as uuidv4 } from 'uuid';
import MarkdownItVue from '@/components/MarkdownItVue';
export default {
  components: { MarkdownItVue },
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
      options: {
        markdownIt: {
          linkify: true,
        },
        linkAttributes: {
          attrs: {
            target: '_self',
            rel: 'noopener',
          },
        },
      },
    };
  },
  methods: {
    handleCmplete() {
      const hashName = decodeURIComponent(this.$route.hash);
      const includeEl =
        hashName && document.getElementById(this.id)
          ? document.getElementById(this.id).querySelector(hashName)
          : null;
      if (hashName && includeEl) {
        this.$nextTick(() => {
          VueScrollTo.scrollTo(hashName);
          // 以下方法不起作用，原因未知 TODO
          // document.getElementById(hashName).scrollIntoView()
        });
      }
    },
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
  p {
    font-size: 14px;
    color: $font-color-body;
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
