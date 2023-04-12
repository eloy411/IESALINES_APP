<template>
  <div class="q-pa-md tableclass">
    <q-table
      title="Progreso de la votación por Categoría"
      :rows="categoriaStore.VotosTable"
      :columns="columns"
      title-class="text-weight-bold q-mt-md"
      hide-bottom
      virtual-scroll
      :rows-per-page-options="[0]"
    >
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="categoria" :props="props">
          {{ props.row.categoria }}
        </q-td>
        <q-td key="progreso" :props="props" id="progresoCol" v-bind:style="[props.row.progreso =='100%' ? 'color: green;font-weight:600' : 'color: red;']">
          {{ props.row.progreso }}
        </q-td>
        <q-td key="delete" :props="props">
          <q-btn flat name="Delete" label='' icon='delete' @click="deleteVotacionesFromTable(props.row)"/>
        </q-td>
      </q-tr>
    </template>
  </q-table>
  </div>
</template>
<script>
import { ref, defineComponent } from 'vue'
import {useVotosStore} from "src/stores/categoriaStore";
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'TablaVotosComponent',
  setup () {
    const categoriaStore = ref(useVotosStore());
    const $q = useQuasar()
    return {
      categoriaStore,
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

      deleteVotacionesFromTable(row) {
        $q.dialog({
          title: '¿Seguro que quieres eliminar los votos de esta categoría?',
          ok: {
            label: 'Si',
            push: true,
            style: 'background-color: white!important; color: black!important;'
          },
          cancel: {
            label: 'No',
            push: true,
            style: 'padding:5px; background-color: white!important; color: black!important;'
          },
          persistent: true,
          class: 'my-dialog-class', // add a custom class
          style: 'background-color: #d6d6d6; padding: 25px;' // add inline styles
        }).onOk(() => {
          console.log('Jurado Eliminado');
          categoriaStore.value.deleteSubCategoriesVotaciones(row);
          $q.notify({
            message: 'Votos eliminado',
            color: 'green'
          })
        }).onCancel(() => {
          // console.log('Cancel')
        }).onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        })
      },

      deleteval(index){
        console.log(index)
        this.rowVotos.splice(index, 1);

        console.log(this.rows)
      }
    }
  },
  mounted() {
    this.categoriaStore.getCategoriasPorcentaje();
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
font-size: 1.2em;
}
</style>
