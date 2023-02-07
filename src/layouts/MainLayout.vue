<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          style="color: black"
        />
        <q-toolbar-title shrink class="row items-center no-wrap">
        </q-toolbar-title>
        <q-space></q-space>
        <MenuPerfilButton
          :isAuth="authStore.isAuth"
          :authUserAvatar="'urlimagen'"
        >
        </MenuPerfilButton>
      </q-toolbar>
    </q-header>

    <q-drawer class="bg-black" v-model="leftDrawerOpen" show-if-above bordered>
      <div class="q-mb-md q-pa-md row center-header self-end">
        <img src="~assets/logo.svg" style="height: 48px" />
        <h4  class="text-secondary">{{ year }}</h4>
      </div>
      <q-list>
        <q-expansion-item
          class="white"
          :content-inset-level="0.5"
          expand-separator
          label="Votación"
        >
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <div class="q-pa-md q-gutter-sm">
        <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" />
        <q-breadcrumbs-el label="Components" />
        <q-breadcrumbs-el label="Breadcrumbs" />
        </q-breadcrumbs>
      </div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import MenuPerfilButton from "src/components/MenuPerfilButton.vue";
import { useAuthStore } from "src/stores/authStore";

const linksList = [
  {
    title: "Jurado",
    caption: "quasar.dev",
    icon: "school",
    link: "/jurado",
  },
  {
    title: "Ronda 1",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Resultados",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev/",
  },
  {
    title: "Configuración",
    caption: "forum.quasar.dev",
    link: "/configuracion",
  },
];
export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    MenuPerfilButton,
  },

  setup() {
    const authStore = useAuthStore();
    const leftDrawerOpen = ref(false);
    const year = ref('2022');

    return {
      authStore,
      essentialLinks: linksList,
      leftDrawerOpen,
      year,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style>
.white {
  color: white;
}

.center-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
