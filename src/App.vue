<template>
  <component :is="DefaultLayout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
</script>
