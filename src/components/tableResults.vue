<template>
  <div class="q-pa-md">
    <q-table
      title="categorias"
      :rows="rows"
      :columns="columns"
      hide-bottom
      @row-click="onRowClick"
      >
      <template v-slot:top>
        <h3>Resultados de la votación</h3>
        <q-space />

      </template>
    </q-table>
<!--------------------------------------------------------------------------------------------------->
  </div>
    <div class="q-pa-md q-gutter-sm">
    <q-btn label="Click me" color="primary" @click="inception = true" />

    <q-dialog v-model="inception">
      <q-card>
        <q-card-section>
          <div class="text-h6">Inception</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
              ¿Seguro que quieres eliminar los votos de esta categoria?
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Si" @click="secondDialog = true" />
          <q-btn flat label="No" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
<!-------------------------------------------------------------------------------------------------------->
    <q-dialog v-model="secondDialog" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-teal text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Persistent</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Click/Tap on the backdrop.
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
const columns = [
    {
    name: 'Categoria',
    field: 'Categoria',
    label: 'Categoria',
    align: 'left',
    sortable: true
  },
]

const rows = [
  {
    Categoria: 'A1. Campaña integral de Aspid plata y no se que mas',
  },
  {
    Categoria: 'A1. Campaña integral de Aspid plata y no se que mas',
  },
  {
    Categoria: 'A1. Campaña integral de Aspid plata y no se que mas',
  },
  {
    Categoria: 'A1. Campaña integral de Aspid plata y no se que mas',
  },
  {
    Categoria: 'A1. Campaña integral de Aspid plata y no se que mas',
  },
  {
    Categoria: 'A1. Campaña integral de Aspid plata y no se que mas',
  },


]
  import { ref } from 'vue'
  import routes from 'src/router/routes'
  export default {
    setup () {
      return {
        columns,
        rows,
        inception: ref(false),
        secondDialog: ref(false),
        pagination: {
          sortBy: 'name',
          descending: true,
        },
        onRowClick(evt, row) {
          console.log(row);
        }
      }
    }
  }
</script>

