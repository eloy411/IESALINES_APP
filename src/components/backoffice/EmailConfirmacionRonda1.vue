<template>

  <div class="my-card">
      <q-card class="my-card" :rows="rows">
          <q-card-section>
              <q-form
                  class="q-gutter-md"
                  >

              <h5>Email de confirmación Ronda1 para {{ tipoStore.mailDestinatario }} </h5>
              <p>De: Premios Aspid 	&lt;sede@premiosaspid.es&gt; </p>

              <div class="asunto">
                <label>Asunto:</label><q-input square outlined v-model="text" style="width:100% "/>
              </div>


              <q-input
              v-model="text"
              outlined
              type="textarea"
              />
              <q-btn label="Enviar" type="submit" color="red" @click="showNotif()" style="display:flex;align-items:center;justify-content: center;margin-left: 50%;"></q-btn>
          </q-form>
          </q-card-section>
      </q-card>

  </div>

  </template>
  <script>
  import { ref, defineComponent } from 'vue';
  import { useJuradoStore } from "src/stores/juradoStore";
  import { useTipoJuradosStore } from "src/stores/TipoJuradosStore";
  import { useQuasar } from 'quasar';
  export default defineComponent ({
    name: 'EmailConfirmacionRondaComponent',
    setup () {
      const juradoStore = ref(useJuradoStore());
      const tipoStore = ref(useTipoJuradosStore());
      const rows = juradoStore.value.juradosRonda;
       const $q = useQuasar();
      return {
         rows,
         juradoStore,
         tipoStore,
        text: ref(''),

          showNotif () {
          $q.notify({
            message: 'Email Enviado',
            color: 'green'
          })
        }
      }
    }
  })
  </script>
  <style>
  .asunto{
      display: flex;
      align-items: center;
      gap:1em;

  }
  .inputAsunto{
      max-width: 100%;
  }

  </style>
