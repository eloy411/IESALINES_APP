<template>
  <div class="q-pa-md">
    <q-table class="tableclass" title="Progreso de la votación por Jurado (64%)" :rows="juradoStore.juradosRonda" :columns="columns" :data="data" title-class="text-weight-bold q-mt-md">
      <template v-slot:header-cell-deleteVotos="props">
        <q-th :props="props">
        </q-th>
      </template>
      <template v-slot:header-cell-recordatorio="props">
        <q-th :props="props">
        </q-th>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="nombre" :props="props">
            <div style="display: inline-flex; align-items: center;">
            <q-avatar size="72px">
              <q-icon name="person"></q-icon>
            </q-avatar>

            <div class="empresa">
              {{ props.row.nombre[0] }} <br>
              {{ props.row.nombre[1] }}
            </div>
          </div>
          </q-td>
          <q-td key="tipo" :props="props">
            {{ props.row.tipo }}
          </q-td>
          <q-td key="progreso" :props="props" id="progreso"
            v-bind:style="[props.row.progreso == '100%' ? 'color: green;font-weight:600' : 'color: red;']">
            {{ props.row.progreso }}
          </q-td>
          <q-td key="último_Acceso" :props="props">
            {{ props.row.último_Acceso }}
          </q-td>
          <q-td key="recordatorio" :props="props">
            <q-btn disabled v-if="props.row.progreso == '100%'" flat name="" label='' icon='mail' />
            <q-btn v-else flat name="" label='' icon='mail' to="backoffice/ronda1Page/EmailRecordatorioVotacion"
              @click="getJuradoName(props.row)" />
          </q-td>
          <q-td key="deleteVotos" :props="props">
            <q-btn flat name="" label='' icon='delete' @click="juradoStore.deleteJuradoVotaciones(props.row); deleteval(props.row)" />
          </q-td>
        </q-tr>
      </template>

    </q-table>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";

// import { useJuradosStore } from "src/stores/TablaJuradoStore";
import { useJuradoStore } from "src/stores/juradoStore";
import { data } from "browserslist";

export default defineComponent({
  name: "JuradosRondaComponent",
  setup() {
    const juradoStore = ref(useJuradoStore());
    const rows = juradoStore.value.juradosRonda;
    const loading = ref(false);

    return {
      inception: ref(false),
      secondDialog: ref(false),
      active: ref(true),
      loading,
      juradoStore,
      rows,
      columns: [
        { name: 'nombre', required: true, label: 'nombre', align: 'left', field: row => row.name,  format: val => `${val}`, sortable: true, style: 'width:20px',},
        { name: 'tipo', label: 'tipo', field: 'tipo', align: 'left', sortable: true },
        { name: 'progreso', align: 'center', label: 'progreso', field: '' },
        { name: 'Ultimo_Acceso', align: 'left', label: 'Ultimo_Acceso', field: '' },
        { name: 'recordatorio', align: 'left', label: '', field: '' },
        { name: 'deleteVotos', align: 'left', label: '', field: '' },
      ],

      // juradoStore,
      deleteval(index) {
        this.rows.splice(index, 1);
        // this.juradoStore.value.deleteJuradoVotaciones(index);

      },

      getJuradoName(row) {
        // let auxArr=[row.nombre[0],row.nombre[1]];
        juradoStore.value.mailDestinatario = row.tipo;
        juradoStore.value.checker = true;
        // location.href= "ronda1Page/EmailInicioVotacion";

      }

        }
    },
    mounted() {
      // this.juradoStore.getJuradosRonda();
      if (this.juradoStore.tipoJuradoChecker  == false) {
        this.juradoStore.getJuradoTipo();
      }
      this.juradoStore.getJuradoPorcentaje();
    }
  })



</script>


<style>
.q-pt-none {
  margin-top: 20px;
  margin-bottom: 10px;
}

.pop_sure {
  background: rgb(200, 200, 200);
}

.myButton {
  width: 70px;
  background: white;
  margin-bottom: 10px;
}

.radius {
  border-radius: 20px;
}

.q-table th {
  text-align: left;
}

.q-table td {
  text-align: left;
}

#progreso {
  font-size: 1.2em;
}

.empresa {
  display: inline-block;

}

h6.card2Title{
  margin-top: 1rem;
}
</style>
