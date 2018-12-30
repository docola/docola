<template>
  <span
    class="Sidebar-toggle"
    @click="$store.commit('TOGGLE_SIDEBAR')"
  >
    <svg aria-hidden="true" role="img" viewBox="0 0 448 512">
      <path
        fill="currentColor"
        d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
      ></path>
    </svg>
  </span>
</template>

<style scoped>
.Sidebar-toggle {
  display: flex;
  align-items: center;
}
.Sidebar-toggle svg {
  width: 3rem;
  height: 3rem;
  margin-right: 20px;
}

@media screen and (min-width: 769px) {
  .Sidebar-toggle {
    display: none;
  }
}
</style>
