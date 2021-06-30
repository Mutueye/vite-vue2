<template>
  <div ref="markdown-it-vue-container" class="markdown-body"></div>
</template>

<script>
import MarkdownIt from 'markdown-it';
import MarkdownItGithubToc from 'markdown-it-github-toc';

const DEFAULT_OPTIONS_GITHUBTOC = {
  tocFirstLevel: 2,
  tocLastLevel: 3,
  tocClassName: 'toc',
  anchorLinkSymbol: '',
  anchorLinkSpace: false,
  anchorClassName: 'anchor',
  anchorLinkSymbolClassName: 'octicon octicon-link',
};

export default {
  name: 'MarkdownRender',
  props: {
    content: {
      type: String,
      default: '',
    },
    options: {
      type: Object,
      default() {
        return {
          markdownIt: {
            linkify: true,
          },
          githubToc: DEFAULT_OPTIONS_GITHUBTOC,
        };
      },
    },
  },
  data() {
    const optMarkdownIt = this.options.markdownIt;
    const optGithubToc = this.options.githubToc || DEFAULT_OPTIONS_GITHUBTOC;

    const md = new MarkdownIt(optMarkdownIt).use(MarkdownItGithubToc, optGithubToc);
    return {
      md: md,
    };
  },
  watch: {
    content: {
      immediate: true,
      handler(val) {
        this.$nextTick(() => {
          if (!this.md) return;
          this.$refs['markdown-it-vue-container'].innerHTML = this.md.render(val);
          // emit event
          this.$emit('render-complete');
        });
      },
    },
  },
  methods: {
    use(plugin, options) {
      this.md.use(plugin, options);
    },
    get() {
      return this.md;
    },
  },
};
</script>
