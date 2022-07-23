<template>
  <div class="mb-4" style="display: flex; align-items: stretch">
    <div style="height: 200%">
      <va-sidebar
        v-for="(submenu, key) in menu"
        :color="submenu.color"
        text-color="white"
        minimizedWidth="64px"
        width="15rem"
        :key="key"
      >
        <va-sidebar-item active-color="background" text-color="white">
          <va-sidebar-item-content>
            <va-sidebar-item-title> {{ submenu.title }} </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>
        <va-sidebar-item
          v-for="item in submenu.items"
          :key="item.title"
          :active="item.route === path"
          :active-color="submenu.colorActive"
        >
          <va-sidebar-item-content>
            <va-icon :name="item.icon" />
            <va-sidebar-item-title>
              {{ item.title }}
            </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>
      </va-sidebar>
    </div>
    <slot />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const { path } = useRoute();
const menu = [
  {
    title: "Olá Usuário",
    color: "brown_300",
    colorActive: "brown_500",
    items: [
      { title: "Voltar à pagina inicial", icon: "chevron_left" },
      { title: "Meu Perfil", icon: "person", route: "/profile" },
      { title: "Administrar usuários", icon: "manage_accounts" },
    ],
  },
  {
    title: "Paróquias",
    color: "green_300",
    colorActive: "green_500",
    items: [
      { title: "Criar Nova", icon: "add_circle" },
      { title: "Editar Existente", icon: "church" },
    ],
  },
  {
    title: "Sacerdotes",
    color: "blue_200",
    colorActive: "blue_400",
    items: [
      { title: "Criar Novo(a)", icon: "add_circle" },
      { title: "Editar Existente", icon: "account_circle" },
    ],
  },
];
</script>
