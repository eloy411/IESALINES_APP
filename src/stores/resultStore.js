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
        name: 'Para prevenir el suicidio, hay que hablar de el',
        voto: 6,
        premio: '-',

    },
    {
        name: 'FORO I+D',
        voto: 5,
        premio: '',
    },
    {
        name: 'Immunofitness',
        voto: 1,
        premio: '',
    },
    {
        name: 'Hospitales Humanos',
        voto: '-',
        premio: ''
    },
    {
      name: 'El primer concierto en una farmacia, por Acofarma',
      voto: '-',
      premio: ''
  },
  {
      name: 'La Huella by Novartis',
      voto: '-',
      premio: ''
  },
    ],
    subcategoriesArr: [
      {
        Categoria: 'A1. Campaña integral de promoción de producto (Aspid Oro y Plata)',
      },
      {
        Categoria: 'A2. Reuniones con profesionales sanitarios (Aspid oro y Plata)',
      },
      {
        Categoria: 'B1. Packaging',
      },
      {
        Categoria: 'B2. Telemedicina',
      },
      {
        Categoria: 'C1. Programas de Formación a Profesionales (presencial) (Aspid oro y Plata)',
      },
      {
        Categoria: 'C2. Reuniones con profesionales sanitarios (Aspid oro y Plata)',
      },
      {
        Categoria: 'D1. Packaging',
      },
      {
        Categoria: 'D2. Telemedicina',
      },
      {
        Categoria: 'E1. Programas de Formación a Profesionales (presencial) (Aspid oro y Plata)',
      },
      {
        Categoria: 'E2. Reuniones con profesionales sanitarios (Aspid oro y Plata)',
      },
      {
        Categoria: 'F1. Packaging',
      },
      {
        Categoria: 'F2. Telemedicina',
      },
      {
        Categoria: 'G1. Programas de Formación a Profesionales (presencial) (Aspid oro y Plata)',
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
