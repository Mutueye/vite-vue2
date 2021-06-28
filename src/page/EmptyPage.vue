<!-- 只显示当前路由的空白页面 -->
<template>
  <div>{{ path }}</div>
</template>

<script>
import anchorMixin from '@/mixin/anchorMixin';
export default {
  mixins: [anchorMixin],
  data() {
    return {
      path: this.$route.fullPath,
    };
  },
  watch: {
    $route() {
      this.path = this.$route.fullPath;
    },
  },
};
</script>
