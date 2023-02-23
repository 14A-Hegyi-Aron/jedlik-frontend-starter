<script setup lang="ts">
  import { onMounted } from "vue";
  import { useStore } from "../store/store";

  const store = useStore();

  onMounted(() => {
    store.one_GetAll();
    store.one.document.nev = store.one.documents[0].nev;
  });
</script>

<template>
  <q-page>
    <div class="row justify-center">
      <q-select
        v-model="store.app.selectedCategory"
        clearable
        emit-value
        filled
        label="categoryNameField"
        map-options
        option-label="nev"
        option-value="nev"
        :options="store.one.documents"
        :rules="[(v) => v != null || 'Please choose one!']"
      />
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
  h2 {
    font-size: 3vw;
  }
</style>
