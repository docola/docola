<template>
  <div class="Sidebar-container">
    <SidebarMask />

    <div
      class="Sidebar"
      :class="{ 'MobileSidebar-active': mobileSidebarActive }"
    >

      <div class="SidebarItems">
        <div
          class="SidebarItem"
          v-for="({ title, links }, k) in sidebar"
          :key="k"
        >
          <h4 class="SidebarItem-title">{{ title }}</h4>
          <template v-if="links">
            <router-link
              class="SidebarItem-link"
              v-for="({ title, link }, k) in links"
              :key="k"
              :to="link"
            >
              {{ title }}
            </router-link>
          </template>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import SidebarMask from './Mask'

export default {
  components: {
    SidebarMask
  },

  computed: {
    sidebar() {
      return this.$store.state.sidebar
    },
    mobileSidebar() {
      return this.$store.state.mobileSidebar
    },
    mobileSidebarActive() {
      return this.mobileSidebar.active
    }
  },

  watch: {
    '$route.path'() {
      this.$store.commit('TOGGLE_SIDEBAR', false)
    }
  }
}
</script>

<style scoped>
.Sidebar {
  position: fixed;
  bottom: 0;
  top: var(--header-height);
  width: var(--sidebar-width);
  padding: 30px 0;
  box-shadow: 1px 0 0 var(--border-color);
  overflow-y: auto;
  background-color: var(--bg);
  z-index: 900;
}

.SidebarItem {
  padding: 0 20px;
  margin-bottom: 1.2rem;
  padding-bottom: 1.2rem;
}

.SidebarItem-title {
  text-transform: uppercase;
}

.SidebarItem-link {
  display: block;
}

@media screen and (max-width: 768px) {
  .Sidebar {
    width: 80%;
    left: -80%;
    transition: left 300ms;
  }

  .MobileSidebar-active {
    left: 0;
  }
}
</style>
