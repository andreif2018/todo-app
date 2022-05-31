<template>
  <input
    class="popup"
    type="text"
    :disabled="true"
    value="Text length should be at least 2 characters"
  />
</template>

<style scoped>
.popup {
  color: red;
  font-size: 1rem;
  width: 22rem;
  background: none;
  text-align: center;
}
</style>
