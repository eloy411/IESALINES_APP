<template>
  <div v-if="!popUpPostSubmit" class="q-pa-md form">
    <div class="flex gap q-mb-xl" style="justify-content: space-between; align-items: center;">
      <img src="~assets/logo.svg" style="height: 50px;" />
      <div class="container text-color-white q-pa-md flex gap" >
        <img class="" src="~assets/info.svg" style="height: 15px; align-items:center;">
        Actualiza la información errónea o incompleta y envía el siguiente formulario
      </div>
    </div>
    <main class="main">
      <div>
        <div class="text-color-white q-mb-md">Foto de perfil</div>
        <div>
          <img style="position: absolute; padding: 1em 1em 1em 18em;" src="~assets/edit.svg" />
          <img style="background: #8C8C8C;border-radius: 20px; padding: 3em 2em 0 2em;" src="~assets/user.svg" />
          <div class="text-color-white q-pa-md flex gap" style="font-weight: 400;" >
            <img class="" src="~assets/info-wh.svg" style="height: 20px; align-items:center;">
            ¿Cómo necesitamos tu foto?
          </div>
        </div>
      </div>
      <div class="q-gutter-y-md column">
        <div>
          <div class="my-input q-pa-xs center ">
            <div class="text-left q-pa-md text-color-white">Nombre</div>
            <q-input class="white" filled style="grid-column: 2 / 4;" outlined  v-model="juradoStore.Nombre" label="Nombre"></q-input>
          </div>
            <div class="my-input q-pa-xs center">
              <div class="text-left q-pa-md text-color-white">Cargo</div>
              <q-input class="white" filled style="grid-column: 2 / 4;" outlined v-model="juradoStore.Cargo" label="Cargo"></q-input>
            </div>
            <div class="my-input q-pa-xs center">
              <div class="text-left q-pa-md text-color-white">Empresa</div>
              <q-input filled class="white" outlined  v-model="juradoStore.Empresa" label="Empresa"></q-input>
            </div>
            <div class="my-input q-pa-xs center">
            <div class="text-left q-pa-md text-color-white">Bio del Jurado</div>
            <q-input class="white" type="textarea" style="grid-column: 2 / 4;" outlined v-model="juradoStore.Bio" label="" placeholder="bio del jurado">
            </q-input>
            <div class="flex" style="align-items:center; gap:.25em;">
              <div><q-checkbox keep-color color="secondary" v-model="val" /></div>
              <p class="text-white">Acepto las <span style="color:#E22C38;">condiciones de participación</span> como jurado</p>
            </div>
            <q-btn no-caps class="button text-white"  @click="juradoStore.putJuradoAceptacionmEmail(); popUpPostSubmit = true">Submit</q-btn>
            <!-- <q-btn no-caps class="button text-white"  @click="sendToken(false) ">SendToken</q-btn> -->
          </div>
        </div>
      </div>
    </main>
  </div>
  <div v-else>

    <div class="q-p-md flex" style="flex-direction: column;">
      <div  class="button-close" style="max-width: 1500px; " >
        <img class="img-close"  src="~assets/close.svg" @click="popUpPostSubmit = false" />
      </div>
      <h1
      class="text-white"
      style="font-family: 'Playfair Display';font-style: italic;font-weight: 900;font-size: 61.7647px;line-height: 126px;text-align: center">
        ¡Gracias!
      </h1>
      <p
      class="text-white"
      style="font-family: 'Roboto';font-style: normal;font-weight: 500;font-size: 16px;line-height: 20px;text-align: center;letter-spacing: 0.02em;"
      >Por formar parte de los premios Aspid.
      </p>
      <p
      class="text-white"
      style="font-family: 'Roboto';font-style: normal;font-weight: 500;font-size: 16px;line-height: 20px;text-align: center;letter-spacing: 0.02em;"
      >Ahora ya tienes tu perfil completo.<br>¿Estas preparado para comenzar las votaciones?
      </p>
      <p
      class="text-white"
      style="font-family: 'Roboto';font-style: normal;font-weight: 500;font-size: 16px;line-height: 20px;text-align: center;letter-spacing: 0.02em;"
      >Deseamos que disfrutes la experiencia de este gran<br> evento para la publicidad farmacéutica iberoamericana.
      </p>

      <div class="text-white q-mt-xl"
      style="font-family: 'Roboto';font-style: normal;font-weight: 500;font-size: 16px;line-height: 20px;text-align: center;letter-spacing: 0.02em;"
      >
      <div class="flex" style="justify-content: center;align-items:center;gap:1.5em;" >
        <p>Añadir a mi calendario</p>
        <p style="display:flex;align-items:center;gap:.5rem;" ><img src="~assets/calendar.svg"/>icalendar</p>
        <p style="display:flex;align-items:center;gap:.5rem;"><img src="~assets/calendar.svg"/>google calendar</p>

      </div>

    </div>

    </div>

  </div>
