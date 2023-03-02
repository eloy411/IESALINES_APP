<template>

    <div class="indice">
      <h4  class="titulo">Índice de categorías</h4>
  
      <ul class="lista">
        <li><input type="checkbox" name="list" id="A"><label class="label_no_clicado" @click="Clicked" for="A">A. Obras relacionada con productos de Prescripción <q-icon id = "icono" name="check_circle_outline"/></label>
          <ul class="interior">
            <li><a href="#r" @click="Clicked2" class="categoria_no_clicado">A1. Campaña integral de proomción de productos. </a></li>
            <li><a href="#r" @click="Clicked2" class="categoria_no_clicado">A2. Materiales impresos de visita. </a></li>
            <li><a href="#r" @click="Clicked2" class="categoria_no_clicado">A3. Materiales digitales de visita. </a></li>
            <li><a href="#r" @click="Clicked2" class="categoria_no_clicado">A4. Anuncios en prensa. </a></li>
            <li><a href="#r" @click="Clicked2" class="categoria_no_clicado">A5. Audiovisuales sobre producto. </a></li>
            <li><a href="#r" @click="Clicked2" class="categoria_no_clicado">A6. Comunicación digital. </a></li>
          </ul>
        </li>
  
        <li><input type="checkbox" name="list" id="B"><label class="label_no_clicado" @click="Clicked" for="B">B. Obras relacionada con productos de autocuidado <q-icon id = "icono" name="check_circle_outline"/></label>
          <ul class="interior">
            <li><a href="#r" @click="Clicked2" class="categoria_no_clicado">B1. Campaña integral de proomción de productos. </a></li>
            <li><a href="#r" @click="Clicked2" class="categoria_no_clicado">B2. Materiales impresos de visita. </a></li>
          </ul>
        </li>
  
        <li><input type="checkbox" name="list" id="C"><label class="label_no_clicado" @click="Clicked" for="C">C. Medical Marketing</label>
          <ul class="interior">
            <li><a href="#r" @click="Clicked2" class="categoria_no_clicado">C1. Campaña integral de proomción de productos. </a></li>
            <li><a href="#r" @click="Clicked2" class="categoria_no_clicado">C2. Materiales impresos de visita. </a></li>
          </ul>
        </li>
  
        <li><input type="checkbox" name="list" id="D"><label class="label_no_clicado" @click="Clicked" for="D">D. e-Salud</label>
          <ul class="interior">
            <li><a href="#r" @click="Clicked2" class="categoria_no_clicado">D1. Campaña integral de proomción de productos. </a></li>
            <li><a href="#r" @click="Clicked2" class="categoria_no_clicado">D2. Materiales impresos de visita. </a></li>
            
          </ul>
        </li>
  
        <li><input type="checkbox" name="list" id="E"><label class="label_no_clicado" @click="Clicked" for="E">E. Campañas institucionales o corporativas de empresa</label>
          <ul class="interior">
            <li><a href="#r" @click="Clicked2" class="categoria_no_clicado">E1. Campaña integral de proomción de productos. </a></li>
            <li><a href="#r" @click="Clicked2" class="categoria_no_clicado">E2. Materiales impresos de visita. </a></li>
            
          </ul>
        </li>
  
        <li><input type="checkbox" name="list" id="F"><label class="label_no_clicado" @click="Clicked" for="F">F. Campañas sobre enfermedades o patologías</label>
          <ul class="interior">
            <li><a href="#r" @click="Clicked2" class="categoria_no_clicado">F1. Campaña integral de proomción de productos. </a></li>
            <li><a href="#r" @click="Clicked2" class="categoria_no_clicado">F2. Materiales impresos de visita. </a></li>
          </ul>
        </li>
  
        <li><input type="checkbox" name="list" id="G"><label class="label_no_clicado" @click="Clicked" for="G">G. Veterinaria</label>
          <ul class="interior">
            <li><a href="#r" @click="Clicked2" class="categoria_no_clicado">G1. Campaña integral de proomción de productos. </a></li>
            <li><a href="#r" @click="Clicked2" class="categoria_no_clicado">G2. Materiales impresos de visita. </a></li>
          </ul>
        </li>
  
        <li><input type="checkbox" name="list" id="H"><label class="label_no_clicado" @click="Clicked" for="H">H. Relaciones Públicas y Comunicación</label>
          <ul class="interior">
            <li><a href="#r" @click="Clicked2" class="categoria_no_clicado">H1. Campaña integral de proomción de productos. </a></li>
            <li><a href="#r" @click="Clicked2" class="categoria_no_clicado">H2. Materiales impresos de visita. </a></li>
          </ul>
        </li>
  
  
        <li><input type="checkbox" name="list" id="I"><label class="label_no_clicado" @click="Clicked" for="I">I. Autopublicidad de agencia</label>
          <ul class="interior">
            <li><a href="#r" @click="Clicked2" class="categoria_no_clicado">I1. Campaña integral de proomción de productos. </a></li>
            <li><a href="#r" @click="Clicked2" class="categoria_no_clicado">I2. Materiales impresos de visita. </a></li>
          </ul>
        </li>
  
  
        <li><input type="checkbox" name="list" id="J"><label class="label_no_clicado" @click="Clicked" for="J">J. Diseño</label>
          <ul class="interior">
            <li><a href="#r">J1. Campaña integral de proomción de productos. </a></li>
            <li><a href="#r">J2. Materiales impresos de visita. </a></li>
            <li><a href="#r">J3. Materiales digitales de visita. </a></li>
            <li><a href="#r">J4. Anuncios en prensa. </a></li>
            <li><a href="#r">J5. Audiovisuales sobre producto. </a></li>
            <li><a href="#r">J6. Comunicación digital. </a></li>
          </ul>
        </li>
  
  
        <li><input type="checkbox" name="list" id="K"><label class="label_no_clicado" @click="Clicked" for="K">K. Innovación</label>
          <ul class="interior">
            <li><a href="#r">K1. Campaña integral de proomción de productos. </a></li>
            <li><a href="#r">K2. Materiales impresos de visita. </a></li>
            <li><a href="#r">K3. Materiales digitales de visita. </a></li>
            <li><a href="#r">K4. Anuncios en prensa. </a></li>
            <li><a href="#r">K5. Audiovisuales sobre producto. </a></li>
            <li><a href="#r">K6. Comunicación digital. </a></li>
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
      color: rgba(255, 255, 255, 1);
      text-decoration: none;
    }
  
    .categoria_no_clicado{
      color:#c6c6c6;
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