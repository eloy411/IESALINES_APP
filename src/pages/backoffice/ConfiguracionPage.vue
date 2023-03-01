<template>
  <ConfigurationComponent/>
</template>

<script>
import { ref, defineComponent } from "vue";
import  ConfigurationComponent   from "src/components/backoffice/ConfigurationComponent.vue";

export default defineComponent({
  name: "ConfiguracionPage",

  components: {
    ConfigurationComponent
  },

  setup () {

    return {

    }
  }
})

</script>
