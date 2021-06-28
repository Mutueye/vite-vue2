import _ from 'lodash';
import VueScrollTo from 'vue-scrollto';
export default {
  mounted() {
    this.$nextTick(() => {
      const links = document.querySelectorAll('.anchor');
      this.$store.dispatch('resetAnchors', {
        name: this.$route.name,
        anchors: _.map(links, link => link.href.split('#')[1]),
      });
      this.scrollToAnchor();
    });
  },
  methods: {
    scrollToAnchor() {
      const hashName = decodeURIComponent(this.$route.hash);
      const includeEl = hashName ? document.querySelector(hashName) : null;
      if (hashName && includeEl) {
        this.$nextTick(() => {
          VueScrollTo.scrollTo(hashName);
          // 以下方法不起作用，原因未知 TODO
          // document.getElementById(hashName).scrollIntoView()
        });
      } else {
        VueScrollTo.scrollTo('.layout-main');
      }
    },
  },
  watch: {
    $route() {
      this.scrollToAnchor();
    },
  },
};
