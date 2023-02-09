<template>

  <!-- <h3>Jurado Aspid 2022</h3> -->
  <q-card flat bordered class="my-card">
    <div class="q-pa-md" style="max-width: 1080px">
      <q-list bordered>
        <q-expansion-item group="somegroup" label="Mensaje & Email confirmación ronda 1" header-class="text-primary">
          <q-card>
            <q-card-section>
              <p>Mensaje que aparece y email que se envía al jurado cuando éste termina su votación en la ronda 1.</p>
              <q-select outlined v-model="model" :options="options" />


              <q-separator inset />

              <q-space />

              <p><b>Mensaje (PopUp) en aplicación de votación</b></p>

              <div class="q-pa-md" style="max-width: 600px;max-height: 500px;">
                <q-input v-model="text" filled type="textarea" />
              </div>

              <p><b>Fecha y hora de la cita telemática para crear links al calendar</b></p>


              <div id="q-app">
                <div class="q-pa-md" style="max-width: 300px">
                  <q-input filled v-model="date" mask="date" :rules="['date']">
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

              <p><b>Fecha y hora de la cita telemática para crear links al calendar</b></p>

              <a href="#">Personalizar email</a>

              <q-btn color="red" label="Guardar" @click="showNotif" />
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-space />
      </q-list>
      <q-space />
      <q-list bordered>
        <q-expansion-item group="somegroup" label="Plazo votación ronda 1" header-class="text-primary">
          <q-card>
            <q-card-section>
              <p>Fecha limite votación ronda 1.</p>
              <q-select outlined v-model="model" :options="options" />


              <q-separator inset />


              <p><b>Fecha y hora límite</b></p>

              <div id="q-app">
                <div class="q-pa-md" style="max-width: 300px">
                  <q-input filled v-model="date" mask="date" :rules="['date']">
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
              <q-btn color="red" label="Guardar" @click="showNotif" />
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>

      <q-space />
      <q-list bordered>
        <q-expansion-item group="somegroup" label="Asociación categorías y jurado" header-class="text-primary">
          <q-card>
            <q-card-section>
              <p>Que categorías vota cada jurado.</p>
              <q-select outlined v-model="model" :options="options" />


              <q-separator inset />

              <!-- <div class="column" style="height: 150px">
                <div class="col-4 col-md-6">
                  <div class="q-pa-md" style="max-width: 350px">
                    <q-list bordered separator>
                      <q-item clickable v-ripple>
                        <q-item-section>Mondongo 1</q-item-section>
                      </q-item>

                      <q-item clickable v-ripple>
                        <q-item-section>Mondongo 2</q-item-section>
                      </q-item>

                      <q-item clickable v-ripple>
                        <q-item-section>Mondongo 3</q-item-section>
                      </q-item>
                    </q-list>
                  </div>
                </div>
                <div class="col-4 col-md-6 selft-center">
                  <q-btn padding="none" color="primary" label=">" />

                  <q-btn padding="none" color="primary" label="<" />
                </div>
                <div class="col-4 col-md-6">
                  <div class="q-pa-md" style="max-width: 350px">
                    <q-list bordered separator>
                      <q-item clickable v-ripple>
                        <q-item-section></q-item-section>
                      </q-item>

                      <q-item clickable v-ripple>
                        <q-item-section></q-item-section>
                      </q-item>

                      <q-item clickable v-ripple>
                        <q-item-section></q-item-section>
                      </q-item>
                    </q-list>
                  </div>

                </div>
              </div> -->

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




              <q-btn  color="red" label="Guardar" @click="showNotif" />
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
      <q-space />
      <q-list bordered>
        <q-expansion-item group="somegroup" label="Mensaje pop-up bienvenida" header-class="text-primary">
          <q-card>
            <q-card-section>
              <p>Mensaje y video de bienvenida para cada jurado al acceder a la aplicación.</p>
              <q-select outlined v-model="model" :options="options" />


              <q-separator inset />

              <p><b>Titulo</b></p>
              <q-input outlined v-model="title" :dense="dense" />

              <p><b>Subtitulo</b></p>
              <q-input outlined v-model="text" :dense="dense" />

              <p><b>Mensaje</b></p>
              <q-input v-model="text" filled autogrow />

              <p><b>Ruta video</b></p>
              <q-input outlined v-model="text" :dense="dense" />
              <q-btn color="red" label="Guardar" @click="showNotif" />

            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>

    </div>
    <q-card-section class="q-pt-none">

    </q-card-section>
  </q-card>


</template>

<script>
import { ref, defineComponent } from "vue";
import { useQuasar } from 'quasar';

export default defineComponent({
  name: "ConfigurationComponent",
  setup() {
    // title = ref('');
    const $q = useQuasar()

    return {
      // title,
      model: ref(null),
      options: ref(["Jurado de Creatividad", "Jurado de Formación", "Jurado de eSalud"]),
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
  }
})

</script>
<style>
.row {
  display: flex;
}
</style>
