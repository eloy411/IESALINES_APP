<template>
  <div class="q-pa-lg padding">
    <!-- <q-btn label="Reset" push color="white" text-color="primary" @click="reset" class="q-mb-md" /> -->

    <q-stepper v-model="step" header-nav ref="stepper" active-color="info" animated>
      <q-step :name="1" title="" prefix="1" :done="done1">


        <q-input outlined standout v-model="juradoStore.Email" type="email"  >
          <template v-slot:prepend>
            <q-icon name="mail" />
          </template>
        </q-input>

        <q-stepper-navigation>
          <q-btn @click="() => { done1 = true; step = 2;juradoStore.postSteperJurado(); }" color="secondary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="2" title="" caption="" prefix="2" icon="create_new_folder" :done="done2">

      <div class="q-pa-md">
        <div class="q-gutter-y-md column">
          <div>
            <div class="my-input q-pa-xs center">
              <div class="text-right q-pa-md" style="grid-column: 1 / 1;" >Tipo</div>
              <q-select style="grid-column: 2 / 4;" outlined v-model="juradoStore.Tipo" :options="juradoStore.optionsTipoJurado " label="" />
            </div>
            <div class="my-input q-pa-xs center">
              <div class="text-right q-pa-md" style="grid-column: 1 / 1;">Nombre</div>
              <q-input style="grid-column: 2 / 4;" outlined  v-model="juradoStore.Nombre" label=""></q-input>
            </div>
            <div class="my-input q-pa-xs center">
              <div class="text-right q-pa-md" style="grid-column: 1 / 1;">Cargo</div>
              <q-input style="grid-column: 2 / 4;" outlined v-model="juradoStore.Cargo" label=""></q-input>
            </div>
            <div class="my-input q-pa-xs center">
              <div class="text-right q-pa-md" style="grid-column: 1 / 1;">Empresa</div>
              <q-input style="grid-column: 2 / 4;" outlined  v-model="juradoStore.Empresa" label=""></q-input>
            </div>
          </div>
        </div>
      </div>

      <div class="btn-group center">
        <q-btn class="q-mr-lg" style="width: 37%;"  color="secondary" @click="postJurado(true)" to="/backoffice/jurado/InvitacionJurado" label="Añadir y Enviar invitación" />
        <q-btn class="q-mr-lg" style="width: 37%;" outline color="secondary"  @click="postJurado(false), showNotif()" label="Solo añadir" />
      </div>

      </q-step>
    </q-stepper>
  </div>
</template>



<script>
import { ref, defineComponent } from "vue";
import { useJuradoStore } from "src/stores/juradoStore";
import { useLayoutStore } from "src/stores/layoutStore";
import { useQuasar } from 'quasar'

export default defineComponent( {
  name: "NewJuradoStepperForm",
  setup () {
    const juradoStore = ref(useJuradoStore());
    const step = ref(1);
    const layoutStore = ref(useLayoutStore());
    const done1 = ref(false)
    const done2 = ref(false)
    const $q = useQuasar()

    return {
      step,
      done1,
      done2,
      juradoStore,
      layoutStore,

      postJurado(invitacion) {
        // console.log(layoutStore.value.id_edicion)
        juradoStore.value.postJurado(layoutStore.value.id_edicion, invitacion);
      },

      reset () {
        done1.value = false
        done2.value = false
        done3.value = false
        step.value = 1
      },

      showNotif () {
        $q.notify({
          message: 'Jurado añadido.',
          color: 'green'
        })
      }

    }
  },
  mounted(){
    this.juradoStore.getJuradoTipo();
  }
})
</script>


<style>
  .padding {
    padding: 5em;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .btn-group {
    padding: 1em;
    flex-direction: column;
    gap: 1em;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .my-input {
    display: grid;
    /* grid-template-columns: repeat(4, minmax(10em, 1fr)); */
    grid-template-columns: repeat(4, 1fr);
  }

  .my-p {
    display:flex;
    align-items: center;
    flex-direction: row-reverse;
    padding: 1.5em;
  }

  @media (max-width: 600px) {
    .my-input {
      display: grid;
    /* grid-template-columns: repeat(4, minmax(10em, 1fr)); */
    grid-template-columns: repeat(1, 1fr);
    }
  }

</style>
