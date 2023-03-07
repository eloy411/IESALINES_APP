<template>
  <div class="indice">
    <h4 class="titulo">Índice de categorías</h4>

    <ul class="lista">
      <li v-for="(categoria, index) in categorias" :key="categoria.Categoria">
        <input type="checkbox" :id="`list_${index}`" name="list">
        <label class="label_no_clicado" :for="`list_${index}`" @click="Clicked(categoria)" :props="props">
          {{ categoria.Categoria }} <q-icon id="icono" name="check_circle_outline" />
        </label>
        <ul class="interior">
          <li v-for="(subcategoria) in categoria.Subcategorias" :key="subcategoria">
            <a href="#r" class="categoria_no_clicado" @click="getSubcategoria(subcategoria), Clicked2(e)">
              {{ subcategoria }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
  
<script>

import { ref, defineComponent } from "vue";
import { useIndiceStore } from "src/stores/indiceCategoriaStore";

export default defineComponent({

  name: "CategoryIndex",
  methods: {
    Clicked(e) {
      console.log("CLICKED");
      var elemento = document.getElementById("icono");
      elemento.style.display = "inline";
    },

    Clicked2(e) {

      e.currentTarget.classList.remove('categoria_no_clicado');
      e.currentTarget.classList.add('categoria_clicado');

    },


  },
  setup() {
    const indiceStore = ref(useIndiceStore());
    const categorias = indiceStore.value.categoriasArr;
    console.log(categorias[1]);
    return {
      indiceStore,
      categorias,

      getSubcategoria(subcategoria) {
        console.log('holaaaa');
        // let auxArr=[row.nombre[0],row.nombre[1]];
        indiceStore.value.subcategory = subcategoria;
        console.log(indiceStore.value.subcategory);
        indiceStore.value.checker = true;
        // location.href= "ronda1Page/EmailInicioVotacion";

      }
    }
  },


})

</script>
  
<style>
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
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
}

.categoria_no_clicado {
  color: #c6c6c6;
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
}
</style>