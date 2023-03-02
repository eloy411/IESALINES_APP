<template>
  <DialogComponent/>
</template>

<script>
import { ref, defineComponent } from "vue";
import  DialogComponent  from "src/components/votaciones/MainDialogVotacionesComponent.vue";

export default defineComponent({
  name: "DialogPage",

  components: {
    DialogComponent
  },

  setup () {

    return {

    }
  }
})

</script>
