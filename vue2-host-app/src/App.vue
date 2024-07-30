<script setup lang="ts">
import { applyReactInVue } from 'vuereact-combined';
import ReactButton from "reactApp/Button";
const Basic = applyReactInVue(ReactButton);
</script>

<template>
  <div id="app">
    <div class="vue-react">
      <h1>Vue 2 + React + VueReactCombined</h1>
      <Basic></Basic>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  overflow: hidden;
}
</style>

<style scoped>
.vue-react {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.vue-react h1 {
  margin: 0;
}
</style>
