<template>
    <q-page>
      <div class="my-card">
        <q-card class="my-card">
          <q-card-section>
            <h5 class="card1Title"><b>Activación de la Ronda1</b></h5>

            <div class="infoDiv">
              <q-icon class="infoIcon" name="info" size="27px" /><p icon='info' class="infoText">La activación de la ronda 1 permite al jurado el acceso a <br>  la aplicación de votación y emitir los votos Oro y Aspid</p>
            </div>
            <q-toggle v-model="active"  color="blue" label="Si" />

              <q-btn-dropdown
                :disable="!active"
                split
                class="mailBtn"
                color="red"
                label="Enviar Email"
                @click="onMainClick"
              >
                <q-list>
                  
                  
                    <q-item class="my-item" clickable  @mouseover="hover = true">
                      <q-select class="my-items" :options="options" borderless>Jurado de Creatividad</q-select>
                      <!-- <q-item-section>
                        <q-item-label>Jurado de Creatividad</q-item-label>
                      </q-item-section> -->
                    </q-item>
          
           

                  <q-item  class="my-item" clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Jurado de Formación </q-item-label>
                      
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
          </q-card-section>
        </q-card>
      </div>

      <JuradosRondaComponent></JuradosRondaComponent>
      <TablaVotosComponent></TablaVotosComponent>
    </q-page>
  
</template>

<script>

import { defineComponent } from 'vue'
import TablaVotosComponent from 'src/components/TablaVotosComponent.vue'
import JuradosRondaComponent from 'src/components/JuradosRondaComponent.vue'
import { ref } from 'vue'

export default defineComponent({
  name: "ronda1Page",

  components:{
    TablaVotosComponent,
    JuradosRondaComponent,
  },
  setup(){

    return{
        active: ref(true),
        hover:false,
        options: ref(['inicio votación', 'recordatorio votación']),
    }
  }
})

</script>
<style>
.radius {
  border-radius: 20px;
  margin-right: 2rem;
}
.my-card{
  margin:1em ;
  padding-top: 1em;
  
}
.my-items{
  display: inline-block;
}
.my-item:hover{
  background-color: #FFDAD8
}
.mailBtn{
  float: right;
}
.infoIcon{
  margin-right: 0.3em;
}

.infoDiv{
  float:right;
  text-align: left;
  margin-top: -7em;
  display:inline-flex;
  color: #AAAAAA;
}
</style>