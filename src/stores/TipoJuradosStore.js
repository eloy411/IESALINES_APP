import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from 'boot/axios'


export const useTipoJuradosStore = defineStore("tipo", {

  state: ()=> ({
    checker:false,
    mailDestinatario:"",

    Tipo:["Formacion","Creatividad"],

  }),
  getters: {
    getJuradosTipo:  (state) => state.Tipo,

  },


});
