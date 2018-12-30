<template>
  <header class="Header">
    <div class="Wrap Center">
      <div class="Header-inner">

        <div class="Header-left">
          <h1 class="SiteTitle">
            <SidebarToggle />
            <router-link to="/">
              {{ $store.state.title }}
            </router-link>
          </h1>
        </div>

        <div class="Header-right">
          <Navbar />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from './Navbar'
import SidebarToggle from './Sidebar/Toggle.vue'

export default {
  components: {
    Navbar,
    SidebarToggle
  }
}
</script>

<style scoped>
.Header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  line-height: var(--header-height);
  background-color: var(--bg);
  box-shadow: 0 1px 0 var(--border-color);
  z-index: 1000;
}

.Header-inner {
  padding: 0 20px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
}

.SiteTitle {
  display: flex;
  align-items: center;
  line-height: inherit;
  margin: 0;
  font-size: 3.6rem
}
.SiteTitle a {
  color: unset;
}
</style>
