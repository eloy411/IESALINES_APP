<template>
    <q-layout view="hHh lpR fFf">

      <q-header elevated class="bg-primary text-white flex">
        <q-toolbar class="nav">

          <ul class="flex" style="list-style: none; align-items:center">
            <q-toolbar-title shrink class="row items-center no-wrap">
              <img src="~assets/logo.svg" style="height: 30px" />
            </q-toolbar-title>
            <li class="linksNavA text linksNav">Índice</li>
            <li class="linksNav text">Ayuda</li>
            <li><q-btn no-caps rounded color="red" class="q-ml-xl text" label="Ranking" /></li>
          </ul>


          <div>
            <p class="diasRes q-mt-md">Te quedan <b>{{ dias }}</b> dias para emitir tus votos</p>
          </div>

          <!-- test -->
          <div class="flex" style="align-items: center;">
            <p class="text q-ml-xl q-mt-md">Ronda 1: Tu progreso </p>
            <q-circular-progress show-value :value="value" size="2.2rem" color="red" center-color="grey-8" class="q-ml-md textPorcen">
              {{ value }}%
            </q-circular-progress>
          </div>


          <MenuPerfilButton
            :isAuth="authStore.isAuth"
            :authUserAvatar="'urlimagen'"
            class="q-ml-xl"
          >
          </MenuPerfilButton>

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
  import MenuPerfilButton from "src/components/backoffice/MenuPerfilButtonComponent.vue";

  export default defineComponent({
    name: "VotacionLayout",
    components: {
      MenuPerfilButton,
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

  .textPorcen {
    font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 17px;
  }
  .text {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }
  .nav {
    justify-content: space-between;
  }

  .linksNavA {
    border-bottom: 1px solid #E22C38;
;
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
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 22px;
    text-align: right;
    letter-spacing: 0.03em;
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
