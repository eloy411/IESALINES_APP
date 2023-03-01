<template>
  <TableJurados />
</template>

<script>
import { ref, defineComponent } from "vue";
import TableJurados from "src/components/backoffice/TableJuradosComponent.vue"
// import  TableJurados  from "components/backoffice/TableJurados.vue";

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
