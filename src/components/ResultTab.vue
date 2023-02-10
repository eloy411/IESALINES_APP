<template>
    <div class="q-pa-md">
      <div class="q-gutter-y-md " style="margin-top:100px; max-width: 100%">
        <q-card id="q-card" padding>
          <!-- Tabs que representan los botones de seleccion de tabla. -->
          <q-tabs
            v-model="tab"
            dense
            active-color="red"
            indicator-color="red"
            align="justify"
            narrow-indicator
          >
            <q-tab name="ranking" label="RANKING" />
            <q-tab name="votos_jurado" label="VOTOS JURADO" />
          </q-tabs>

          <q-tab-panels v-model="tab" animated>
            <!-- Tabla ranking -->
            <q-tab-panel name="ranking">
              <q-table
                id="table"
                title="Ranking"
                :data="tableData"
                :rows="rows"
                :columns="ranking"
                row-key="name"
                selection="single"
                v-model:selected="selected"
                v-model:pagination="pagination"
                hide-bottom
              >
              <!-- Casilla de seleccion de cada fila -->
                <div class="q-mt-md">
                  Selected: {{ JSON.stringify(selected) }}
                </div>

                <template v-slot:body-cell-votos="props">
                  <td :props="props">
                    <div v-if="props.value!='-'">
                      <q-badge color="black" :label="props.value"></q-badge>
                    </div>
                  </td>
                </template>

                <!-- Boton otorgar premio -->
                <template v-slot:body-cell-action="boton">
              
                  <q-td v-if = "OtorgarPremio()==true" :props="boton">
                    <q-btn 
                      depressed
                      label="Otorgar Premio" 
                      color="red"
                      @click="prompt = true"
                     />
                  </q-td> 
                  
                </template>

                
                <template v-slot:top-right>

                  <div>
                    <div>Desierto:</div>
                    <div>2</div>
                    
                  </div>
                  


                  <!-- Popup otorgar premio -->
                  <q-dialog v-model="prompt" persistent>
                    <q-card style="min-width: 650px">

                      <q-card-actions id="hpopup" align="right" class="text-primary">
                        <div>NUEVO PREMIO</div>
                        <q-space />
                        <q-btn 
                          flat 
                          icon="close" 
                          v-close-popup 
                        />
                      </q-card-actions>

                      <q-card-section>
                        <div id="titulo1">Tipo:</div>
                        <q-space />
                        <q-select
                          dense
                          outlined
                          v-model="model"
                          :options="options" 
                          style="width: 18em;margin-left: 15em;"
                          behavior="menu"
                        ></q-select>
                        
                        
                      </q-card-section>

                      <q-card-section>
                        <div  id="titulo2">Nombre del Premio:</div>
                        <q-space />
                        <q-input 
                          dense
                          outlined
                          color="grey" 
                          style="width: 18em;margin-left: 15em;padding-bottom: 5em;"
                          @keyup.enter="prompt = false" 
                        />
                      </q-card-section>

                      <q-card-actions align="center" class="text-primary">
                        <q-btn 
                          id="btn"
                          color="red" 
                          label="Añadir" 
                          v-close-popup 
                        />
                      </q-card-actions>
                    </q-card>
                  </q-dialog>

                </template>
              </q-table>
            </q-tab-panel>
            
            <!-- Tabla votos jurado -->
            <q-tab-panel name="votos_jurado">
              <q-table
                id="table"
                title="Votos por Jurado"
                :rows="rows"
                :columns="voto"
                row-key="name"
                hide-bottom
              >
                
              </q-table>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </template>
  
  <script>
  
  import { ref } from 'vue'
  import { useresultStore } from "src/stores/resultStore"
  
  // Columnas jurado
  const ranking = [
  {
    name: 'obra',
    align: 'left',
    label: 'Obra',
    field: 'name',
  },
  { name: 'votos',
    align: 'left',
    label: 'Votos',
    field: 'voto',
  },
  { 
    name: 'premio',
    align: 'left',
    label: 'Premio',
    field: 'premio',
  },
  { 
    name: 'action',
    align: 'right',
    field: 'action',
  },
  
]

// Columnas votos
const voto = [
  {
    name: 'jurado',
    align: 'left',
    label: 'Jurado',
    field: 'name',
    sortable: true
  },
  { name: 'voto',
    align: 'left',
    label: 'Voto',
    field: 'voto',
  },
  
]

  export default {

    setup () {
      // Cojer datos de la store de los resultados.
      const resultStore = ref(useresultStore());
      const rows = resultStore.value.resultStore;
      
      // Esta funcion no funciona al 100%. Se utiliza para comparar los votos y que aparezca el boton de otorgar premio. Se puede prescindir de ella porque no termina de funcionar bien.
      const OtorgarPremio = () => {
        const pos1=rows[0];
        const pos2=rows[1];

        if (pos1.voto.valueOf()>pos2.voto.valueOf()){
          return true;
        }
      };

     

      return {
        OtorgarPremio,
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
    }
  }
  </script>

  
<style>

/* --------- Estilo de las dos tablas de datos --------- */

#table {
  margin: -2em -1.14em -1.14em -1.2em;
  border-radius: 0px 0px;
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
#titulo1{
  position:absolute;
  margin-left: 10em;
  margin-top: 0.5em;
  font-size: medium;
}

/* Estilo texto 'Nombre del premio' del popup de otorgar premio*/
#titulo2{
  position:absolute;
  margin-left: 3.5em;
  margin-top: 0.5em;
  font-size: medium;
}

/* Estilo boton del popup de otorgar premio */

#btn {
  margin-bottom: 2em;
  width: 12em;
}

/* ---------  --------- */


</style>
  