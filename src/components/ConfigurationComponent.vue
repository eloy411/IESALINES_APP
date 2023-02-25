<template><!-- <h3>Jurado Aspid 2022</h3> -->
  <q-card flat bordered class="my-card">
    <div class="q-pa-md" style="max-width: 1080px">
      <q-list bordered>
        <q-expansion-item group="somegroup" label="Mensaje & Email confirmación ronda 1"
          header-class="text-secondry text-weight-bolder text-subtitle1">
          <q-card>
            <q-card-section>
              <div class="row">
                <div class="column">
                  <p class="text-grey-14 text-weight-medium texto1 q-ml-md">Mensaje que aparece y email que se envía al
                    jurado cuando éste termina su votación en la ronda 1.</p>

                  <q-select class="jurado-input q-mt-lg q-ml-md" outlined v-model="model" :options="juradoStore.optionsTipoJurado" />


                  <q-separator inset class="q-mt-lg" size="1px" />


                  <p class="q-mt-lg q-ml-md"><b>Mensaje (PopUp) en aplicación de votación</b></p>

                  <div class="q-ml-md" style="max-width: 32rem;max-height: 33rem;">

                    <q-input v-model="areaValue" outlined type="textarea" class="text-primary" />

                  </div>

                  <p class="q-ml-md q-mt-md"><b>Fecha y hora de la cita telemática para crear links al calendar</b></p>



                  <div id="q-app">
                    <div class="q-ml-md md" style="max-width: 30rem">
                      <q-input outlined v-model="datetime" mask="date" :rules="['date']">
                        <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy>
                              <q-date v-model="date"></q-date>
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>
                    </div>
                  </div>
                  <div>
                    <p class="q-ml-md"><b>Email de confirmación que se le envía al Jurado</b></p>

                    <a class="q-ml-md" href="#">Personalizar email</a>
                  </div>
                </div>
                <div class="column">
                  <q-img src="../assets/Frame1.png" class="imagen1" style="height: 340px; max-width: 350px" />
                </div>
              </div>
              <q-btn class="botonG q-mt-md" color="red" label="Guardar" @click="showNotif" />
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-space />
      </q-list>
      <q-space />
      <q-list bordered>
        <q-expansion-item group="somegroup" label="Plazo votación ronda 1"
          header-class="text-primary text-weight-bolder text-subtitle1">
          <q-card>
            <q-card-section>
              <p class="text-grey-14 text-weight-medium texto1 q-ml-md">Fecha limite votación ronda 1.</p>

              <q-select class="jurado-input q-mt-lg q-ml-md" outlined v-model="model" :options="juradoStore.optionsTipoJurado" />

              <q-separator inset class="q-mt-lg" size="1px"  />

              <p class="q-ml-md q-mt-md"><b>Fecha y hora límite</b></p>

              <div id="q-app">
                <div class="q-ml-md md" style="max-width: 30rem">
                  <q-input outlined v-model="datetime" mask="date" :rules="['date']">
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy>
                          <q-date v-model="date"></q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </div>
              </div>
              <q-btn class="botonG q-mt-md" color="red" label="Guardar" @click="showNotif" />
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>

      <q-space />
      <q-list bordered>
        <q-expansion-item group="somegroup" label="Asociación categorías y jurado"
          header-class="text-primary text-weight-bolder text-subtitle1">
          <q-card>
            <q-card-section>
              <p class="text-grey-14 text-weight-medium texto1 q-ml-md">Que categorías vota cada jurado.</p>
              <q-select class="jurado-input q-mt-lg q-ml-md" outlined v-model="model" :options="juradoStore.optionsTipoJurado" />


              <q-separator inset class="q-mt-lg" size="1px" />

              <div class="row">
                <ul id="row1">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>

                <ul id="row2">
                  <li>Item 4</li>
                  <li>Item 5</li>
                  <li>Item 6</li>
                </ul>
              </div>

              <q-btn class="botonG2" color="red" label="Guardar" @click="showNotif" />
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
      <q-space />
      <q-list bordered>
        <q-expansion-item group="somegroup" label="Mensaje pop-up bienvenida"
          header-class="text-primary text-weight-bolder text-subtitle1">
          <q-card>
            <q-card-section>
              <div class="row">
                <div class="column">
                  <p class="text-grey-14 text-weight-medium texto1 q-ml-md">Mensaje y video de bienvenida para cada jurado al
                    acceder a la aplicación.</p>
                  <q-select class="jurado-input q-mt-lg q-ml-md" outlined v-model="data.tipo" :options="juradoStore.optionsTipoJurado" />

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
                  <q-img src="../assets/Explicacion.png" class="imagen2"/>
                </div>
              </div>
              <q-btn class="botonG2" color="red" label="Guardar" @click="juradoStore.putConfigPopUp(data)" />
               <!-- showNotif -->

            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
</q-card>
</template>

<script>
import { ref, defineComponent } from "vue";
import { useQuasar } from 'quasar';
import { useJuradoStore } from "src/stores/juradoStore";
import { useLayoutStore } from "src/stores/layoutStore";

export default defineComponent({
  name: "ConfigurationComponent",
  setup() {
    // title = ref('');
    const juradoStore = ref(useJuradoStore());
    const layoutStore = ref(useLayoutStore());
    const $q = useQuasar();
    const data = ref({
      idEdicion: layoutStore.value.id_edicion,
      tipo: "",
      titulo: "",
      subtitulo: "",
      mensaje: "",
      fechaReunion: "",
      rutaVideo: ""
    })

    return {
      // title,
      data,
      juradoStore,
      areaValue: ref('Has terminado la votacion de la primera ronda! Ahora solo queda votar los Aspid Plata, resolver los desempates y votar el Platino ! Esto tendra lugar via videoconferencia el pròximo día 22 de junio a las 10h. Bloqueate la mañana en tu calendario ! Recibiras más detalles por email.'),
      model: ref(null),
      // options: ref(["Jurado de Creatividad", "Jurado de Formación", "Jurado de eSalud"]),
      showNotif() {
        $q.notify({
          message: 'Guardado !!',
          color: 'positive'
        }),
          row1.addEventListener('click', function (e) {
            if (e.target != this) {
              row2.appendChild(e.target.cloneNode(true));
              e.target.remove()
            }
          })
        row2.addEventListener('click', function (e) {
          if (e.target != this) {
            row1.appendChild(e.target.cloneNode(true));
            e.target.remove()
          }
        })
      }
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

.row {
  display: flex;
}

/* Create two equal columns that sits next to each other */
.column {
  padding: 10px;
}
.imagen1{
  margin-top: 8rem;
  margin-left: -6rem;
  position: absolute;
}
.imagen2{
  width: 27rem;
  margin-top: 13rem;
  margin-left: -2rem;
  position: absolute;
  gap: 1rem;
}
</style>
