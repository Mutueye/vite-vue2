<template>
  <div id="app" class="page">
    <div class="header">
      <div class="logo">QST-UI 规范</div>
      <div class="tab">
        <router-link
          v-for="(item, index) in menuData"
          :key="index"
          tag="div"
          class="tab-item"
          :to="item.path"
        >
          {{ item.title }}
        </router-link>
      </div>
    </div>
    <router-view class="layout-main"></router-view>
  </div>
</template>

<script>
import routeData from '@/router/routeData.js';

export default {
  data() {
    return {
      menuData: routeData,
    };
  },
};
</script>
