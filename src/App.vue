<!-- Material Design Icons: https://materialdesignicons.com/ -->

<script setup lang="ts">
  import router from "src/router";
  import { ref } from "vue";
  // import { onMounted } from "vue";
  // import { useStore } from "src/store/store";

  // const store = useStore();
  let showMenuBar = ref(true);

  // onMounted(() => {
  // });
</script>

<template>
  <div class="q-pa-md">
    <q-layout view="hHh LpR fFf">
      <q-header v-model="showMenuBar" class="text-left bg-blue-5" elevated reveal>
        <!-- Menu bar: -->
        <q-toolbar>
          <q-toolbar-title class="my-title" :shrink="true" style="cursor: pointer" @click="router.push('/')">
            Dolgozat minta
          </q-toolbar-title>
          <q-btn :class="{ active: $route.path === '/' }" clickable flat label="Home" no-caps to="/" />
          <q-btn :class="{ active: $route.path === '/empty' }" clickable flat label="Empty" no-caps to="/empty" />
          <q-toolbar-title class="my-title" />
        </q-toolbar>
      </q-header>

      <!-- Main container (DON'T DELETE!) -->
      <q-page-container id="container">
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </q-page-container>
    </q-layout>
  </div>
</template>

<style lang="scss">
  .active {
    background-color: #44a5f1;
    color: yellow;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .my-title {
    font-size: 10px;
    @media (min-width: 400px) {
      font-size: calc(10px + 0.5vw);
    }
    @media (min-width: 800px) {
      font-size: calc(14px + 0.5vw);
    }
    @media (min-width: 1200px) {
      font-size: calc(18px + 0.5vw);
    }
  }
</style>
