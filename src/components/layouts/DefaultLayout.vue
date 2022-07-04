<template>
  <va-navbar color="brown_100" class="mb-2">
    <template #left>
      <va-navbar-item>
        <router-link to="/">
          <h1 class="display-2">Índice de paróquias PH Vox</h1>
        </router-link>
      </va-navbar-item>
    </template>
    <template #right>
      <va-navbar-item class="flex">
        <div class="align--end">
          <div v-if="isLoggedIn">
            <va-button
              class="mx-2 display-6"
              color="brown_500"
              :rounded="false"
            >
              Perfil
            </va-button>
            <va-button
              class="mx-2 display-6"
              color="brown_500"
              outline
              :rounded="false"
              @click="isLoggedIn = false"
            >
              Sair
            </va-button>
          </div>
          <div v-else>
            <va-button
              class="mx-2 display-6"
              color="brown_500"
              gradient
              @click="isLoggedIn = true"
            >
              Entrar
            </va-button>
          </div>
        </div>
      </va-navbar-item>
    </template>
  </va-navbar>
  <slot />
</template>

<script setup lang="ts">
import { ref } from "vue";

const isLoggedIn = ref(false);
</script>

<style>
h1.display-2 {
  font-family: "Roboto Slab", serif;
}
</style>
