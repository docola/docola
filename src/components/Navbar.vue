<template>
  <div class="Navbar">
    <div
      class="NavbarItem"
      v-for="({ title, link }, k) in $store.state.nav"
      :key="k"
    >
      <Link :to="link">{{ title }}</Link>
    </div>
  </div>
</template>

<style scoped>
.Navbar {
  display: flex;
}
.NavbarItem {
  padding-left: 20px;
}

@media screen and (max-width: 768px) {
  .Navbar {
    display: none;
  }
}
</style>
