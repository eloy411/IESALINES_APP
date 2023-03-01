<template>
  <h1>bienvenida</h1>
  <button @click="sendToken">SendToken</button>
</template>

<script>
import { ref, defineComponent } from "vue";
import  ConfigurationComponent   from "src/components/backoffice/ConfigurationComponent.vue";
import { useAuthStore } from "src/stores/authStore";


export default defineComponent({
  name: "ConfiguracionPage",


  components: {
    // ConfigurationComponent
  },

  setup () {
    const authStore = ref(useAuthStore());

    return {
      authStore,
      sendToken() {
        let myUrl = window.location.href
        // let param = myUrl.split('?');
        // let mysubToken = param[1].split('=');
        // let myToken = mysubToken[1].split('&')

        let param = myUrl.split('/');
        let token = param[4].split('?')
        console.log(token[0]);

        authStore.value.urlTokenMail = param[4]; //param[1]
        authStore.value.tokenMail = token[0]; //myToken[0]


        authStore.value.postJuradoFromEmail();

        // console.log(myToken[0]);
        // console.log(param[1]);
        console.log('sendToken');
      }
    }
  }
})

</script>
