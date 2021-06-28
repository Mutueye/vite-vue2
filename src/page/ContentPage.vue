<template>
  <div>
    <SideBar v-if="menuData.length > 0" class="layout-sidebar" :menuData="menuData"></SideBar>
    <router-view />
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue';
import routeData from '../router/routeData.js';
import _ from 'lodash';
export default {
  components: { SideBar },
  computed: {
    menuData() {
      const pathName = this.$route.fullPath.split('/')[1];
      const routeObj = _.find(
        routeData,
        item => item.name === pathName && item.children.length > 0,
      );
      return routeObj.children.filter(child => child.path || child.type);
    },
  },
};
</script>
