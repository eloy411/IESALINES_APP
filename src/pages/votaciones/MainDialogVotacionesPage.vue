<template>
  <div class="myGrid">
    <CategoryIndex class="border myGrid__index" />
    <div class="border myGrid__card">
      <div class="flex center myPadding">
        <DialogComponent />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import CategoryIndex from "src/components/votaciones/CategoryIndexComponent.vue";
import  DialogComponent  from "src/components/votaciones/MainDialogVotacionesComponent.vue";

export default defineComponent({
    name: "indicePage",

    components: {
        CategoryIndex,
        DialogComponent
    },

    setup () {
        return {

        }
    }
})

</script>

<style lang="scss">
body {
  background-color: #2F353B;;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.border {
  // border: 1px solid red;
}

.myGrid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  margin-left: 5em;
}


.myGrid__index {
  grid-column: 1/3;
}

.myGrid__card {
  grid-column: 3/8;
  padding: 2em;
  align-self: center;

}

.flex  {
  gap: 3em;
}

.myPadding {
  padding-top: 13%;
}


</style>