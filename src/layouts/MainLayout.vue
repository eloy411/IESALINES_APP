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
      <div class=" q-pa-md row center-header self-end">
        <img src="~assets/logo.svg" style="height: 48px" />
        <h6  class="text-secondary">{{ year }}</h6>
      </div>
      <q-list>
        <!-- <q-icon name="how_to_vote" /> -->
        <q-expansion-item
          class="white"
          icon="how_to_vote"
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
        <BreadcrumbsComponent></BreadcrumbsComponent>
      </div>
      
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { storeToRefs } from 'pinia'
import EssentialLink from "components/EssentialLink.vue";
import MenuPerfilButton from "src/components/MenuPerfilButton.vue";
import { useAuthStore } from "src/stores/authStore";
import { useLayoutStore } from "src/stores/layoutStore";
import BreadcrumbsComponent from "src/components/BreadcrumbsComponent.vue";
export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    MenuPerfilButton,
    BreadcrumbsComponent,
  },

  setup() {
    const authStore = useAuthStore();
    const layoutStore = useLayoutStore();
    const leftDrawerOpen = ref(false);


    const {year, linksList} = storeToRefs(layoutStore);


    return {
      authStore,
      layoutStore,
      year,
      essentialLinks: linksList ,
      leftDrawerOpen,
      // year,
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
  align-items: baseline;
  justify-content: space-evenly;
}
</style>
