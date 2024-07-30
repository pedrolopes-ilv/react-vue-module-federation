<script setup lang="ts">
import { applyReactInVue, applyPureReactInVue } from 'veaury'
import ReactButton from "reactApp/Button";
const Basic = applyReactInVue(ReactButton);
const BasicPure = applyPureReactInVue(ReactButton);

</script>

<template>
  <div class="vue-react">
    <h1>Vue + React + Vuery</h1>
    <Basic></Basic>
    <BasicPure></BasicPure>
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
