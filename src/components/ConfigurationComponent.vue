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

    <div>
    <div class="row no-wrap justify-around q-px-md q-pt-md">
      <div
        v-mutation="handler1"
        @dragenter="onDragEnter"
        @dragleave="onDragLeave"
        @dragover="onDragOver"
        @drop="onDrop"
        class="drop-target rounded-borders overflow-hidden"
      >
        <div id="box1" draggable="true" @dragstart="onDragStart" class="box">
          <li>A1. Telemedicina</li>
        </div>
        <div id="box2" draggable="true" @dragstart="onDragStart" class="box">
          <li>A2. Packaging</li>
        </div>
        <div id="box3" draggable="true" @dragstart="onDragStart" class="box">
          <li>C1 - Programas de formación</li>
        </div>
        <div id="box4" draggable="true" @dragstart="onDragStart" class="box">
          <li>C2 - Apps</li>
        </div>
      </div>

      <div
        v-mutation="handler2"
        @dragenter="onDragEnter"
        @dragleave="onDragLeave"
        @dragover="onDragOver"
        @drop="onDrop"
        class="drop-target rounded-borders overflow-hidden"
      />
    </div>
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
    const status1 = ref([]);
    const status2 = ref([]);

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
      status1,
      status2,
      handler1 (mutationRecords) {
        status1.value = []
        for (const index in mutationRecords) {
          const record = mutationRecords[ index ]
          const info = `type: ${record.type}, nodes added: ${record.addedNodes.length > 0 ? 'true' : 'false'}, nodes removed: ${record.removedNodes.length > 0 ? 'true' : 'false'}, oldValue: ${record.oldValue}`
          status1.value.push(info)
        }
      },
      handler2 (mutationRecords) {
        status2.value = []
        for (const index in mutationRecords) {
          const record = mutationRecords[ index ]
          const info = `type: ${record.type}, nodes added: ${record.addedNodes.length > 0 ? 'true' : 'false'}, nodes removed: ${record.removedNodes.length > 0 ? 'true' : 'false'}, oldValue: ${record.oldValue}`
          status2.value.push(info)
        }
      },
      onDragStart (e) {
        e.dataTransfer.setData('text', e.target.id)
        e.dataTransfer.dropEffect = 'move'
      },

      onDragEnter (e) {
        // don't drop on other draggables
        if (e.target.draggable !== true) {
          e.target.classList.add('drag-enter')
        }
      },
      onDragLeave (e) {
        e.target.classList.remove('drag-enter')
      },

      onDragOver (e) {
        e.preventDefault()
      },
      onDrop (e) {
        e.preventDefault()

        // don't drop on other draggables
        if (e.target.draggable === true) {
          return
        }

        const draggedId = e.dataTransfer.getData('text')
        const draggedEl = document.getElementById(draggedId)

        // check if original parent node
        if (draggedEl.parentNode === e.target) {
          e.target.classList.remove('drag-enter')
          return
        }

        // make the exchange
        draggedEl.parentNode.removeChild(draggedEl)
        e.target.appendChild(draggedEl)
        e.target.classList.remove('drag-enter')
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
.drop-target{
  height: 250px;
  width: 200px;
  overflow-y: scroll !important;
  /* min-width: 200px; */
  /* background-color: gainsboro; */
  border: 1px solid rgb(181, 181, 181);
}
.drag-enter{
  outline-style: dashed;
}
.box{
  display: flex;
  align-items: center;
  float: left;
  cursor: pointer;
  width: 200px;
  border: 1px solid rgb(181, 181, 181);
  list-style-type: none;
  height: 2rem;
  align-items: center;
}
.box:nth-child(3){
  clear: both;
}
.navy{
  background-color: navy;
}
.red{
  background-color: firebrick;
}
.green{
  background-color: darkgreen;
}
.orange{
  background-color: orange;
}
</style>
