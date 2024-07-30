<script setup lang="ts">
import { applyPureReactInVue } from 'veaury'
import ReactComponent from "reactApp/Button";
const ReactButton = applyPureReactInVue(ReactComponent);

</script>

<template>
  <div class="vue-react">
    <h1>Vue + React + Vuery</h1>
    <ReactButton></ReactButton>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
