<template>
  <ConfigurationComponent/>
</template>

<script>
import { ref, defineComponent } from "vue";
import  ConfigurationComponent   from "src/components/ConfigurationComponent.vue";

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
