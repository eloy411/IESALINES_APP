<template>
  <!-- <h3>Jurado Aspid 2022</h3> -->
  <q-card flat bordered class="my-card">
    <div class="q-pa-md" style="max-width: 1080px">
      <q-list bordered v-model="data.tipoPopUp" @click="data.tipoPopUp = 'EmailMessConfirmacionRona1'">
        <q-expansion-item group="somegroup" label="Mensaje & Email confirmación ronda 1"
          header-class="text-secondry text-weight-bolder text-subtitle1">
          <q-card>
            <q-card-section>
              <div class="row">
                <div class="column">
                  <p class="text-grey-14 text-weight-medium texto1 q-ml-md">Mensaje que aparece y email que se envía al
                    jurado cuando éste termina su votación en la ronda 1.</p>

                  <q-select class="jurado-input q-mt-lg q-ml-md" outlined v-model="data.tipo"
                    :options="juradoStore.optionsTipoJurado" @click="getJuradoTipo(tipoJ)" />


                  <q-separator inset class="q-mt-lg" size="1px" />


                  <p class="q-mt-lg q-ml-md"><b>Mensaje (PopUp) en aplicación de votación</b></p>

                  <div class="q-ml-md" style="max-width: 32rem;max-height: 33rem;">

                    <q-input v-model="data.mensaje" outlined type="textarea" class="text-primary" />

                  </div>

                  <p class="q-ml-md q-mt-md"><b>Fecha y hora de la cita telemática para crear links al calendar</b></p>



                  <div id="q-app">
                    <div class="q-mt-lg q-ml-md" style="max-width: 30rem">
                      <q-input outlined v-model="data.fechaReunion">
                        <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy>
                              <q-date v-model="data.fechaR" />
                              <q-time v-model="data.horaReunion" />
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>
                    </div>
                  </div>
                  <div>
                    <p class="q-ml-md"><b>Email de confirmación que se le envía al Jurado</b></p>

                    <router-link class="q-ml-md"
                      :to="{ name: 'EmailConfirmacionRondaComponent'}">
                      Personalizar email
                    </router-link>
                  </div>
                </div>
                <div class="column">
                  <q-img src="../../assets/Frame1.png" class="imagen1" style="height: 340px; max-width: 350px" />
                </div>
              </div>
              <q-btn class="botonG q-mt-md" color="red" label="Guardar" @click="putConfig(data); showNotif();" />
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-space />
      </q-list>
      <q-space />
      <q-list bordered v-model="data.tipoPopUp" @click="data.tipoPopUp = 'PlazoVotacionRonda1'">
        <q-expansion-item group="somegroup" label="Plazo votación ronda 1"
          header-class="text-primary text-weight-bolder text-subtitle1">
          <q-card>
            <q-card-section>
              <p class="text-grey-14 text-weight-medium texto1 q-ml-md">Fecha limite votación ronda 1.</p>

              <q-select class="jurado-input q-mt-lg q-ml-md" outlined v-model="data.tipo"
                :options="juradoStore.optionsTipoJurado" />

              <q-separator inset class="q-mt-lg" size="1px" />

              <p class="q-ml-md q-mt-md"><b>Fecha y hora límite</b></p>

              <div id="q-app">
                    <div class="q-mt-lg q-ml-md" style="max-width: 30rem">
                      <q-input outlined v-model="data.formattedDate2">
                        <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy>
                              <q-date v-model="data.fechaLimite" />
                              <q-time v-model="data.horaLimite" />
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>
                    </div>
                  </div>
              <q-btn class="botonG q-mt-md" color="red" label="Guardar"
                @click="juradoStore.putConfigLimitVotaciones(data); showNotif()" />
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>

      <q-space />


      <q-list bordered v-model="data.tipoPopUp" @click="data.tipoPopUp = 'AsociacionCategoriasJurados'">
        <q-expansion-item group="somegroup" label="Asociación categorías y jurado"
          header-class="text-primary text-weight-bolder text-subtitle1"
          @click="categoriaStore.getSubCategoriasIndependent();">
          <q-card>
            <q-card-section>
              <p class="text-grey-14 text-weight-medium texto1 q-ml-md">Que categorías vota cada jurado.</p>
              <q-select class="jurado-input q-mt-lg q-ml-md" outlined v-model="data.tipo"
                :options="juradoStore.optionsTipoJurado" @update:model-value="getSubcategoriasBaseTipoJurado($event)" />

              <q-separator inset class="q-mt-lg" size="1px" />

              <div>
                <div class="row no-wrap justify-around q-px-md q-pt-md" style="align-items: center;">
                  <div class="drop-target rounded-borders" style="gap: 5em;">
                    <q-list>
                      <q-item tag="label" v-ripple v-for="(subcat, key) in categoriaStore.subCategoriasArr" :key="key">
                        <q-item-section avatar>
                          <q-checkbox v-model="element" :val="subcat" color="" @click="console($event)" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>{{ subcat.Categoria }}</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </div>


                  <div style=" display:flex; flex-direction: column;">
                    <q-btn class="q-pa-md" @click="moveToSelectedCategories"
                      style="border:1px solid #c0c0c0; display:flex;align-items:center; justify-content: center;background-color:#ebebeb;border-radius:5px">
                      <q-icon name="arrow_forward_ios" />
                    </q-btn>
                    <q-btn class="q-pa-md q-mt-md" @click="desmoveToSelectedCategories"
                      style="border:1px solid #c0c0c0; display:flex;align-items:center; justify-content: center; background-color:#ebebeb;border-radius:5px">
                      <q-icon name="arrow_back_ios" />
                    </q-btn>

                  </div>


                  <div class="drop-target rounded-borders">
                    <q-list>
                      <q-item tag="label" v-ripple
                        v-for="(subcatselect, key) in categoriaStore.subcategoriasMutationJuradoEnabled" :key="key">
                        <q-item-section avatar>
                          <q-checkbox v-model="elementSelected" :val="subcatselect" color="" @click="console($event)" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>{{ subcatselect.Categoria }}</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>

                  </div>
                </div>
              </div>

              <q-btn class="botonG2" color="red" label="Guardar" @click="putSubcategories(data); showNotif()" />
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>


      <q-space />
      <q-list bordered v-model="data.tipoPopUp" @click="data.tipoPopUp = 'MensageBienvenida'">
        <q-expansion-item group="somegroup" label="Mensaje pop-up bienvenida"
          header-class="text-primary text-weight-bolder text-subtitle1">
          <q-card>
            <q-card-section>
              <div class="row">
                <div class="column">
                  <p class="text-grey-14 text-weight-medium texto1 q-ml-md">Mensaje y video de bienvenida para cada jurado
                    al
                    acceder a la aplicación.</p>
                  <q-select class="jurado-input q-mt-lg q-ml-md" outlined v-model="data.tipo"
                    :options="juradoStore.optionsTipoJurado" />

                  <q-separator inset class="q-mt-lg" size="1px" />

                  <p class="q-ml-md q-mt-md"><b>Titulo</b></p>
                  <q-input class="input-texts q-ml-md" outlined v-model="data.titulo" :dense="dense" />

                  <p class="q-ml-md q-mt-md"><b>Subtitulo</b></p>
                  <q-input class="input-texts q-ml-md" outlined v-model="data.subtitulo" :dense="dense" />

                  <p class="q-ml-md q-mt-md"><b>Mensaje</b></p>
                  <q-input class="input-texts q-ml-md" v-model="data.mensaje" outlined />

                  <p class="q-ml-md q-mt-md"><b>Ruta video</b></p>
                  <q-input class="input-texts q-ml-md" outlined v-model="data.rutaVideo" :dense="dense" />
                </div>
                <div class="column">
                  <q-img src="../../assets/Explicacion.png" class="imagen2" />
                </div>
              </div>
              <q-btn class="botonG2" color="red" label="Guardar" @click="putConfig(data)" />
              <!-- showNotif -->

            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
  </q-card>
