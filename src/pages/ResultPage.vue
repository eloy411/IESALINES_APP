<template>
  <ResultTab />
</template>


<script>
import { ref, defineComponent } from "vue";
import ResultTab from "src/components/ResultTab.vue";

export default defineComponent({
  name: "ResultPage",

  components: {
    ResultTab
  },
  setup () {
    return {

    }
  }
})
</script>