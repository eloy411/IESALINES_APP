<template>
  <MainContentComponent/>
</template>

<script>
import { ref, defineComponent } from "vue";
import  MainContentComponent  from "src/components/votaciones/MainContentComponent.vue";

export default defineComponent({
  name: "ComponentMainDialogVotacionesPage",

  components: {
    MainContentComponent
  },

  setup () {

    return {

    }
  }
})

</script>
