<template>
  <component id="app" :is="DefaultLayout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
</script>

<style>
#app {
  font-family: "Roboto Slab", serif;
}
</style>
