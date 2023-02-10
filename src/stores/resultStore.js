import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from 'boot/axios'



export const useresultStore = defineStore("result", {

state: ()=> ({

    // Contenido tablas de prueba.

    name: '',
    voto: '',
    premio: '',
    resultStore: [
    {
        name: 'Frozen Yogurt',
        voto: 7,
        premio: '',
        
    },
    {
        name: 'Ice cream sandwich',
        voto: 5,
        premio: '',
    },
    {
        name: 'Prueba',
        voto: 5,
        premio: '',
    },
    {
        name: 'Eclair',
        voto: 2,
        fat: '',
    },
    ]
}),


// mounted () {
//     this.getPosts ()
//   },

//   methods: {
//     getPosts () {
//       this.$axios.get('https://dummyjson.com/products')
//         .then((res) => {
//           this.products = res.data
//           console.log(res.data)

//         })
//     }
//   }
})