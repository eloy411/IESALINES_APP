<template>
  <div class="layout-padding row items-start">
    <div v-for="(subcategoria, index) in subcategorias" :key="index">
      <q-card class="card" inline>
        <q-card-section class="icon">
          <img v-if="votado" alt="check button" src="../../assets/Check_Red.png" />
          <q-icon v-else size="2.25em" class="icon_background" name="circle"></q-icon>
        </q-card-section>

        <div class="card__body">
          <q-card-title>
            <div class="myFlex">
              <!-- <div class="title"><a>A1</a></div> -->
              <div><a class="text"><b>{{ subcategoria.subcategoria.Subcategoria }}</b></a></div>
            </div>
            <div class="subtitulo text-subtitle2">Aspid Oro y Plata</div>
          </q-card-title>

        <q-card-section class="vistas">
          <div>
            <q-circular-progress reverse :value="value" size="35px" :thickness="1" color="grey-5" track-color="secondary"
              class="q-ma-md" />
            2/3 Obras vistas
          </div>
        </q-card-section>
      </div>
      <q-card-actions align="center" class="q-pa-md">

        <q-btn no-caps class="boton" flat :to="main">Acceder</q-btn>

      </q-card-actions>

      </q-card>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import { useIndiceStore } from "src/stores/indiceCategoriaStore";
export default defineComponent({
  name: "CategoryCardIndex",

  props: {
    categoria: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const indiceStore = useIndiceStore();
    const categorias = ref(indiceStore.categoriasArr);
    const subcategorias = ref([]);
    if (props.categoria && props.categoria.Subcategorias) {
      subcategorias.value = props.categoria.Subcategorias.map((subcategoria) => ({
        subcategoria,
        categoria: props.categoria.nombre,
      }));
    }

    const votado = ref(true)
    return {
      votado,
      value: 80,
      indiceStore,
      categorias,
      subcategorias,
    }
  },

})
</script>

<style>
.card {
  background-color: #F0F0F0;
  width: 20em;
  border-radius: 10px;
}

.card__body {
  padding: 0em 2.25em 0 1.25em;

}


.myFlex {
  display: flex;
  flex-direction: row;
  gap: .5em
}


.icon_background {
  color: white;
}

.icon {
  text-align: right;
}

.text {
  text-align: left;
  font-size: 0.8em;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
}

.title {
  margin-left: 1em;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

}

.subtitulo {
  /* font-size: small; */
  margin-left: 3em;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}

.vistas {
  text-align: center;
}


.boton {
  border: 1px solid #E22C38 !important;
  border-radius: 15em;
  font-size: 0.8em;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  text-align: center;
  letter-spacing: 0.25px;
  padding: 0 1.5em 0 1.5em !important;
  background-color: white;

}
</style>
