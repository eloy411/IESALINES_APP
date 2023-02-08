<template>
  <div class="q-pa-lg">

    <q-spinner v-if="juradoStore.juradosTest.length <= 0"
      color="primary"
      size="3em"
    />
    <q-table v-else title="Treats" :rows="juradoStore.juradosTest" :columns="juradoStore.columnsTable">
      <!-- <q-icon name="font_download" /> -->
      <template v-slot:body-cell-buttons="props">
        <q-th :props="props">

          <q-btn  flat class="q-pa-xs" icon="mark_email_read" size="1em" to="/jurado/Nuevo/editar"></q-btn>
          <q-btn flat @click="onRowClick(props.row)" class="q-pa-xs" icon="edit_square" size="1em" to="/jurado/Nuevo/editar"></q-btn>
          <q-btn flat class="q-pa-xs" icon="close" size="1em" to="/jurado/Nuevo/editar"></q-btn>
        </q-th>
      </template>

      <template v-slot:top>
        <h3>Jurado Aspid 2022</h3>
        <q-space />

        <!-- <q-icon name="mail"></q-icon> -->
        <div class="q-pa-md q-gutter-sm">
          <q-btn @click="exportTable"  class="q-pa-md radius" outline style="color: #de331d;" label="Descargar CSV" />
          <q-btn to="/jurado/nuevo" class="bg-secondary q-pa-md radius" style="color: white" label="Nuevo Jurado" />
        </div>
      </template>

    </q-table>

  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import { useJuradoStore } from "src/stores/juradoStore";

export default defineComponent({
  name: "TableJurados",
  setup () {
    const juradoStore = ref(useJuradoStore());

    return {
      juradoStore,
      onRowClick (row) {
        console.log('clicked on', row)
        juradoStore.value.Nombre = row.Nombre;
        juradoStore.value.Empresa = row.Empresa;
        juradoStore.value.Tipo = row.Tipo;
        juradoStore.value.Email = row.Email;
        juradoStore.value.id = row.id;
      },

      juradoEdit() {
        console.log('Edición de jurado')
      },

      sendMail() {
        console.log('enviar mail');
      },

      deleteJuradoFromTable() {
        console.log('Jurado Eliminado')
      }

    }
  },
  mounted() {
    this.juradoStore.getJurados();
  },
})


</script>


<style>
.radius {
  border-radius: 20px;
}
.center-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.image {
  /* border-radius: 50%; */
  /* width: 12px; */
}

</style>
