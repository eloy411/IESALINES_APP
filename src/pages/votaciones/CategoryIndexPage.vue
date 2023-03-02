<template>
    <CategoryCardIndex />
</template>

<script>
import { ref, defineComponent } from "vue";
import CategoryCardIndex from "src/components/votaciones/CategoryCardIndex.vue";


export default defineComponent({
    name: "indicePage",

    components: {
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