<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md " style="margin-top:100px; max-width: 100%">
      <q-card id="q-card" padding>
        <!-- Tabs que representan los botones de seleccion de tabla. -->
        <q-tabs v-model="tab" dense active-color="red" indicator-color="red" align="justify" narrow-indicator>
          <q-tab name="ranking" label="RANKING" />
          <q-tab name="votos_jurado" label="VOTOS JURADO" @click="categoriaStore.getVotosJuradoResult()" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated>
          <!-- Tabla ranking -->
          <q-tab-panel name="ranking">
            <q-table title-class="q-mt-lg" id="table" :data="tableData" :rows="rows" :columns="ranking" row-key="jurado"
              selection="single" v-model:selected="selected" v-model:pagination="pagination" hide-bottom virtual-scroll
              :rows-per-page-options="[0]">
              <template v-slot:top>
                <h5> <b>Ranking</b> {{ categoriaStore.subCategoriaResultTab }}</h5>

                <div class="flex" style="padding: 1em ;gap:1em;align-items:center">
                  <h5 style="font-size: 18px;font-weight: 300;">
                    Desierto :
                    <q-badge class="numVotos q-pa-xs" color="black"
                      :label="categoriaStore.votos_desiertoResultTab"></q-badge>
                  </h5>
                  <h6><b>{{ categoriaStore.porcentaje_desiertoResultTab }}%</b></h6>
                  <q-chip v-if="categoriaStore.porcentaje_desiertoResultTab > 50" class="chip"
                    style="padding: 1em;font-size: 12px; background-color: #ffe1b8;color:#ffebd1" square color="chip"
                    text-color="white" label="Desierto" />

                </div>
              </template>
              <!-- Casilla de seleccion de cada fila -->
              <div class="q-mt-md">
                Selected: {{ JSON.stringify(selected) }}
              </div>

              <template v-slot:body-cell-votos="props">
                <td :props="props">
                  <div v-if="props.value != '-'">
                    <q-badge class="numVotos" color="black" :label="props.value"></q-badge>
                  </div>
                </td>
              </template>

              <template v-slot:body-cell-premio="props">
                <td :props="props">
                  <div>
                    <q-img class="selloAspid" v-if="categoriaStore.selloActivate == 'Aspid' && props.row.premio != null" src="~assets/Sellos/sello-aspid.png"></q-img>
                    <q-img class="selloAspid" v-else-if="categoriaStore.selloActivate == 'Aspid Oro' && props.row.premio != null" src="~assets/Sellos/sello_oro.png"></q-img>
                    <q-img class="selloAspid" v-else-if="categoriaStore.selloActivate == 'Aspid Plata' && props.row.premio != null" src="~assets/Sellos/sello_plata.png"></q-img>
                    <q-img class="selloAspid" v-else-if="categoriaStore.selloActivate == 'Aspid Platino' && props.row.premio != null" src="~assets/Sellos/sello_platino.png"></q-img>
                  </div>
                </td>
              </template>

              <!-- Boton otorgar premio -->
              <template v-slot:body-cell-action="props">

                <q-td>
                  <q-btn outline depressed label="Otorgar Premio" color="red" @click="otorgarPremio = true;categoriaStore.id_obraFromSubCategoria = props.row.id" />
                </q-td>

              </template>

              <template v-slot:top-right>

                <!-- Popup otorgar premio -->
                <q-dialog v-model="prompt" persistent>
                  <q-card style="min-width: 650px">

                    <q-card-actions id="hpopup" align="right" class="text-primary">
                      <div>NUEVO PREMIO</div>
                      <q-space />
                      <q-btn flat icon="close" v-close-popup />
                    </q-card-actions>

                    <q-card-section>
                      <div id="titulo1">Tipo:</div>
                      <q-space />
                      <q-select dense outlined v-model="model" :options="options" style="width: 18em;margin-left: 15em;"
                        behavior="menu"></q-select>


                    </q-card-section>

                    <q-card-section>
                      <div id="titulo2">Nombre del Premio:</div>
                      <q-space />
                      <q-input dense outlined color="grey" style="width: 18em;margin-left: 15em;padding-bottom: 5em;"
                        @keyup.enter="prompt = false" />
                    </q-card-section>

                    <q-card-actions align="center" class="text-primary">
                      <q-btn id="btn" color="red" label="Añadir" v-close-popup />
                    </q-card-actions>
                  </q-card>
                </q-dialog>

              </template>
            </q-table>
          </q-tab-panel>

          <!-- Tabla votos jurado -->
          <q-tab-panel name="votos_jurado">
            <q-table id="table" title-class="q-mt-lg" :rows="categoriaStore.resultVotoJurado" :columns="voto"
              row-key="name" v-model:pagination="pagination" hide-bottom virtual-scroll :rows-per-page-options="[0]">
              <template v-slot:top>
                <h5> <b>Votos por Jurado</b> {{ categoriaStore.subCategoriaResultTab }}</h5>
              </template>
              <template v-slot:body-cell-voto="props">
                <q-td :props="props">
                  <div v-if="props.row.voto == '-'">
                    <q-chip class="chip" square color="warning" text-color="white" label="Desierto" />
                  </div>
                  <div v-else>
                    {{ props.row.voto }}
                  </div>
                </q-td>
              </template>

              <template v-slot:body-cell-jurado="props">
                <td :props="props">
                  <div style="display: inline-flex; align-items: center;">
                    <q-avatar size="72px">
                      <q-icon name="person"></q-icon>
                    </q-avatar>
                    <div class="empresa">
                      {{ props.row.jurado }}
                      <br>
                      {{ props.row.empresa }}
                    </div>
                  </div>
                </td>
              </template>
            </q-table>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>


  <q-dialog v-model="otorgarPremio" >
    <q-card style="padding: 2em;">
      <q-card-section class="flex" style="align-items:center;justify-content: space-between;">
        <div class="text-h6">NUEVO PREMIO</div>
        <q-icon name="close" v-close-popup class="close"></q-icon>
      </q-card-section>

      <q-card-section class="q-pa-md">
        <div class="q-gutter-y-md column">
          <div class="q-gutter-y-md column">
            <div>
              <div class="my-input q-pa-xs center">
                <div class="text-right q-pa-md" style="grid-column: 1 / 1;">Tipo</div>
                <q-select :options="categoriaStore.votaciones" v-model="categoriaStore.votacion" style="grid-column: 2 / 4;" outlined label="" />
              </div>
              <div class="my-input q-pa-xs center">
                <div class="text-right q-pa-md" style="grid-column: 1 / 1;">Nombre del premio</div>
                <q-input style="grid-column: 2 / 4;"  v-model="categoriaStore.nombreVotacion" outlined label=""></q-input>
              </div>
            </div>
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="center" class="q-pt-xl">
        <q-btn class="q-mr-lg" style="width: 37%;" color="secondary" @click="categoriaStore.putOtorgarPremio()" label="Añadir" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>

