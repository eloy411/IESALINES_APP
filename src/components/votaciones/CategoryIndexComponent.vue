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

    <div class="indice">
      <h4  class="titulo">Índice de categorías</h4>

      <ul class="lista">
        <li><input type="checkbox" name="list" id="A"><label class="label_no_clicado" @click="Clicked" for="A">A. Obras relacionada con productos de Prescripción <q-icon id = "icono" name="check_circle_outline"/></label>
          <ul class="interior">
            <li><a href="#" @click="Clicked2" class="categoria_no_clicado">A1. Campaña integral de proomción de productos. </a></li>
            <li><a href="#" @click="Clicked2" class="categoria_no_clicado">A2. Materiales impresos de visita. </a></li>
            <li><a href="#" @click="Clicked2" class="categoria_no_clicado">A3. Materiales digitales de visita. </a></li>
            <li><a href="#" @click="Clicked2" class="categoria_no_clicado">A4. Anuncios en prensa. </a></li>
            <li><a href="#" @click="Clicked2" class="categoria_no_clicado">A5. Audiovisuales sobre producto. </a></li>
            <li><a href="#" @click="Clicked2" class="categoria_no_clicado">A6. Comunicación digital. </a></li>
          </ul>
        </li>

        <li><input type="checkbox" name="list" id="B"><label class="label_no_clicado" @click="Clicked" for="B">B. Obras relacionada con productos de autocuidado <q-icon id = "icono" name="check_circle_outline"/></label>
          <ul class="interior">
            <li><a href="#" @click="Clicked2" class="categoria_no_clicado">B1. Campaña integral de proomción de productos. </a></li>
            <li><a href="#" @click="Clicked2" class="categoria_no_clicado">B2. Materiales impresos de visita. </a></li>
          </ul>
        </li>

        <li><input type="checkbox" name="list" id="C"><label class="label_no_clicado" @click="Clicked" for="C">C. Medical Marketing</label>
          <ul class="interior">
            <li><a href="#" @click="Clicked2" class="categoria_no_clicado">C1. Campaña integral de proomción de productos. </a></li>
            <li><a href="#" @click="Clicked2" class="categoria_no_clicado">C2. Materiales impresos de visita. </a></li>
          </ul>
        </li>

        <li><input type="checkbox" name="list" id="D"><label class="label_no_clicado" @click="Clicked" for="D">D. e-Salud</label>
          <ul class="interior">
            <li><a href="#" @click="Clicked2" class="categoria_no_clicado">D1. Campaña integral de proomción de productos. </a></li>
            <li><a href="#" @click="Clicked2" class="categoria_no_clicado">D2. Materiales impresos de visita. </a></li>

          </ul>
        </li>

        <li><input type="checkbox" name="list" id="E"><label class="label_no_clicado" @click="Clicked" for="E">E. Campañas institucionales o corporativas de empresa</label>
          <ul class="interior">
            <li><a href="#" @click="Clicked2" class="categoria_no_clicado">E1. Campaña integral de proomción de productos. </a></li>
            <li><a href="#" @click="Clicked2" class="categoria_no_clicado">E2. Materiales impresos de visita. </a></li>

          </ul>
        </li>

        <li><input type="checkbox" name="list" id="F"><label class="label_no_clicado" @click="Clicked" for="F">F. Campañas sobre enfermedades o patologías</label>
          <ul class="interior">
            <li><a href="#" @click="Clicked2" class="categoria_no_clicado">F1. Campaña integral de proomción de productos. </a></li>
            <li><a href="#" @click="Clicked2" class="categoria_no_clicado">F2. Materiales impresos de visita. </a></li>
          </ul>
        </li>

        <li><input type="checkbox" name="list" id="G"><label class="label_no_clicado" @click="Clicked" for="G">G. Veterinaria</label>
          <ul class="interior">
            <li><a href="#" @click="Clicked2" class="categoria_no_clicado">G1. Campaña integral de proomción de productos. </a></li>
            <li><a href="#" @click="Clicked2" class="categoria_no_clicado">G2. Materiales impresos de visita. </a></li>
          </ul>
        </li>

        <li><input type="checkbox" name="list" id="H"><label class="label_no_clicado" @click="Clicked" for="H">H. Relaciones Públicas y Comunicación</label>
          <ul class="interior">
            <li><a href="#" @click="Clicked2" class="categoria_no_clicado">H1. Campaña integral de proomción de productos. </a></li>
            <li><a href="#" @click="Clicked2" class="categoria_no_clicado">H2. Materiales impresos de visita. </a></li>
          </ul>
        </li>


        <li><input type="checkbox" name="list" id="I"><label class="label_no_clicado" @click="Clicked" for="I">I. Autopublicidad de agencia</label>
          <ul class="interior">
            <li><a href="#" @click="Clicked2" class="categoria_no_clicado">I1. Campaña integral de proomción de productos. </a></li>
            <li><a href="#" @click="Clicked2" class="categoria_no_clicado">I2. Materiales impresos de visita. </a></li>
          </ul>
        </li>


        <li><input type="checkbox" name="list" id="J"><label class="label_no_clicado" @click="Clicked" for="J">J. Diseño</label>
          <ul class="interior">
            <li><a href="#">J1. Campaña integral de proomción de productos. </a></li>
            <li><a href="#">J2. Materiales impresos de visita. </a></li>
            <li><a href="#">J3. Materiales digitales de visita. </a></li>
            <li><a href="#">J4. Anuncios en prensa. </a></li>
            <li><a href="#">J5. Audiovisuales sobre producto. </a></li>
            <li><a href="#">J6. Comunicación digital. </a></li>
          </ul>
        </li>


        <li><input type="checkbox" name="list" id="K"><label class="label_no_clicado" @click="Clicked" for="K">K. Innovación</label>
          <ul class="interior">
            <li><a href="#">K1. Campaña integral de proomción de productos. </a></li>
            <li><a href="#">K2. Materiales impresos de visita. </a></li>
            <li><a href="#">K3. Materiales digitales de visita. </a></li>
            <li><a href="#">K4. Anuncios en prensa. </a></li>
            <li><a href="#">K5. Audiovisuales sobre producto. </a></li>
            <li><a href="#">K6. Comunicación digital. </a></li>
          </ul>
        </li>
      </ul>
    </div>

  </template>

  <script>

  import { ref, defineComponent } from "vue";

  export default defineComponent ({
      name: "CategoryIndex",
      methods: {
        Clicked(e) {
          var elemento = document.getElementById("icono");
          elemento.style.display = "inline";
        },

        Clicked2(e) {
          e.currentTarget.classList.remove('categoria_no_clicado');
          e.currentTarget.classList.add('categoria_clicado');
        },

      },
      setup () {
        return{

        }
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
      display:none;
    }

    .indice {
      margin-left: 2em;
    }

    .titulo {
      color:rgba(255, 255, 255, 1);
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
      list-style:none;
    }

    .lista li{

      line-height:2.5em;
    }

    .label_clicado{
      color: rgba(226, 44, 56, 1);
      text-decoration: none;
    }

    .label_no_clicado{
      /* color: rgba(255, 255, 255, 1); */
      color: white;
      text-decoration: none;
    }

    .categoria_no_clicado{
      color:#c6c6c6;
      color: white;
      text-decoration:none;
    }

    .categoria_clicado{
      color:rgba(226, 44, 56, 1);
      text-decoration:none;
    }

    .lista input[name="list"] {
      position: absolute;
      left: -1000em;
      }

    .lista .interior{
      display: none;
    }

    .lista input:checked ~ ul{
      display:block;
    }

  </style>