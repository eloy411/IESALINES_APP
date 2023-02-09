<template>
    <div class="q-pa-md tableclass">
      <q-table
        title="Progreso de la votación por Categoría"
        :rows="rowVotos"

      >
      <template v-slot:top>
        <h5><b>Progreso de la votación por Categoría</b></h5>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="categoria" :props="props">
            {{ props.row.categoria }}
          </q-td>
          <q-td key="progreso" :props="props" id="progresoCol" v-bind:style="[props.row.progreso =='100%' ? 'color: green;font-weight:600' : 'color: red;']">
            {{ props.row.progreso }}
          </q-td>
          <q-td key="delete" :props="props">
            <q-btn flat name="Delete" label='' icon='delete' @click="deleteval(rowVotos.indexOf(props.row))"/>
          </q-td>
        </q-tr>
      </template>
    </q-table>
    </div>
</template>
<script>
import { ref, defineComponent } from 'vue'
import {useVotosStore} from "src/stores/categoriaStore";

export default defineComponent({
  name: 'TablaVotosComponent',
  setup () {
    const votosStore = ref(useVotosStore());
    const rowVotos=votosStore.value.VotosTable;
      return {
        columns: [
          {
            name: 'categoria',
            required: true,
            label: 'Categoria',
            align: 'left',
            field: row => row.name,  //field=prop
            format: val => `${val}`,
            sortable: true,
            style: 'width:20px'
          },
          { name: 'progreso', label: 'Progreso', field: 'progreso', align:'left', sortable: true },
          { name: 'delete', align: 'left', label: '', field: '' }
        ],
        rowVotos,  // si no se retornan no se visualizan
        deleteval(index){
            console.log(index)
            this.rowVotos.splice(index, 1);

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
.tableclass{
  margin:1em;
}
.center-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
tr{
  justify-content: center;
}
#progresoCol{
  font-size: 1.3em;
}
</style>
