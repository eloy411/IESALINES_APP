<template>
  <NewJuradoStepperForm />
</template>


<script>
import { ref, defineComponent } from "vue";
import NewJuradoStepperForm from "src/components/backoffice/StepperFormNewJuradoComponent.vue";


export default defineComponent({
  name: "NuevoPage",

  components: {
    NewJuradoStepperForm
  },
  setup () {
    return {
    }
  }
})
</script>
