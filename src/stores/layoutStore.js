import { defineStore } from "pinia";
import { api } from 'boot/axios'

export const useLayoutStore = defineStore("layout", {
  state: () => ({
    year: '2022(XVIII)',
    id_edicion: 0,
    activacionRonda: false,
    mailButton: false,
  }),
  actions: {
    async getYear() {
      console.log('==== get dyear/edicion ====');
      try {
        const response = await api.get(`http://127.0.0.1:8000/api/edicion`)
        console.log(response.data)
        if (response.status >= 200 && response.status < 400 ) {
          let auxYear = response.data[0].anio;
          let romanAuxYear = '(' +  response.data[0].anio_romano + ')';
          this.year = auxYear + romanAuxYear;
          this.notification = true;
          this.id_edicion = response.data[0].id;
          console.log(this.id_edicion)
        }else {
          this.notification = false;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async switchRonda() {
      try {
        console.log(' ==== put switch ronda ====');
        const res = await api.put('http://127.0.0.1:8000/api/ronda/switch',
          {
            id_edicion: this.id_edicion,
            aceptacion_ronda: this.activacionRonda
          });

        if (res.status >= 200 && res.status <= 400) {
          console.log(res)
          if (res.data == 1) {
            this.mailButton = true;
          } else {
            this.mailButton = false;
          }
          console.log(this.mailButton)
        }
      }catch(error) {
        console.log(error);
      }
    }
  },
  persist: true,
});
