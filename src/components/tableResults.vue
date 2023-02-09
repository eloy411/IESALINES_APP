<template>
  <div class="q-pa-md">
    <q-table
      title="Resultados de la Valoración"
      :rows="rows"
      :columns="columns"
      row-key="name"
    >

        <!--header & lable -->
        <template #header="props">
          <q-tr :props="props">
            <q-th
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
              class="text-italic"
            >
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>

        <!--Add rows-->
        <template #body="props">
          <q-tr :props="props" class="divTipe">
            <q-td key="Categoria" :props="props">{{ props.row.name }}</q-td>

            <!--Tags ifs-->
            <!--Empate-->
            <q-td v-if=" props.row.Tagtype  === 1 ">
              <q-badge id='empate' key="Tagtype" :props="props">Empate</q-badge>
            </q-td>

            <!--Desierto-->
            <q-td v-if=" props.row.Tagtype  === 2 ">
              <q-badge id='desierto' key="Tagtype" :props="props">Desierto</q-badge>
            </q-td>

            <!--Empate ORO-->
            <q-td v-if=" props.row.Tagtype  === 3 ">
              <q-badge id='empate' key="Tagtype" :props="props">Empate ORO</q-badge>
            </q-td>

            <!--Desierto ORO-->
            <q-td v-if=" props.row.Tagtype  === 4 ">
              <q-badge id='desierto' key="Tagtype" :props="props">Desierto ORO</q-badge>
            </q-td>
          </q-tr>
        </template>
    </q-table>
  </div>
</template>

<script>
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Categoria',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'Categoria', align: 'left', field: 'categoria', sortable: true },
  { name: 'Tagtype', align:'left', field: 'Tagtype'},
]

const rows = [
  {
    name: 'A1. Campaña inregral de promoción de producto (Aspid Oro y Plata)',
    Tagtype: 1,

  },
  {
    name: 'A2. Reuniones con Profesionales sanitarios (Aspid oro y Plata)',
    Tagtype: 2,

  },
  {
    name: 'B1. Packaging',
    Tagtype: 3,

  },
  {
    name: 'B2. telemedicina',
    Tagtype: 4,

  },
]

export default {
  setup () {
    return {
      columns,
      rows
    }
  }
}
</script>

<style>
#empate{
  background-color: red;
  color: white;

}
#desierto{
  background-color: orange;
  color: white;
}
.divTipe{
  margin-right: 30px;
}
</style>

