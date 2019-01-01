<template>
  <div class="Sidebar-container">
    <SidebarMask />

    <div
      class="Sidebar"
      :class="{ 'MobileSidebar-active': mobileSidebarActive }"
    >

      <!-- Move Navbar to Sidebar in Mobile device -->
      <div class="MobileNavbar">
        <div
          v-for="({ title, link }, k) in $store.state.nav"
          :key="k"
        >
          <Link
            class="MobileNavbarItem"
            :to="link"
          >
            {{ title }}
          </Link>
        </div>
      </div>

      <div class="SidebarItems">
        <div
          class="SidebarItem"
          v-for="({ title, links }, k) in sidebar"
          :key="k"
        >
          <h4 class="SidebarItem-title">{{ title }}</h4>
          <template v-if="links">
            <Link
              class="SidebarItem-link"
              v-for="({ title, link }, k) in links"
              :key="k"
              :to="link"
            >
              {{ title }}
            </Link>
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
  padding: 30px 20px;
  box-shadow: 1px 0 0 var(--border-color);
  overflow-y: auto;
  background-color: var(--bg);
  z-index: 900;
}

.SidebarItem {
  margin-bottom: 1.2rem;
  padding-bottom: 1.2rem;
}

.SidebarItem-title {
  text-transform: uppercase;
}

.SidebarItem-link {
  display: block;
}

.MobileNavbar {
  box-shadow: 0 1px 0 var(--border-color);
  margin-bottom: 20px;
  padding-bottom: 20px;
}
.MobileNavbarItem {
  font-size: 2.2rem;
  font-weight: 500;
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

@media screen and (min-width: 769px) {
  .MobileNavbar {
    display: none;
  }
}
</style>
