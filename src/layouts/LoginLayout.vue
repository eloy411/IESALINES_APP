<template>
  <q-layout>
    <q-page-container>

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LoginLayout",

  setup() {

    return {

    };
  },
});
</script>

<style>

</style>
