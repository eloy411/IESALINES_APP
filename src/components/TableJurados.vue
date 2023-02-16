<template>
  <div class="q-pa-lg">

    <q-spinner v-if="juradoStore.juradosTest.length <= 0"
      color="primary"
      size="3em"
    />
    <q-table v-else title="Treats" :rows="juradoStore.juradosTest" :columns="columnsTable">
      <template v-slot:body-cell-buttons="props">
        <q-td :props="props">
          <q-btn disabled flat class="q-pa-xs" icon="mark_email_read" size="1em" ></q-btn>
          <q-btn flat @click="onRowClick(props.row)" class="q-pa-xs" icon="edit_square" size="1em" to="/jurado/Nuevo/editar"></q-btn>
          <q-btn flat @click="inception = true" class="q-pa-xs" icon="close" size="1em"></q-btn>
        </q-td>
      </template>

      <template v-slot:body-cell-Nombre="props">
      <!-- <template v-slot:body="props"> -->
        <q-td key="Nombre" :props="props">
            <q-avatar size="72px">
              <q-icon name="person"></q-icon>
            </q-avatar>

           <div class="empresa">
            {{ props.row.Nombre}}
            <br>
            {{ props.row.Empresa}}
          </div>
        </q-td>
      </template>

      <template v-slot:top>
        <h3>Jurado Aspid 2022</h3>
        <q-space />

        <div class="q-pa-md q-gutter-sm">
          <q-btn @click="juradoStore.descargaCSV"  class="q-pa-md radius" outline style="color: #de331d;" label="Descargar CSV" />
          <q-btn to="/jurado/nuevo" class="bg-secondary q-pa-md radius" style="color: white" label="Nuevo Jurado" />
        </div>
      </template>

        <!--DIALOG-->
      </q-table>
        <q-dialog v-model="inception">
          <q-card  class="pop_sure">
            <q-card-section class="q-pt-none">
                  ¿Seguro que quieres eliminar los votos de esta categoria?
            </q-card-section>

            <q-card-actions align="center">
              <q-btn class="myButton" v-close-popup name="" label='Si'
                @click="deleteJuradoFromTable(rows.indexOf(props.row)),secondDialog = true, juradoStore.deleteJurado(props.row)"/>

              <q-btn class="myButton" label="No" v-close-popup/>
            </q-card-actions>
          </q-card>
        </q-dialog>



  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import { useJuradoStore } from "src/stores/juradoStore";

export default defineComponent({
  name: "TableJurados",
  setup () {
    const juradoStore = ref(useJuradoStore());
    const columnsTable = ref([
      {
        name: "Nombre",
        label: "NOMBRE",
        align: "center",
        field: "Nombre",
        sortable: true,
      },
      {
        name: "Tipo",
        label: "TIPO",
        align: "center",
        field: "Tipo",
        sortable: true,
      },
      {
        name: "Email",
        label: "EMAIL",
        align: "center",
        field: "Email",
        sortable: true,
      },
      {
        name: "Aceptación",
        label: "ACEPTACIÓN",
        align: "center",
        field: "Aceptación",
        sortable: true,
      },
      { name: "buttons", label: "", align: "center", field: "buttons" },
    ])

    return {
      juradoStore,
      columnsTable,
      inception: ref(false),
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

.pop_sure {
  background: rgb(200, 200, 200);
  padding: 1em;
}
.myButton {
  background: white;
}

</style>
