<template>
  <div class="my-card">
     <q-card class="my-card">
       <q-card-section>
         <h6 class="card1Title"><b>Activación de la Ronda1</b></h6>

         <div class="infoDiv">
           <q-icon class="infoIcon" name="info" size="27px" /><p icon='info' class="infoText">La activación de la ronda 1 permite al jurado el acceso a <br>  la aplicación de votación y emitir los votos Oro y Aspid</p>
         </div>
         <q-toggle v-model="active" class="q-ml-md" color="blue" label="Si" />

           <q-btn-dropdown
             :disable-main-btn="!active"
             :disable-dropdown="!active"
             split
             class="mailBtn"
             color="red"
             label="Enviar Email"
             @click="onMainClick"
           >
             <q-list>


                 <q-item class="my-item" hovable  @mouseover="hover = true">
                   <!-- <q-select class="my-items" :options="options" borderless>Jurado de Creatividad</q-select> -->
                   <q-item-section>
                     <q-item-label>{{tipoJ[0]}}</q-item-label>
                   </q-item-section>
                   <q-menu anchor="top right" self="top start">
                     <q-list>
                       <q-item class="my-item" dense clickable to="ronda1Page/EmailInicioVotacion"   @click="getJuradoTipo(tipoJ[0])">
                        <q-item-section>Inicio votación</q-item-section>
                       </q-item>
                       <q-item class="my-item" dense clickable to="ronda1Page/EmailRecordatorioVotacion2"  @click="getJuradoTipo(tipoJ[0])">
                        <q-item-section>Recordatorio votación</q-item-section>
                       </q-item>
                     </q-list>
                   </q-menu>
                 </q-item>



                 <q-item class="my-item" hovable  @mouseover="hover = true">
                   <!-- <q-select class="my-items" borderless>Jurado de Creatividad</q-select> -->
                   <q-item-section>
                     <q-item-label>{{tipoJ[1]}}</q-item-label>
                   </q-item-section>
                   <q-menu anchor="top right" self="top start">
                     <q-list>
                       <q-item class="my-item" dense clickable to="ronda1Page/EmailInicioVotacion"   @click="getJuradoTipo(tipoJ[1])">
                        <q-item-section>Inicio votación</q-item-section>
                       </q-item>
                       <q-item class="my-item" dense clickable to="ronda1Page/EmailRecordatorioVotacion2"   @click="getJuradoTipo(tipoJ[1])">
                        <q-item-section>Recordatorio votación</q-item-section>
                       </q-item>
                     </q-list>
                   </q-menu>
                 </q-item>
             </q-list>
           </q-btn-dropdown>
       </q-card-section>
     </q-card>
   </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import { useTipoJuradosStore } from "src/stores/TipoJuradosStore";
import { data } from "browserslist";

export default defineComponent({
 name: "ActivacionRondaComponent",
 setup () {
   const tipoStore = ref(useTipoJuradosStore());
   const tipoJ = tipoStore.value.Tipo;
   const loading = ref(false);
   const options="";
     return {
       active: ref(false),
       loading,
       tipoJ,


       getJuradoTipo(tipoJ){
         console.log(tipoJ)
         // let auxArr=[row.nombre[0],row.nombre[1]];
         tipoStore.value.mailDestinatario = tipoJ;
         tipoStore.value.checker=true;
         // location.href= "ronda1Page/EmailInicioVotacion";

       }

     }

 }
})


</script>
<style>
.card1Title{
margin-top: -0.9rem;
}

</style>
