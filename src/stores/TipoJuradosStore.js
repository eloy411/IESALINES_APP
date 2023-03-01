import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from 'boot/axios'


export const useTipoJuradosStore = defineStore("tipo", {

  state: ()=> ({
    checker:false,
    mailDestinatario:"",
  
    Tipo:["Jurado de Formación","Jurado de Creatividad"],
    
  }),
  getters: {
    getJuradosTipo:  (state) => state.Tipo,

  },


});
