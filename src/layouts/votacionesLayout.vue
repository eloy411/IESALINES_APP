<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title shrink class="row items-center no-wrap">
          <img src="~assets/logo.svg" style="height: 30px" />
        </q-toolbar-title>

        <div>
          <li class="linksNavA linksNav">Índice</li>
        </div>

        <div>
          <li class="linksNav">Ayuda</li>
        </div>

        <q-btn rounded color="red" class="q-ml-xl" label="Ranking" />

          <div>
            <p class="diasRes q-mt-md">Te quedan <b>{{ dias }}</b> dias para emitir tus votos</p>
          </div>

        <div>
          <p class="q-ml-xl q-mt-md">Ronda 1: Tu progreso </p>
        </div>

        <q-circular-progress show-value :value="value" size="2.2rem" color="red" center-color="grey-8" class="q-ml-md">
          {{ value }}%
        </q-circular-progress>

        <MenuOldPerfilButton
          :isAuth="authStore.isAuth"
          :authUserAvatar="'urlimagen'"
          class="q-ml-xl"
        >
        </MenuOldPerfilButton>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>


<script>
import { defineComponent, ref } from "vue";
import { useAuthStore } from "src/stores/authStore";
import MenuOldPerfilButton from "src/components/backoffice/MenuPerfilButtonComponent.vue";

export default defineComponent({
  name: "VotacionLayout",
  components: {
    MenuOldPerfilButton,
  },
  setup() {
    const authStore = useAuthStore();
    return {
      authStore,
      value: 50,
      dias: 10
    };
  },
});
</script>

<style>
.linksNavA {
  border-bottom: 1px solid red;
  margin-top: 1px;
}

.linksNav {
  color: white;
  cursor: pointer;
  list-style: none;
  margin-left: 2rem;
}

.diasRes {
  margin-left: 20rem;
  /* margin-top: 0.8rem; */
}

.diasRes b {
  background-color: white;
  color: black;
  font-weight: normal;
  border-radius: 2px;
}

.userButton {
  background-image: url('https://cdn.quasar.dev/img/avatar5.jpg');
  background-repeat: no-repeat;
  background-size: 3rem;
}
</style>
