<template>
  <EdicionJurado />
</template>

<script>
import { ref, defineComponent } from "vue";
import  EdicionJurado  from "src/components/backoffice/EdicionJuradoComponent.vue";

export default defineComponent({
  name: "JuradoPage",

  components: {
    EdicionJurado
  },

  setup () {

    return {

    }
  }
})

</script>
