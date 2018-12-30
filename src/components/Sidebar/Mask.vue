<template>
  <div
    v-if="$store.state.mobileSidebar.active"
    class="Sidebar-mask"
    @click="$store.commit('TOGGLE_SIDEBAR', false)"
  ></div>
</template>

<style scoped>
.Sidebar-mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 800;
}
</style>
