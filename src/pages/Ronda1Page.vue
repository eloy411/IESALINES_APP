<template>
  <q-page>
    <ActivacionRondaComponent></ActivacionRondaComponent>

    <JuradosRondaComponent></JuradosRondaComponent>
    <TablaVotosComponent></TablaVotosComponent>
  </q-page>

</template>

<script>

import { defineComponent } from 'vue'
import TablaVotosComponent from 'src/components/TablaVotosComponent.vue'
import JuradosRondaComponent from 'src/components/JuradosRondaComponent.vue'
import ActivacionRondaComponent from 'src/components/ActivacionRondaComponent.vue'
// import MailVotacionComponent from 'src/components/MailVotacionComponent.vue'
import { useJuradosStore } from "src/stores/TablaJuradosStore";
import { ref } from 'vue'

export default defineComponent({
name: "ronda1Page",

components:{
  TablaVotosComponent,
  JuradosRondaComponent,
  ActivacionRondaComponent,
  // MailVotacionComponent,

},
setup(){
  const juradoStore = ref(useJuradosStore());


  return{
      juradoStore,
      active: ref(true),
      hover:false,
      options: ref(['inicio votación', 'recordatorio votación']),
      tipoCreatividad:ref('Jurado de Creatividad'),
      tipoFormacion:ref('Jurado de Formación'),
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
margin-top: -5em;
display:inline-flex;
color: #AAAAAA;
}
</style>
