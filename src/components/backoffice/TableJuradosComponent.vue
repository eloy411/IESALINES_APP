<template>
  <div class="q-pa-lg">
    <div v-if="!juradoStore.juradoDataLoaded">
      <q-spinner  color="primary" size="3em" />
    </div>

    <q-table v-else title="Treats" :rows="juradoStore.juradosTest" :columns="columnsTable">
      <template v-slot:body-cell-buttons="props">
        <q-td :props="props">
          <q-btn v-if="props.row.aceptacion == null" @click="onRowClick(props.row)" flat class="q-pa-xs"
            icon="mark_email_read" size="1em" to="/backoffice/jurado/InvitacionJurado"></q-btn>
          <q-btn v-else disable flat class="q-pa-xs" icon="mark_email_read" size="1em"></q-btn>
          <q-btn flat @click="onRowClick(props.row)" class="q-pa-xs" icon="edit_square" size="1em"
            to="/backoffice/jurado/Nuevo/editar"></q-btn>
          <q-btn flat @click="deleteJuradoFromTable(props.row)" class="q-pa-xs" icon="close" size="1em"></q-btn>
        </q-td>
      </template>

      <template v-slot:body-cell-Nombre="props">
        <!-- <template v-slot:body="props"> -->
        <q-td key="Nombre" :props="props">
          <q-avatar size="72px">
            <q-icon name="person"></q-icon>
          </q-avatar>

          <div class="empresa">
            {{ props.row.Nombre }}
            <br>
            {{ props.row.Empresa }}
          </div>
        </q-td>
      </template>

      <template v-slot:top>
        <h5><b>Jurado Aspid 2022</b></h5>
        <q-space />

        <div class="q-pa-md q-gutter-sm">
          <q-btn class="my-btn q-pt-sm q-pb-sm q-pr-lg q-pl-lg radius" @click="juradoStore.descargaCSV" outline
            style="color: #de331d;" label="Descargar CSV" />
          <q-btn to="/backoffice/jurado/nuevo" class="bg-secondary q-pt-sm q-pb-sm q-pr-lg q-pl-lg" style="color: white"
            label="Nuevo Jurado" />
        </div>
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import { useJuradoStore } from "src/stores/juradoStore";
import { useLayoutStore } from "src/stores/layoutStore";
import { useQuasar } from 'quasar'

export default defineComponent({
  name: "TableJurados",
  setup() {
    const juradoStore = ref(useJuradoStore());
    const layoutStore = ref(useLayoutStore());
    const $q = useQuasar();
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
      layoutStore,

      onRowClick(row) {
        juradoStore.value.Nombre = row.Nombre;
        juradoStore.value.Empresa = row.Empresa;
        juradoStore.value.Tipo = row.Tipo;
        juradoStore.value.Email = row.Email;
        juradoStore.value.id = row.id;
        juradoStore.value.Bio = row.Bio;
        juradoStore.value.Cargo = row.Cargo;
      },

      juradoEdit() {
        console.log('Edición de jurado')
      },

      sendMail() {
        console.log('enviar mail');
      },

      deleteJuradoFromTable(row) {
        $q.dialog({
          title: '¿Seguro que quieres eliminar al jurado?',
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
          juradoStore.value.deleteJurado(row);
          $q.notify({
            message: 'Jurado Eliminado',
            color: 'green'
          })
        }).onCancel(() => {
          // console.log('Cancel')
        }).onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        })
      },

      getJuradoName(row) {
        console.log(row)
        juradoStore.value.mailDestinatario = row.tipo;
        juradoStore.value.checker = true;


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
  border-radius: 5px !important;
}

th,
td {
  text-align: left !important;
}


.empresa {
  display: inline-block;
  text-align: left;
}

.row {
  text-align: left;
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

.my-btn {
  border-radius: 15px;
}</style>