</template>

<script>
import { ref, defineComponent, watch, watchEffect } from "vue";
import { useQuasar } from 'quasar';
import { useJuradoStore } from "src/stores/juradoStore";
import { useTipoJuradosStore } from "src/stores/TipoJuradosStore";
import { useLayoutStore } from "src/stores/layoutStore";
import { useVotosStore } from "src/stores/categoriaStore";
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "ConfigurationComponent",

  setup() {
    // title = ref('');
    const element = ref([]);
    const elementSelected = ref([]);

    const juradoStore = ref(useJuradoStore());
    const layoutStore = ref(useLayoutStore());
    const categoriaStore = ref(useVotosStore());

    const $q = useQuasar();
    const status1 = ref([]);
    const status2 = ref([]);

    const tipoStore = ref(useTipoJuradosStore());
    const tipoJ = tipoStore.value.Tipo;

    const data = ref({
      idEdicion: layoutStore.value.id_edicion,
      tipoPopUp: "",
      tipo: "",
      titulo: "",
      subtitulo: "",
      mensaje: "",
      fechaR: "",
      fechaReunion: "",
      horaReunion: "",
      formattedDate2: "",
      fechaLimite: "",
      horaLimite: "",
      rutaVideo: ""
    })
    watchEffect(() => {
      if (data.value.fechaR && data.value.horaReunion) {
        const date = new Date(`${data.value.fechaR} ${data.value.horaReunion}`)
        const fecha = date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })
        const hora = date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
        data.value.fechaReunion = `${fecha} ${hora}`
      }
    })
    watchEffect(() => {
      if (data.value.fechaLimite && data.value.horaLimite) {
        const date = new Date(`${data.value.fechaLimite} ${data.value.horaLimite}`)
        data.value.fechaLimite = date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })
        data.value.horaLimite = date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
        data.value.formattedDate2 = `${data.value.fechaLimite} ${data.value.horaLimite}`
      }
    })

    watch(data.value.tipo, (newValue, oldValue) => {
      console.log('d');
      let tipoId = 0;
      for (let i = 0; i < juradoStore.value.optionsTipoJurado.length; i++) {
        if (juradoStore.value.optionsTipoJurado[i] == this.data.value.tipo) {
          tipoId = i + 1
        }
      }
      categoriaStore.value.putSubCategoriasAux(tipoId)
    })

    return {
      // title,
      data,
      element,
      elementSelected,
      juradoStore,
      categoriaStore,
      status1,
      status2,
      console(event) {
        // console.log(event)
      },


      moveToSelectedCategories() {
        console.log(element.value)
        element.value.forEach((item) => {
          console.log(item)

          categoriaStore.value.subCategoriasArr = categoriaStore.value.subCategoriasArr.filter(subcat => subcat.Categoria != item.Categoria);
          categoriaStore.value.subcategoriasMutationJuradoEnabled.push(item);
        })
        categoriaStore.value.subcategoriasMutationJuradoEnabled.sort();
        element.value = [];
      },


      desmoveToSelectedCategories() {
        console.log(categoriaStore.value.subcategoriasMutationJuradoEnabled)
        elementSelected.value.forEach((item) => {
          console.log(item)

          categoriaStore.value.subcategoriasMutationJuradoEnabled = categoriaStore.value.subcategoriasMutationJuradoEnabled.filter(subcat => subcat.Categoria != item.Categoria);
          categoriaStore.value.subCategoriasArr.push(item);
        })
        categoriaStore.value.subCategoriasArr.sort();
        elementSelected.value = [];
      },


      async putConfig() {

        juradoStore.value.deleteDataConfig == false;

        await juradoStore.value.putConfigPopUp(data.value);
        if (juradoStore.value.deleteDataConfig == true) {
          // console.log('dsa')
          data.value.tipoPopUp = "";
          data.value.tipo = "";
          data.value.titulo = "";
          data.value.subtitulo = "";
          data.value.mensaje = "";
          // data.value.fechaReunion = "";
          data.value.rutaVideo = "";
        }
      },

      async putSubcategories() {
        console.log(categoriaStore.value.subcategoriasMutationJuradoEnabled)
        let tipoId = 0;
        for (let i = 0; i < juradoStore.value.optionsTipoJurado.length; i++) {
          if (juradoStore.value.optionsTipoJurado[i] == data.value.tipo) {
            tipoId = i + 1
          }
        }
        categoriaStore.value.putSubCategoriasAux(tipoId, data.value.idEdicion)
      },

      getSubcategoriasBaseTipoJurado(event) {

        console.log('d')
        let tipoId = 0;
        for (let i = 0; i < juradoStore.value.optionsTipoJurado.length; i++) {
          if (juradoStore.value.optionsTipoJurado[i] == event) {
            tipoId = i + 1
          }
        }
        categoriaStore.value.getSubCategoriasAuxFromSelect(tipoId)

      },

      getSubcateogires() {

        categoriaStore.value.getSubCategoriasIndependent();
      },

      areaValue: ref('Has terminado la votacion de la primera ronda! Ahora solo queda votar los Aspid Plata, resolver los desempates y votar el Platino ! Esto tendra lugar via videoconferencia el pròximo día 22 de junio a las 10h. Bloqueate la mañana en tu calendario ! Recibiras más detalles por email.'),
      model: ref(null),
      // options: ref(["Jurado de Creatividad", "Jurado de Formación", "Jurado de eSalud"]),
      showNotif() {
        $q.notify({
          message: 'Guardado !!',
          color: 'positive'
        })
      },






    }
  },
  mounted() {
    if (this.juradoStore.tipoJuradoChecker == false) {
      this.juradoStore.getJuradoTipo();
    }
  }
})

