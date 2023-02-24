<template>
    <div class="q-pa-md">

      <q-table class="tableclass" title="Progreso de la votación por Jurado" :rows="rows"  :data="data">
        <template v-slot:top>
            <h5 class="card1Title"><b>Progreso de la votación por Jurado</b></h5>
        </template>
      <template v-slot:header-cell-deleteVotos="props">
        <q-th :props="props">
        </q-th>
      </template>
      <template v-slot:header-cell-recordatorio="props">
        <q-th :props="props">
        </q-th>
      </template>
      <template v-slot:body="props" >
        <q-tr :props="props">
          <q-td key="nombre" :props="props">
            <q-avatar size="72px">
              <q-icon name="person"></q-icon>
            </q-avatar>

           <div class="empresa">
            {{ props.row.nombre[0]}} <br>
            {{ props.row.nombre[1]}}
          </div>
          </q-td>
          <q-td key="tipo" :props="props">
            {{ props.row.tipo}}
          </q-td>
          <q-td key="progreso" :props="props" id="progreso" v-bind:style="[props.row.progreso =='100%' ? 'color: green;font-weight:600' : 'color: red;']">
            {{ props.row.progreso}}
          </q-td>
          <q-td key="último_Acceso" :props="props">
            {{ props.row.último_Acceso}}
          </q-td>
          <q-td key="recordatorio" :props="props">
            <q-btn flat name="" label='' icon='mail'  :disabled="props.row.progreso =='100%'"/>
          </q-td>
          <q-td key="deleteVotos" :props="props">
            <q-btn flat name="" label='' icon='delete' @click="deleteval(rows.indexOf(props.row))" />
          </q-td>
        </q-tr>
      </template>
      </q-table>
    </div>
  </template>

  <script>
  import { ref, defineComponent } from "vue";
  import { useJuradosStore } from "src/stores/TablaJuradosStore";
import { data } from "browserslist";

  export default defineComponent({
    name: "JuradosRondaComponent",
    setup () {
      const juradoStore = ref(useJuradosStore());
      const rows = juradoStore.value.juradosRonda;
      const loading = ref(false);

        return {
          active: ref(true),
          loading,
          rows,
          columns: [
            {
              name: 'nombre',
              required: true,
              label: 'nombre',
              align: 'left',
              field: row => row.name,  //field=prop
              format: val => `${val}`,
              sortable: true,
              style: 'width:20px',
            },
            { name: 'tipo', label: 'tipo', field: 'tipo', align:'left', sortable: true },
            { name: 'progreso', align: 'center', label: 'progreso', field: '' },
            { name: 'último_Acceso', align: 'left', label: 'Ültimo Acceso', field: '' },
            { name: 'recordatorio', align: 'left', label: '', field: '' },
            { name: 'deleteVotos', align: 'left', label: '', field: '' },
          ],

          // juradoStore,
          deleteval(index){
            console.log(index)
            this.rows.splice(index, 1);

            console.log(this.rows)
          }

        }

    }
  })


  </script>


  <style>
  .radius {
    border-radius: 20px;
  }
  .q-table th {
    text-align:left;
  }
  .q-table td {
    text-align:left;
  }

  #progreso{
    font-size: 1.3em;
  }

.empresa{
  display: inline-block;

  }
  </style>
