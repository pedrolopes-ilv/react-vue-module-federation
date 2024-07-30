<script setup lang="ts">
import { computed, ref } from "vue";
import { applyPureReactInVue } from 'veaury'
import ReactComponent from "reactApp/Button";
const ReactButton = applyPureReactInVue(ReactComponent);

const vueData = ref(0);

const computedString = computed(() => {
  return `Computed String Prop ${vueData.value}`;
});

const increaseValue = () => {
  vueData.value = vueData.value + 1;
}

</script>

<template>
  <div class="vue-react">
    <h1>Vue + React + Vuery</h1>
    <ReactButton :propValue="computedString"></ReactButton>
    <button class="vue-button" @click="increaseValue">Update Prop Value</button>
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

.vue-button {
  outline: none;
  background-color: cornflowerblue;
  border: none;
  padding: 12px 24px;
}

.vue-button:focus {
  outline: none;
}
</style>
