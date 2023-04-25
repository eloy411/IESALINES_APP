<template>
  <h1></h1>
  <!-- <button @click="login" >Click</button> -->
</template>

<script>
import { defineComponent, ref } from "vue";
import { useAuthStore } from "src/stores/authStore";
import { useJuradoStore } from "src/stores/juradoStore";
export default defineComponent({
  name: "LoginLogicPage",
  setup() {
    const authStore = ref(useAuthStore());
    const juradoStore = ref(useJuradoStore());



    return {
      authStore,
      juradoStore,
      async login(){
        await this.authStore.getTokenUser();

        const myUrl = window.location.href;
        const param = myUrl.split("/");
        const postAuthParam = param[6].split("?");
        const finalParams = param[5] + "?" + postAuthParam[1]

        const url = "http://localhost:8001/api/login/" + finalParams;

        await this.authStore.getUrlUserData(url);

        // await this.juradoStore.getJurados();


      }
    };
  },
  mounted() {
    this.login();
  }
});
</script>
