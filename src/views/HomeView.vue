<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { useFetch } from "@vueuse/core";
import { backendUrl } from "@/configuration"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
  async beforeMount() {
    const { data } = await useFetch(backendUrl).json();
    console.table(data);
  },
});
</script>
