<template>
  <div class="q-pa-md">
    <q-table title="Resultados de la votación" :rows="categoriaStore.subCategoriasArr" :columns="columns" row-key="name"
      title-class="text-weight-bold" hide-bottom virtual-scroll v-model:pagination="pagination"
      :rows-per-page-options="[0]" class="row">

      <template v-slot:body-cell-Categoria="props">


        <q-td :props="props" @click="getSubcategoria(props.row)">
          <router-link class="linkCat" to="/backoffice/results/ResultTab"> {{ props.row.Categoria }}</router-link>
          <q-chip class="chip" square color="red" text-color="white" label="Empate" />
        </q-td>

      </template>

    </q-table>
  </div>
</template>


<script>
const columns = [
  {
    name: 'Categoria',
    field: 'Categoria',
    label: 'Categoria',
    align: 'left',
  },
]


import { ref } from 'vue'
import { useVotosStore } from "src/stores/categoriaStore";
export default {
  setup() {

    const categoriaStore = ref(useVotosStore());
    const rows = categoriaStore.value.resultStore;

    return {
      columns,
      rows,
      categoriaStore,
      inception: ref(false),
      secondDialog: ref(false),
      pagination: {
        sortBy: 'name',
        descending: true,
      },
      getSubcategoria(row) {
        console.log(row.id)
        categoriaStore.value.subCategorias = row.Categoria;
        categoriaStore.value.checker = true;
        console.log(categoriaStore.value.subCategorias)

        row.information.forEach(item =>  {
          let resultAuxObject = {
            name: item.titulo,
            voto: item.total,
            premio: item.premio,
            id: item.id,
            id_cod_particip: item.id_cod_particip,
            action: '',
          }
          categoriaStore.value.resultStore.push(resultAuxObject);
        })

        categoriaStore.value.id_subcategoria = row.id;

        console.log(categoriaStore.value.id_subcategoria);


      }

    }
  },
  mounted() {
    this.categoriaStore.getSubCategoriasFromResult();
  }
}
</script>

<style>
.chip {
  height: 1rem;
  margin-left: 1rem;
  margin-top: 0rem;
  font-size: 10px;
}

.linkCat{
  text-decoration: none;
  color: black;
}
</style>
