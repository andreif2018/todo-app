<template>
  <div class="nav-wrapper">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.nav-wrapper {
  width: 30vw;
  display: flex;
  flex-direction: row;
  place-items: flex-start;
}
</style>
