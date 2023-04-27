<template>
  <div class="indice">
    <h4 class="titulo">Índice de categorías</h4>

    <ul class="lista">
      <li v-for="(pCategoria, index) in  categorias " :key="pCategoria.Categoria">
        <input type="checkbox" :id="`list_${index}`" name="list">
        <label class="label_no_clicado" :for="`list_${index}`" @click="getCategory(pCategoria)">
          {{ pCategoria.Categoria }} <q-icon id="icono" name="check_circle_outline" />
        </label>
        <ul class="interior">
          <li v-for="(subcategoria) in  pCategoria.Subcategorias " :key="subcategoria">
            <router-link class="categoria_no_clicado" to="/votaciones/mainDialog"
              @click="getSubcategory(subcategoria[0], subcategoria[1]); getSubcatId(subcategoria[2]); handleCondition()">
              {{ subcategoria[0] }}
            </router-link>

          </li>
        </ul>
      </li>
    </ul>
  </div>


  <div>
    <div v-if="condition ">
      <CategoryCardIndex></CategoryCardIndex>
    </div>
    <div v-else>
      <mainDialog></mainDialog>
    </div>
  </div>
</template>

<script>

import { ref, defineComponent, computed } from "vue";
import { useIndiceStore } from "src/stores/indiceCategoriaStore";
import mainDialog from "src/components/votaciones/MainDialogVotacionesComponent.vue"
import CategoryCardIndex from "src/components/votaciones/CategoryCardIndexComponent.vue";

export default defineComponent({
  name: "CategoryIndex",
  components: {
    mainDialog,
    CategoryCardIndex,
  },

  setup() {
    const indiceStore = ref(useIndiceStore());
    const categorias = indiceStore.value.categoriasArr;
    const condition = false;
    // const cards = [];
    // const subcategoriasFiltradas = computed(() => {
    //   const categoriaSeleccionada = indiceStore.value.categoriaSeleccionada;
    //   return categoriaSeleccionada
    //     ? categoriaSeleccionada.Subcategorias
    //     : [];
    // });


    return {
      indiceStore,
      categorias,
      condition
      // subcategoriasFiltradas,
      // cards,
    }

  },
  methods: {


    Clicked(e) {
      console.log("CLICKED");
      var elemento = document.getElementById("icono");
      elemento.style.display = "inline";
    },
    getCategory(categoria) {

      const dataAuxString = JSON.stringify(categoria.Subcategorias)
      const dataAuxArr = dataAuxString.split("[")[1].split("]")[0].split(",")
      // console.log('holaaaa ' + dataAuxArr[1]);
      this.indiceStore.categoriasAux = dataAuxArr;
      console.log(this.indiceStore.categoriasAux)

    },

    Clicked2(e) {

      e.currentTarget.classList.remove('categoria_no_clicado');
      e.currentTarget.classList.add('categoria_clicado');

    },

    getSubcategory(subcategoria, leyenda) {
      console.log("leyendaaa" + subcategoria + '-------' + leyenda);
      this.indiceStore.subcategory = subcategoria;
      this.indiceStore.leyenda = leyenda;
      console.log("SUBCATEGORIA:" + this.indiceStore.subcategory)

    },

    getSubcatId(subcatId) {
      console.log("id subcategoriaaaaa" + subcatId);
      this.indiceStore.subcatId = subcatId;
      // this.indiceStore.getObrasFromSubcat();
    },

    handleCondition() {
      this.condition = !this.condition;
    }

  },
  mounted() {
    this.indiceStore.getSubcategorias();
  },
})

</script>

<style>
li {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  /* or 150% */
  letter-spacing: 0.02em;
}

#icono {
  display: none;
}

.indice {
  margin-left: 2em;
}

.titulo {
  color: rgba(255, 255, 255, 1);
  margin-top: 3em;
  margin-left: 1em;
  margin-bottom: 0.5em;
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 55px;
}

.lista * {
  list-style: none;
}

.lista li {

  line-height: 2.5em;
}

.label_clicado {
  color: rgba(226, 44, 56, 1);
  text-decoration: none;
}

.label_no_clicado {
  /* color: rgba(255, 255, 255, 1); */
  color: white;
  text-decoration: none;
}

.categoria_no_clicado {
  color: #c6c6c6;
  color: white;
  text-decoration: none;
}

.categoria_clicado {
  color: rgba(226, 44, 56, 1);
  text-decoration: none;
}

.lista input[name="list"] {
  position: absolute;
  left: -1000em;
}

.lista .interior {
  display: none;
}

.lista input:checked~ul {
  display: block;
}</style>
