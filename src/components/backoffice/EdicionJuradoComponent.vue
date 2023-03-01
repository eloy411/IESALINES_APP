<template>
  <div class="q-pa-md padding">

    <h4 v-if="juradoStore.Nombre !== ''">{{ juradoStore.Nombre }}</h4>
    <h4 v-else>No hay nombre de usuario</h4>

    <div class="q-gutter-y-md column">
      <div>
        <div class=" q-pa-xs center">
          <q-img src="../../assets/user.jpg" style="border-radius: 50%; width: 15%;" />
        </div>
        <div class="my-input q-pa-xs center">
          <div class="text-right q-pa-md" style="grid-column: 1 / 1;">Nombre</div>
          <q-input style="grid-column: 2 / 4;" outlined v-model="juradoStore.Nombre" label=""></q-input>
        </div>
        <div class="my-input q-pa-xs center">
          <div class="text-right q-pa-md" style="grid-column: 1 / 1;">Email</div>
          <q-input style="grid-column: 2 / 4;" outlined standout v-model="juradoStore.Email" type="email">
            <template v-slot:prepend>
              <q-icon name="mail" />
            </template>
          </q-input>
        </div>
        <div class="my-input q-pa-xs center">
          <div class="text-right q-pa-md" style="grid-column: 1 / 1;">Tipo</div>
          <q-select style="grid-column: 2 / 4;" outlined v-model="juradoStore.Tipo"
            :options="juradoStore.optionsTipoJurado" label="" />
        </div>
        <div class="my-input q-pa-xs center">
          <div class="text-right q-pa-md" style="grid-column: 1 / 1;">Cargo</div>
          <q-input style="grid-column: 2 / 4;" outlined v-model="juradoStore.Cargo" label=""></q-input>
        </div>
        <div class="my-input q-pa-xs center">
          <div class="text-right q-pa-md" style="grid-column: 1 / 1;">Empresa</div>
          <q-input style="grid-column: 2 / 4;" outlined v-model="juradoStore.Empresa" label=""></q-input>
        </div>
        <div class="my-input q-pa-xs center">
          <div class="text-right q-pa-md" style="grid-column: 1 / 1;"></div>
          <q-input type="textarea" style="grid-column: 2 / 4;" outlined v-model="juradoStore.Bio" label=""
            placeholder="bio del jurado"></q-input>
        </div>

        <div class="btn-group center">
          <q-btn class="q-mr-lg" color="secondary" @click="juradoStore.putJurado(); triggerPositive()" label="Guardar" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref, defineComponent } from "vue";
import { useJuradoStore } from "src/stores/juradoStore";
import { useQuasar } from 'quasar'

export default defineComponent({
  name: "EdicionJurado",
  setup() {
    const juradoStore = ref(useJuradoStore());
    const $q = useQuasar();
    return {
      juradoStore,
      triggerPositive() {
        if (juradoStore.value.notification == true) {
          $q.notify({
            type: 'positive',
            message: 'Jurado guardado'
          })
        } else {
          $q.notify({
            type: 'Negative',
            message: 'Jurado no guardado'
          })
        }
      },
    };
  },
  mounted() {
    // just in case, to prevent another petition
    if (this.juradoStore.tipoJuradoChecker == false) {
      this.juradoStore.getJuradoTipo();
    }
  }
});
</script>


<style>
.form {
  padding: 10em;
}

.padding {
  padding: 3em;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;

}

.btn-group {
  padding: 1em;
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
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  padding: 1.5em;
}

@media (max-width: 600px) {
  .my-input {
    /* display: grid; */
    /* grid-template-columns: repeat(4, minmax(10em, 1fr)); */
    /* grid-template-columns: repeat(1, 1fr); */
    display: flex;
    flex-direction: column;
  }

  .form {
    padding: 5em;
  }
}
</style>
