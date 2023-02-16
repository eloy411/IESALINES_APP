<template>
  <div class="q-pa-md">
    <q-table title="Resultados de la votación" :rows="resultStore.subcategoriesArr" :columns="columns" row-key="name" @row-click="goto()"
      title-class="text-weight-bold" hide-bottom virtual-scroll v-model:pagination="pagination"
      :rows-per-page-options="[0]" class="row">

      <template v-slot:body-cell-Categoria="props">
        <q-td :props="props">
          <!-- <div v-if="props.value == '-'"> -->
            {{ props.row.Categoria }}
            <q-chip class="chip" square color="red" text-color="white" label="Empate" />
          <!-- </div> -->
          <!-- <div v-else>
            {{ props.row.Categoria }}
          </div> -->
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
export default {
  setup() {

    const resultStore = ref(useresultStore());
    const rows = resultStore.value.resultStore;

    return {
      columns,
      rows,
      resultStore,
      inception: ref(false),
      secondDialog: ref(false),
      pagination: {
        sortBy: 'name',
        descending: true,
      },
      goto() {
        location.href = "result";
        // this.$router.push("configuracion")
        // console.log("foca")
      },
    }
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
</style>
