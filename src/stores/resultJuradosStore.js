import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from 'boot/axios'



export const useresultJuradosStore = defineStore("resultJurado", {

state: ()=> ({

    // Contenido tablas de prueba.

    jurado: '',
    empresa: '',
    voto: '',
    resultStore: [
    {
        jurado: 'Manuel Carrasco',
        empresa: 'Apple Tree',
        voto: 'Para prevenir el suicidio, hay que hablar de el',
    },
    {
        jurado: 'Roger Bosch',
        empresa: 'Xolomon Tree',
        voto: '-',
    },
    {
      jurado: 'Manuel Carrasco',
      empresa: 'Apple Tree',
      voto: 'Para prevenir el suicidio, hay que hablar de el',
    },
    {
        jurado: 'Roger Bosch',
        empresa: 'Univelver',
        voto: 'FORO I+D',
    },
    {
      jurado: 'Joaquin Fernández',
      empresa: 'Univelver',
      voto: 'Para prevenir el suicidio, hay que hablar de el',
    },
    ]
}),
})
