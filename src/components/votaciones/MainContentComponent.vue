<template>
  <div>
    <div class="flexbox-container">
      <div class="col1">
        <div class="botonVolver">
          <q-btn outline rounded color="secondary" class="bg-black botonObras" label="Volver A1" />
          <p class="numeroC"><b>1/3</b></p>
        </div>
        <div class="categoriasSubcategorias">
          <p><b>A. Obras relacionadas con productos de Prescripción</b></p>
          <subtitle class="subcategoria">A1. Campaña integral de promoción de producto</subtitle>
        </div>
        <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
          <Slide v-for="slide in 4" :key="slide">
            <div class="carousel__item">{{ slide }}</div>
          </Slide>
        </Carousel>

        <Carousel id="thumbnails" :items-to-show="3" :wrap-around="true" v-model="currentSlide" ref="carousel">
          <Slide v-for="slide in 4" :key="slide">
            <div class="carousel__item" @click="slideTo(slide - 1)">{{ slide }}</div>
          </Slide>
        </Carousel>
        <!-- <q-img src="../../assets/Obras/obra1.png" class="imagenO" />
        <div class="obrasP">
          <q-img src="../../assets/Obras/obra2.png" class="imagen" style="max-width: 150px;" />
          <q-img src="../../assets/Obras/obra3.png" class="imagenP" style="max-width: 150px;" />
          <q-img src="../../assets/Obras/obra4.png" class="imagenP" style="max-width: 150px;" />
        </div> -->
      </div>
      <div class="col2">
        <div class="premiosB">
          <div class="oro">
            <p>A esta campaña le doy: </p>
            <q-btn rounded color="secondary" class="oroButton" label="Oro" />
          </div>
          <div class="plata">
            <p>A esta campaña le doy: </p>
            <q-btn rounded color="secondary" class="oroButton" label="Plata" />
          </div>
        </div>
        <div class="textoObra">
          <h5>Titulo Campaña</h5>
          <p><b>DESCRIPCIÓN:</b></p>
          <p>
            Los pacientes oncológicos tienen que enfrentarse a algo más que a la difícil lucha contra el cáncer: el
            dolor irruptivo. Un dolor repentino muy intenso e incapacitante que te saca de tu vida casi literalmente,
            pues llega a ser paralizante. Por lo que cuando este desagradable dolor llega, lo importante para el
            paciente es actuar lo más rápido posible para neutralizarlo rápidamente y salir de ese terrible momento en
            el que se encuentran inmersos, para recuperar sus vidas.

            Fenticerta es un fármaco oral indicado este tipo de dolor en pacientes oncológicos que ya están en
            tratamiento con Opioides. Al ser sublingual, entra más rápido en el torrente sanguíneo generando una gran
            rapidez de absorción y por tanto de acción, colocando a Fenticerta como una opción rápida, segura y eficaz.
            El reto era demostrárselo al profesional sanitario de una manera muy visual y diferente, pero a la vez
            divulgativa sobre su mecanismo de acción (MoA).
          </p>

          <p><b>ESTRATEGIA</b></p>
          <p>
            Los mecanismos de acción o MoA, suelen ser un tipo de contenido racional, muy científico y plano, donde la
            creatividad suele quedar en un segundo plano. Los profesionales sanitarios reciben muchos impactos de
            diferentes productos similares que explican sus bondades con muchos datos y poco storytelling.

            Frente a ello recurrimos al entretenimiento y a la tecnología para crear IMMERSIVE MoA by Sandoz, el primer
            mecanismo de acción inmersivo gracias al cual el profesional sanitario podía vivir una experiencia única
            sonora y visual a través de la realidad virtual, ponerse en la piel de un paciente, experimentar su dolor y
            conocer en 360º el mecanismo de acción del fármaco y su rapidez de acción.
            PLAN DE ACCIÓN REALIZADO:
            Para acompañar a la campaña de producto, ideamos y desarrollamos un vídeo interactivo con tecnología VR 360º
            que Sandoz podía utilizar en congresos científicos, sesiones clínicas, visitas médicas o comunicaciones
            digitales para llegar al HCP de una manera diferencial y memorable.
          </p>
          El vídeo podía verse con gafas de realidad virual, pero también desde cualquier dispositivo móvil, tablet u
          ordenador.
          PRODUCTO:
          Fenticerta
          DIRECCIÓN CREATIVA:
          Natxo Díaz
          DIRECCIÓN DE ARTE:
          Leo Rincón, Adrián Poveda
          COPY:
          Natxo Díaz, Eduardo Domínguez
          DISEÑO MULTIMEDIA:
          Juanen, Fernando Tendero
          ILUSTRACIÓN:
          Fernando Tendero
          PRODUCTORA:
          Juanen
          REALIZADOR:
          Juanen, Leo Rincón
          MÚSICA:
          Clap Music
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useIndiceStore } from 'src/stores/indiceCategoriaStore'
import { ref, defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({

  name: "MainContentComponent",
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    currentSlide: 0,
  }),
  methods: {
    slideTo(val) {
      this.currentSlide = val
    },
  },
  setup() {

    const indiceStore = ref(useIndiceStore());
    const obrasArr =  ref(indiceStore.value.obrasArr);
    const videos = ref(obrasArr.value.videos);
    console.log("VIDEOOOOOOOOOOSSSSSSSSSSSSSSSSSSSSSSSSS");
    console.log(obrasArr.value[0]);
    return {
      images: [{id: 1,url:'../../assets/Obras/obra1.png'}, {id: 2,url:'../../assets/Obras/obra2.png'}, {id: 3,url:'../../assets/Obras/obra3.png'}]

    }

  }


})
</script>

<style>
body {
  background-color: #2F353B;
}

.flexbox-container {
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
}

.flexbox-container>div {
  /* width: 40%; */
  padding: 10px;
}

.flexbox-container>div:first-child {
  margin-right: 20px;
}

.col1 {
  margin-top: 1rem;
  width: 60%;
  overflow: hidden;
}

.col2 {
  margin-top: 1rem;
  width: 40%;
}

.botonVolver {
  float: right;
  display: flex;
}

.numeroC {
  color: white;
  margin-left: 1rem;
  margin-top: 0.5rem;
}

.botonObras {
  height: 2rem;
}

.categoriasSubcategorias {
  color: white;
  margin-left: 3rem;
}

.subcategoria {
  margin-left: 1rem;
}

.obrasP {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.imagenO {
  margin-top: 2rem;
}

.imagenP {
  margin-left: 2rem;
}

.premiosB {
  display: flex;
}

.oro {
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16rem;
  height: 3.5rem;
  border-radius: 10px;
}

.oroButton {
  height: 0.8rem;
  margin-left: 0.8rem;
}

.plata {
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16rem;
  height: 3.5rem;
  margin-left: 10px;
  border-radius: 10px;
}

.textoObra {
  color: white;
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
