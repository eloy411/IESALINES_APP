import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from 'boot/axios'


export const useJuradosStore = defineStore("jurados", {

  state: ()=> ({
    checker:false,
    mailDestinatario:"",
    juradosRonda: [
      {
        nombre:['Manuel Carrasco' ,'Apple Tree'],
        tipo: 'Jurado de Creatividad',
        progreso: '100%',
        último_Acceso: '12/5/2002 12:45h',
        recordatorio:'',
        deleteVotos:'',
      },
      {
        nombre:['Manuel Carrasco' ,'Apple Tree'],
        tipo: 'Jurado de Formación',
        progreso: '-',
        último_Acceso: '12/5/2002 12:45h',
        recordatorio:'',
        deleteVotos:'',
      },
      {
        nombre:['Manuel Carrasco' ,'Apple Tree'],
        empresa: 'Apple Tree',
        tipo: 'Jurado de Creatividad',
        progreso: '20%',
        último_Acceso: '12/5/2002 12:45h',
        recordatorio:'',
        deleteVotos:'',
      },
      {
        nombre:['Manuel Carrasco' ,'Apple Tree'],
        empresa: 'Apple Tree',
        tipo: 'Jurado de eSalud',
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
