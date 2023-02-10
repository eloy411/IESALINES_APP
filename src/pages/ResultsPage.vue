<template>
  <tableResults/>
</template>

<script>
import { ref, defineComponent } from "vue";
import  tableResults  from "components/tableResults.vue";

export default defineComponent({
  name: "JuradoPage",

  components: {
    tableResults
  },

  setup () {
    return {

    }
  }
})

</script>
