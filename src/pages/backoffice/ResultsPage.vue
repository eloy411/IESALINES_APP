<template>
  <tableResults/>
</template>

<script>
import { ref, defineComponent } from "vue";
import  tableResults  from "src/components/backoffice/tableResultsComponent.vue";

export default defineComponent({
  name: "ResultsPage",

  components: {
    tableResults
  },

  setup () {
    return {

    }
  }
})

</script>