</script>
<style>
.row {
  display: flex;
}

.botonG {
  width: 10rem;
  margin-left: 10rem;
}

.botonG2 {
  width: 10rem;
  margin-left: 40%;
  margin-top: 2rem;
}

.texto1 {
  margin-top: -1.4rem;
}

.jurado-input {
  width: 24rem;
}

.input-texts {
  width: 27rem;
}

.column {
  padding: 10px;
}

.imagen1 {
  margin-top: 8rem;
  margin-left: -6rem;
  position: absolute;
}

.imagen2 {
  width: 27rem;
  margin-top: 13rem;
  margin-left: -2rem;
  position: absolute;
  gap: 1rem;
}

.drop-target {
  height: 250px;
  width: 250px;
  overflow-y: scroll !important;
  /* min-width: 200px; */
  /* background-color: gainsboro; */
  border: 1px solid rgb(181, 181, 181);
}

.drag-enter {
  outline-style: dashed;
}

.box {
  display: flex;
  align-items: center;
  float: left;
  cursor: pointer;
  width: 872px;
  border: 1px solid rgb(181, 181, 181);
  list-style-type: none;
  height: 2rem;
  align-items: center;
}

.box:nth-child(3) {
  clear: both;
}

.navy {
  background-color: navy;
}

.red {
  background-color: firebrick;
}

.green {
  background-color: darkgreen;
}

.orange {
  background-color: orange;
}
</style>
