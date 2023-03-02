<template>
    <CategoryIndex />
    <CategoryCardIndex />
</template>

<script>
import { ref, defineComponent } from "vue";
import CategoryCardIndex from "src/components/votaciones/CategoryCardIndexComponent.vue";
import CategoryIndex from "src/components/votaciones/CategoryIndexComponent.vue";


export default defineComponent({
    name: "indicePage",

    components: {
        CategoryIndex,
        CategoryCardIndex,
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

</style>