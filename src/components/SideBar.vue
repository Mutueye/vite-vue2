<template>
  <div class="sidebar">
    <div v-for="(item, index) in menuData" :key="index">
      <div v-if="item.type && item.type === 'title'" class="title">{{ item.title }}</div>
      <router-link v-else class="menubtn" :to="{ name: item.name }" tag="div">{{
        item.title
      }}</router-link>
      <template v-if="anchorParent === item.name && item.type !== 'title'">
        <router-link
          v-for="anchor in anchors"
          :key="anchor"
          class="anchor-menubtn"
          :to="`#${anchor}`"
          tag="div"
          >{{ anchor | decodeURIComponent }}</router-link
        >
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  filters: {
    decodeURIComponent(value) {
      return `#${decodeURIComponent(value)}`;
    },
  },
  props: ['menuData'],
  computed: {
    ...mapState({
      anchors: state => state.anchors,
      anchorParent: state => state.anchorParent,
    }),
  },
  watch: {
    anchors(val) {
      console.log('anchors:', val);
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  padding: $space 0;
  display: flex;
  flex-direction: column;
  background-color: $color-bg-light;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: $color-border;
    width: 1px;
  }
  .title {
    font-size: 12px;
    color: $font-color-assist;
    padding: $space $space-lg;
  }
  .menubtn {
    padding: $space $space-lg;
    font-size: 14px;
    color: $font-color-title;
    transition: all 0.2s;
    cursor: pointer;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 2px;
      background-color: $color-theme;
      opacity: 0;
      transition: 0.1s ease-in;
      transform: translateX(-40px);
    }
    &:hover {
      background-color: $color-bg-blue;
      &::before {
        opacity: 0.4;
        transform: translateX(0);
      }
    }
    &.router-link-active {
      cursor: default;
      color: $color-theme;
      background-color: $color-bg-blue;
      position: relative;
      &::before {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
  .anchor-menubtn {
    padding: $space-sm $space-lg;
    padding-left: 2 * $space-lg;
    margin-right: 1px;
    font-size: 12px;
    color: $font-color-body;
    transition: all 0.2s;
    cursor: pointer;
    position: relative;
    &:hover {
      background-color: $color-bg-blue;
    }
    &.router-link-exact-active {
      color: $color-theme;
    }
  }
}
</style>
