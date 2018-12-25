<template>
  <div class="Page">
    <Header />

    <div class="Wrap Center">
      <div class="Main">
        <component :is="MarkdownBody" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Page',

  components: {
    Header
  },

  computed: {
    pageTitle() {
      return this.$store.state.page.title
    },

    MarkdownBody() {
      const component = {
        name: 'MarkdownBody',
        template: `<div class="MarkdownBody">${
          this.$store.state.page.html
        }</div>`
      }

      return component
    }
  },

  watch: {
    pageTitle(v) {
      const { path } = this.$route
      const { page, title } = this.$store.state
      if (path === '/') {
        document.title = title
      } else {
        document.title = `${page.title} - ${title}`
      }
    }
  },

  mounted() {
    this.fetchFile(this.$route.path)
  },

  beforeRouteUpdate({ path }, { path: fromPath }, next) {
    next()
    if (path !== fromPath) {
      this.fetchFile(path)
    }
  },

  methods: {
    async fetchFile(path) {
      this.$store.dispatch('fetchFile', path)
    }
  }
}
</script>

<style scoped>
.Main {
  margin-top: var(--header-height);
  padding: 40px 20px;
  width: 100%;
}
</style>
