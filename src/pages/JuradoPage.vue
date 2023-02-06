<template>
  <TableJurados />
</template>

<script>
import { ref, defineComponent } from "vue";
import  TableJurados  from "components/TableJurados.vue";

export default defineComponent({
  name: "JuradoPage",

  components: {
    TableJurados
  },

  setup () {

    return {

    }
  }
})

</script>
