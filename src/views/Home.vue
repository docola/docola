<template>
  <div class="Page">
    <Header />

    <div class="Wrap Center">
      <Sidebar />
      <div class="Main">
        <component :is="MarkdownBody" />
      </div>
    </div>

  </div>
</template>

<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'Page',

  components: {
    Header,
    Sidebar
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
        document.title = `${page.title || path} - ${title}`
      }
    }
  },

  mounted() {
    this.fetchFile(this.$route.path)
    this.$store.commit('SET_TITLE', this.$store.state.title)
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
  padding: 30px 20px 30px 80px;
  margin-left: var(--sidebar-width);
}

@media screen and (max-width: 768px) {
  .Main {
    margin-left: 0;
    padding-left: 20px;
  }
}
</style>
