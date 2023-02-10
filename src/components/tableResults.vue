<template>
  <div class="q-pa-md">
    <q-table
      title="TEST"
      :rows="rows"
      :columns="columns"
      row-key="name"
      hide-header
      hide-bottom
    />
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
    name: 'name',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'desc',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'tag',
    align: 'left',
    label: 'Calories',
    field: 'calories',
    sortable: true
  },
]

const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
  },
  {
    name: 'Eclair',
    calories: 262,

  },
  {
    name: 'Cupcake',
    calories: 305,

  }

]
  import { ref } from 'vue'
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
      }
    }
  }
</script>

