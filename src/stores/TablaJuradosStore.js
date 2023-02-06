import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from 'boot/axios'


export const useJuradosStore = defineStore("jurados", {

  state: ()=> ({
    juradosRonda: [
      {
        nombre:['Manuel Carrasco' ,'Apple Tree'],
        tipo: 'Jurado de creatividad',
        progreso: '100%',
        último_Acceso: '12/5/2002 12:45h',
        recordatorio:'',
        deleteVotos:'',
      },
      {
        nombre:['Manuel Carrasco' ,'Apple Tree'],
        tipo: 'Jurado de creatividad',
        progreso: '-',
        último_Acceso: '12/5/2002 12:45h',
        recordatorio:'',
        deleteVotos:'',
      },
      {
        nombre:['Manuel Carrasco' ,'Apple Tree'],
        empresa: 'Apple Tree',
        tipo: 'Jurado de creatividad',
        progreso: '20%',
        último_Acceso: '12/5/2002 12:45h',
        recordatorio:'',
        deleteVotos:'',
      },
      {
        nombre:['Manuel Carrasco' ,'Apple Tree'],
        empresa: 'Apple Tree',
        tipo: 'Jurado de creatividad',
        progreso: '10%',
        último_Acceso: '12/5/2002 12:45h',
        recordatorio:'',
        deleteVotos:'',
      },
    ]
  }),
  getters: {
    getJuradosTest:  (state) => state.juradosTest,

  },


});
