<template>
  <DialogComponent/>
</template>

<script>
import { ref, defineComponent } from "vue";
import  DialogComponent  from "components/DialogComponent.vue";

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
