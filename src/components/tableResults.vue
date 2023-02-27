<template>
  <div class="q-pa-md">
    <q-table title="Resultados de la votación" :rows="resultStore.subcategoriesArr" :columns="columns" row-key="name"
      title-class="text-weight-bold" hide-bottom virtual-scroll v-model:pagination="pagination"
      :rows-per-page-options="[0]" class="row">

      <template v-slot:body-cell-Categoria="props">


        <q-td :props="props" @click="getSubcategoria(props.row)">
          <router-link class="linkCat" to="results/ResultTab"> {{ props.row.Categoria }}</router-link>
          <q-chip class="chip" square color="red" text-color="white" label="Empate" />
        </q-td>

      </template>

    </q-table>
  </div>
</template>


<script>
import router from "../router";
const columns = [
  {
    name: 'Categoria',
    field: 'Categoria',
    label: 'Categoria',
    align: 'left',
  },
]


import { ref } from 'vue'
import { useresultStore } from "src/stores/resultStore";
import { useVotosStore } from "src/stores/categoriaStore";
export default {
  setup() {

    const resultStore = ref(useresultStore());
    const rows = resultStore.value.resultStore;
    const categoriaStore = ref(useVotosStore());

    return {
      columns,
      rows,
      resultStore,
      categoriaStore,
      inception: ref(false),
      secondDialog: ref(false),
      pagination: {
        sortBy: 'name',
        descending: true,
      },
      getSubcategoria(row) {
        console.log(row)
        categoriaStore.value.subCategorias = row.Categoria;
        categoriaStore.value.checker = true;
        console.log(categoriaStore.value.subCategorias)
      }

    }
  },
  mounted() {
    this.resultStore.getSubCategoriasIndependent();
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
