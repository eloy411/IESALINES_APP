<template >
  <div class="backrooms">
    <div align="center">
      <!--TextHeader-->
      <div class="headertext" >
        <qt v-for="item in TitelDescArr" v-bind:key="item.name">
          {{ indiceStore.subcategory }}
        </qt>
      </div>

      <!--TextDescrip-->
      <div class="box">
        <div v-for="item in TitelDescArr" v-bind:key="item.name">
          {{ item.descripción }}
        </div>
      </div>

      <!--CARDS-->

      <div  class="q-pa-md row items-center q-gutter-xl" style="justify-content: center">
        <!--Card 1-->
        <!--clicableCard-->
        <q-card class="my-card cursor-pointer q-hoverable" clickable @click="Awardrow1" >
        <!--Trofee-->
        <div v-for="item in Trofee" v-bind:key="item.name" >
              <div v-if="Trofee == 1">
                <img class="premiStyle" style="position:absolute;" src="../../assets/sello_oro.svg">
              </div>
        </div>
        <!--Image-->
          <img class="image" v-for="item in TitelDescArr" v-bind:key="item.name" :src="item.image1" style="border-radius: 10px;">
          <q-list style=" text-align: left;">
            <q-item class="textBox">
        <!--TextCard-->
              <q-item-section>
                <q-item-label v-for="item in TitelDescArr" v-bind:key="item.name">
                  {{ item.Card1tilte }}
                </q-item-label>
                <q-item-label v-for="item in TitelDescArr" v-bind:key="item.name">
                  {{ item.Card1desc }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>

        <!--Card 2-->
        <!--clicableCard-->
        <q-card class="my-card cursor-pointer q-hoverable" clickable @click="Awardrow2">
        <!--Trofee-->
        <div v-for="item in Trofee" v-bind:key="item.name" >
              <div v-if="Trofee == 2">
                <img class="premiStyle" style="position:absolute;" src="../../assets/sello_oro.svg">
              </div>
        </div>
        <!--Image-->
          <img class="image" v-for="item in TitelDescArr" v-bind:key="item.name" :src="item.image2" style="border-radius: 10px;">
          <q-list style=" text-align: left;">
            <q-item class="textBox">
        <!--TextCard-->
              <q-item-section>
                <q-item-label v-for="item in TitelDescArr" v-bind:key="item.name">
                  {{ item.Card2tilte }}
                </q-item-label>
                <q-item-label v-for="item in TitelDescArr" v-bind:key="item.name">
                  {{ item.Card2desc }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>

        <!--Card 3-->
        <!--clicableCard-->
        <q-card class="my-card cursor-pointer q-hoverable" clickable @click="Awardrow3">
        <!--Trofee-->
        <div v-for="item in Trofee" v-bind:key="item.name" >
              <div v-if="Trofee == 3">
                <img class="premiStyle" style="position:absolute;" src="../../assets/sello_oro.svg">
              </div>
        </div>
        <!--Image-->
          <img class="image" v-for="item in TitelDescArr" v-bind:key="item.name" :src="item.image3" style="border-radius: 10px;">
          <q-list style=" text-align: left;">
            <q-item class="textBox">
        <!--TextCard-->
              <q-item-section>
                <q-item-label v-for="item in TitelDescArr" v-bind:key="item.name">
                  {{ item.Card3tilte }}
                </q-item-label>
                <q-item-label v-for="item in TitelDescArr" v-bind:key="item.name">
                  {{ item.Card3desc }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
        <!--DesertButton-->
      <div class="row" id="desertStyle">
        <div style="margin-top:5px">
          Después de ver y evaluar todas las obras de esta categoría considero que debe quedar desierta
        </div>
        <button class="burttonStyle">Desierto</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue'
import { useIndiceStore } from "src/stores/indiceCategoriaStore";
export default defineComponent({

  name:"DialogComponent",
  setup () {
    const dialog = ref(false)
    const position = ref('top')
    const cont = [0]
    const Trofee = ref([])
    const indiceStore = ref(useIndiceStore());
    // const categorias = indiceStore.value.categoriasArr;
    return {
      TitelDescArr: [
        {
          titulo: 'A1. Campaña integral de promoción de producto',
          descripción: 'La fecha exacta del nacimiento de Dante es desconocida, aunque generalmente se cree que fue alrededor de 1265. Esto puede deducirse de las alusiones autobiográficas reflejadas en la Vita nuova.4​Dante participó activamente en las luchas políticas de su tiempo, por lo que fue desterrado de su ciudad natal, y fue un activo defensor de la unidad italiana. Escribió varios tratados en latín sobre literatura, política y filosofía. A su pluma se debe el tratado en latín De Monarchia, de 1311, que constituye una exposición detallada de sus ideas políticas, entre las cuales se encuentran la necesidad de la existencia de un Sacro Imperio Romano y la separación de la Iglesia y el Estado.5​ En 1289 participó en la batalla de Campaldino durante la guerra entre Florencia y Arezzo, y contribuyó así a la victoria de los florentinos.​​​',

          Card1tilte:'Titulo campaña',
          Card1desc:'En dos lineas',
          image1:'https://cdn.quasar.dev/img/parallax2.jpg',

          Card2tilte:'Titulo campaña',
          Card2desc:'En dos lineas',
          image2:'https://cdn.quasar.dev/img/parallax2.jpg',

          Card3tilte:'Titulo campaña',
          Card3desc:'En dos lineas',
          image3:'https://cdn.quasar.dev/img/parallax2.jpg',

        },
      ],
      Trofee,
      indiceStore,

      Awardrow1() {
          if (cont == 0) {
          //toda esta concicon es por si no se ha puesto un trofeo.
          //Hace un push a la array Trofee para saber la ubicación de la card seleccionada.
            Trofee.value = [...Trofee.value, 1]
          //es un contador con función de boleano
            cont.push(1);
          }
           else {
          //si ya hay una card con trofeo este concional lo cambia.
          //elimina el numero de el contador - boleano
            cont.pop()
          //elimina la ubicacion anterior del trofeo
          //pop es importante
            Trofee.value.pop()
          //añade la nueva ubicación del trofeo
            Trofee.value = [...Trofee.value, 1]
          //añade un numero para encender el boleano
            cont.push(1);
          }
      },
      Awardrow2() {
          if (cont == 0) {
            Trofee.value = [...Trofee.value, 2]
            cont.push(1)
          }
           else {
            cont.pop()
            Trofee.value.pop()
            Trofee.value = [...Trofee.value, 2]
            cont.push(1)
          }
      },
      Awardrow3() {
          if (cont == 0) {
            Trofee.value = [...Trofee.value, 3]
            cont.push(1)
          }
           else {
            cont.pop()
            Trofee.value.pop()
            Trofee.value = [...Trofee.value, 3]
            cont.push(1)
          }
      },
      dialog,
      position,
      open (pos) {
        position.value = pos
        dialog.value = true
      }

    }

  }


})
</script>

<style>
.burttonStyle{
  margin-left: 1.875rem;
  background-color: black;
  color: red;
  border-radius: 1.875rem;
	border:1px solid red;
  width: 5.625rem;
  height: 2.125rem;
  cursor:pointer;

}
.burttonStyle:hover {
  color: white;
}
.burttonStyle:active {
	position:relative;
	top:1px;
}
#desertStyle{
  background-color: black;
  color: aliceblue;
  width: 52.5rem;
  padding: 1.25rem;
  border-radius: 0.625rem;
  font-size: 1rem;
  margin-top: 3.75rem;
}
.premiStyle{
  position: absolute;
  margin-left: 5.625rem;
  width: 4.375rem;
}
.box{
  max-width: 800px;
  height: auto;
  text-align: center;
  color: white;
  margin-top: 1.25rem;
  }
.textBox{
  text-align: left;
  margin-top: 0.313rem;
  margin-bottom: 0.313rem;
  width: 8.75rem;
}
.backrooms{
  background-color: #2f353b;
  margin: auto;
  width: auto;
  height: 51.875rem;
  align-self: center;
  margin-top: -3em;
}
.headertext{
font-family: Georgia, serif;
font-size: 1.75rem;
letter-spacing: 0.125rem;
word-spacing: 0.125rem;
color:white;
font-weight: normal;
text-decoration: none;
font-style: normal;
font-variant: normal;
text-transform: none;
text-align: center;
}
.my-card{
    width: 100%;
    max-width: 15rem;
    border-radius:  0.625rem;
    margin-top: 6.25rem;
}
.image{
     border-radius:  0.625rem;
}


</style>