</template>


<script>
import { ref, defineComponent } from "vue";
import { useAuthStore } from "src/stores/authStore";
import { useJuradoStore } from "src/stores/juradoStore";


export default defineComponent({
  name: "ConfiguracionPage",


  components: {
    // ConfigurationComponent
  },

  setup () {
    const authStore = ref(useAuthStore());
    const juradoStore = ref(useJuradoStore());
    const popUpPostSubmit = ref(false);

    return {
      authStore,
      popUpPostSubmit,
      juradoStore,
      val: ref(true),
      sendToken(val) {
        let myUrl = window.location.href
        // let param = myUrl.split('?');
        // let mysubToken = param[1].split('=');
        // let myToken = mysubToken[1].split('&')

        let param = myUrl.split('/');
        let token = param[4].split('?')
        let data = '';
        console.log(token[0]);

        authStore.value.urlTokenMail = param[4]; //param[1]
        authStore.value.tokenMail = token[0]; //myToken[0]


        if (val == true) {
          authStore.value.postJuradoFromEmail();
        } else {
          data = authStore.value.postAceptacion();
          console.log(data);
        }

        // console.log(myToken[0]);
        // console.log(param[1]);
        console.log('sendToken');
      }
    }
  },
  async mounted() {
        let myUrl = window.location.href
        // let param = myUrl.split('?');
        // let mysubToken = param[1].split('=');
        // let myToken = mysubToken[1].split('&')

        let param = myUrl.split('/');
        let token = param[4].split('?')
        // let data = '';
        // console.log(token[0]);

        this.authStore.urlTokenMail = param[4]; //param[1]
        this.authStore.tokenMail = token[0]; //myToken[0]

        await this.authStore.postAceptacion();
        // console.log(this.authStore.data[0].nombre);

        this.juradoStore.token = param[4];
        this.juradoStore.Nombre = this.authStore.data[0].nombre;
        this.juradoStore.Empresa = this.authStore.data[0].empresa;
        this.juradoStore.Cargo = this.authStore.data[0] .cargo;
  }
})

</script>


<style>
  body {
    background: #2F353B;
  }

  p {
    margin-top: .65rem!important;
  }

  .button-close {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 5em;
    /* padding: 12em 25em 2em 2em; */
  }

  .img-close:hover {
    cursor: pointer;
  }

  .main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* display: flex;
    gap: 10em; */
  }

  .button {
    background: #E22C38;
    /* Aspid */

    border: 1px solid #E22C38;
    /* drop-shadow/button-primary */

    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
    border-radius: 30px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }
  .gap {
    gap: 1.5em;
    align-items: center
  }

  .container {
    background: #262626;
    border-radius: 10px;
  }

  .form {
    padding: 10em 23em 0em 23em;
    /* max-width: 800px; */
    /* display: flex;
    align-items: center;
    justify-content: center; */
  }

  .text-color-white {
    color: white;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    letter-spacing: 0.1px;
  }

  .white {
    background: #FFFFFF;
    /* Neutral/5 */

    border: 1px solid #D9D9D9;
    border-radius: 10px;
  }
</style>