import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useVotosStore } from "src/stores/categoriaStore";

// Columnas jurado
const ranking = [
  { name: 'obra', align: 'left', label: 'Obra', field: 'name', },
  { name: 'votos', align: 'left', label: 'Votos', field: 'voto', },
  { name: 'premio', align: 'left', label: 'Premio', field: 'premio', },
  { name: 'action', align: 'right', field: 'action', },
]

// Columnas votos
const voto = [
  { name: 'jurado', align: 'left', label: 'Jurado', field: 'jurado', sortable: true },
  { name: 'voto', align: 'left', label: 'Voto', field: 'voto', },
]

export default {

  setup() {
    // Cojer datos de la store de los resultados.
    const categoriaStore = ref(useVotosStore());
    const rows = categoriaStore.value.resultStore;
    const $q = useQuasar()
    const otorgarPremio = ref(false);
    // Esta funcion no funciona al 100%. Se utiliza para comparar los votos y que aparezca el boton de otorgar premio. Se puede prescindir de ella porque no termina de funcionar bien.

    return {
      categoriaStore,
      otorgarPremio,
      model: ref(null),
      // Las opciones de seleccion del apartado tipo dentro del popup de otorgar premio.
      options: [
        'Aspid', 'Aspid Plata', 'Aspid Oro', 'Aspid Platino'
      ],

      prompt: ref(false),
      address: ref(''),

      // Ordena los valores de la tabla de manera descendente segun la columna votos.
      pagination: {
        sortBy: 'votos',
        descending: true,
      },

      // Boton de seleccion a la izquierda de cada fila.
      selected: ref([]),

      tab: ref('ranking'),
      ranking,
      voto,
      rows,
    }
  },
}
</script>


<style>
.close:hover {
  cursor:pointer;
}

.q-card {
  width: 100%!important;
}

.btn-group {
    padding: 1em;
    flex-direction: column;
    gap: 1em;
  }
.my-input {
    display: grid;
    /* grid-template-columns: repeat(4, minmax(10em, 1fr)); */
    grid-template-columns: repeat(3, 1fr);
  }
/* --------- Estilo de las dos tablas de datos --------- */

#table {
  margin: -2em -1.14em -1.14em -1.2em;
  border-radius: 0px 0px;
}

.q-table__top {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
}

.selloAspid {
  width: 3rem;
}

.fotoPerfil {
  width: 2rem;
}


/* --------- Estilo popup otorgar premio --------- */


/* Estilo titulo y X del popup de otorgar premio */
#hpopup {
  margin-top: 0.5em;
  margin-left: 1em;
  font-weight: bold;
  font-size: larger;
}


/* Estilo texto 'Tipo' del popup de otorgar premio*/
#titulo1 {
  position: absolute;
  margin-left: 10em;
  margin-top: 0.5em;
  font-size: medium;
}

/* Estilo texto 'Nombre del premio' del popup de otorgar premio*/
#titulo2 {
  position: absolute;
  margin-left: 3.5em;
  margin-top: 0.5em;
  font-size: medium;
}

/* Estilo boton del popup de otorgar premio */

#btn {
  margin-bottom: 2em;
  width: 12em;
}

.empresa {
  display: inline-block;
}

/* Estilo cuadrado Votos */
.numVotos {
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1rem;
  text-align: center;
}


/* ---------  --------- */
</style>
