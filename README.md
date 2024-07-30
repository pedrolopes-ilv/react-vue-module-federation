# Module Federation With Vite + Vue And React (With Vue 3 and Vue 2 Support)

## Requirements
- NodeJS V20.16.0

## Objectives
- Expose a simple react component using the vite module federation plugin.
- The component must be built like a library to simplify it's usage in the hosts projects
- The component must run in both versions of VueJs

## Project Setup

- Clone this repository
```shell
git clone https://github.com/pedrolopes-ilv/react-vue-module-federation
```
- Install base dependencies
```shell
npm install
```
- Install all projects dependencies with setup script
```shell
npm run setup
```

## Running the demo
After running the setup script, all 3 host applications should be running in the following ports: 5173, 5174 and 5175 (The ports can change depending on availability). In addition to the forced start after the setup you can run the demo in the following scenarios:

- Starting all hosts on demand
```shell
npm run start-hosts
```
- Starting specific hosts
```shell
npm run start-react-host
npm run start-vue2-host
npm run start-vue3-host
```

## Vite Plugin Limitations
- During my tests, i noticed that, when creating the react component, if i were to use any of the react native hooks such as "useState", "useRef" etc, the host application would throw the following error:
```
React TypeError: Cannot read properties of null (reading 'useState')
```

After some research i arrived at this particular issue on the "@originjs/vite-plugin-federation" plugin: https://github.com/originjs/vite-plugin-federation/issues/294

The issue mentioned above has been open since 2022 and mentions that when publishing the component as a library, if any of the components utilizes one of the react hooks, we cannot mount it on the Vuejs projects, as it throws the error mentioned above (The error doest not occur if the host app is also made with react). As of July 29, 2024, there is no provided solution by the plugin author, therefore, to meet the objectives that i had defined, i turned to the library below.

## Mounting React Components Inside a Vue Application (Vue 3)

After searching around for solutions for mounting react components inside Vuejs, i stumbled upon "Vuery", a community maintained library that handles the my scenario perfectly.

In order the mount a React component with Vuery, all you need to do is configure your vite.config.js, following their documentation, and import the component as follow:
```vue
<script setup lang="ts">
/* Change the import path according to your moduleFederation config */
import ReactComponent from "reactApp/Button";
import { applyPureReactInVue } from "veaury";
const ReactButton = applyPureReactInVue(ReactComponent)
</script>

<template>
<div class="vue-react">
  <h1>Vue + React + Vuery</h1>
  <ReactButton></ReactButton>
</div>
</template>

<style scoped>
.vue-react {
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
```

## Mounting React Components Inside a Vue Application (Vue 2)

In order to mount the remote component within Vue 2, i utilized Vuery legacy library (VueReactCombined), which provides support for this version of VueJs.

To use it, follow the vite.config.js configuration steps provided in the documentation: https://github.com/gloriasoft/vuereact-combined

After finishing the configuration, you will import your component in the following format:
```vue
<script setup lang="ts">
import { applyReactInVue } from 'vuereact-combined';
import ReactComponent from "reactApp/Button";
const ReactButton = applyReactInVue(ReactComponent);
</script>

<template>
  <div id="app">
    <div class="vue-react">
      <h1>Vue 2 + React + VueReactCombined</h1>
      <ReactButton></ReactButton>
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
```

## Links to examples
In this repository i have created examples for consuming the exposed component in the following frameworks:

- [React](react-host-app)
- [Vuejs 3](vue-host-app)
- [Vuejs 2](vue2-host-app)
