<template>
    <AyudaComponent></AyudaComponent>
</template>
  
  <script>
  import { ref, defineComponent } from "vue";
  import  AyudaComponent  from "src/components/votaciones/AyudaComponent.vue";
  
  export default defineComponent({
    name: "AyudaPage",
  
    components: {
      AyudaComponent
    },
  
    setup () {
  
      return {
  
      }
    }
  })
  
  </script>
  