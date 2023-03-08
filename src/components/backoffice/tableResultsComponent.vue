<template>
  <div class="q-pa-md">
    <q-table title="Resultados de la votación" :rows="categoriaStore.subCategoriasArr" :columns="columns" row-key="name"
      title-class="text-weight-bold" hide-bottom virtual-scroll v-model:pagination="pagination"
      :rows-per-page-options="[0]" class="row">

      <template v-slot:body-cell-Categoria="props">


        <q-td :props="props" @click="getSubcategoria(props.row)">
          <router-link class="linkCat" to="/backoffice/results/ResultTab"> {{ props.row.Categoria }}</router-link>
          <q-chip v-if="props.row.desierto == true && props.row.tipo_desierto == 'o'" class="chip" square color="warning" text-color="white" label="Desierto ORO" />
          <q-chip v-else-if="props.row.desierto == true && props.row.tipo_desierto == 'd'" class="chip" square color="warning" text-color="white" label="Desierto" />
          <q-chip v-else-if="props.row.empate == true && props.row.tipoEmpate == 'o'" class="chip" square color="red" text-color="white" label="Empate ORO" />
          <q-chip v-else-if="props.row.empate == true && props.row.tipoEmpate == 'd'" class="chip" square color="red" text-color="white" label="Empate" />
          <div v-else></div>

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
        categoriaStore.value.subCategoriaResultTab = row.Categoria;
        categoriaStore.value.porcentaje_desiertoResultTab = row.porcentaje_desierto;
        categoriaStore.value.votos_desiertoResultTab = row.votos_desierto;
        categoriaStore.value.idCategoriaResultTab = row.id;
        categoriaStore.value.checker = true;
        console.log(categoriaStore.value.subCategoriaResultTab);

        categoriaStore.value.resultStore = [];


        row.information.forEach(item =>  {

          console.log(item);
          if (item.premio != null) {
            categoriaStore.value.selloActivate = item.premio;
          }

          let resultAuxObject = {
            name: item.titulo,
            voto: item.total,
            premio: item.premio,
            id: item.id,
            id_cod_particip: item.id_cod_particip,
            procentaje_desierto : row.porcentaje_desierto,
            votos_desierto : row.votos_desierto,
            action: '',
          }
          categoriaStore.value.resultStore.push(resultAuxObject);
        })

        categoriaStore.value.id_subcategoria = row.id;



        console.log(categoriaStore.value.resultStore);
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
