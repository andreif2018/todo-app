<template>
  <nav class="nav-wrapper">
    <router-link
      active-class="active-link"
      exact-active-class="exact-active-link"
      to="/"
      >Home</router-link
    >
    <router-link
      active-class="active-link"
      exact-active-class="exact-active-link"
      to="/about"
      >About</router-link
    >
  </nav>
</template>

<style scoped>
.nav-wrapper {
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.active {
  color: #42b983;
}

.exact-active-link {
  color: #42b983;
  font-weight: bold;
}
</style>
