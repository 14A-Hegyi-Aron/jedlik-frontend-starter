<script setup lang="ts">
  import { onMounted } from "vue";
  import { useStore } from "src/store/store";

  const store = useStore();

  onMounted(() => {
    store.one_GetAll();
  });
</script>

<template>
  <q-page>
    <div class="row justify-center">
      <q-select v-model="store.app.selectedCategory" label="Kategória" :options="store.one.documents" />
      {{ store.app.selectedCategory }}
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
  h2 {
    font-size: 3vw;
  }
</style>
