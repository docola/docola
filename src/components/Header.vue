<template>
  <header class="Header">
    <div class="Wrap Center">
      <div class="Header-inner">
        <h2 class="SiteTitle">
          <router-link to="/">
            {{ $store.state.title }}
          </router-link>
        </h2>
      </div>
    </div>
  </header>
</template>

<style scoped>
.Header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  line-height: var(--header-height);
  background-color: var(--bg);
  box-shadow: 0 1px 1px var(--border-color);
}

.Header-inner {
  padding: 0 20px;
  position: relative;
  overflow: hidden;
}

.SiteTitle {
  line-height: inherit;
  margin: 0;
}
.SiteTitle a {
  color: unset;
}
</style>
