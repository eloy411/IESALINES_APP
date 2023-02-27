import { defineStore } from "pinia";
import { api } from 'boot/axios'

export const useLayoutStore = defineStore("layout", {
  state: () => ({
    year: '2022(XVIII)',
    id_edicion: 0,
    linksList: [
      {
        title: "Jurado",
        // icon: "school",
        link: "/jurado",
        exact: 'true',
      },
      {
        title: "Ronda 1",
        // icon: "code",
        link: "/ronda1Page",
        exact: 'false',
      },
      {
        title: "Resultados",
        // icon: "chat",
        link: "/results",
        exact: 'true',
      },
      {
        title: "Configuración",
        // icon: "record_voice_over",
        link: "/configuracion",
        exact: 'false',
      },
    ]
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
            id_edicion: this.id_edicion
          });

        if (res.status >= 200 && res.status <= 400) {
          console.log(res.data)
          if (res.data != 0) {
            this.id_edicion = res.data


            // change things I guess
          }
        }
      }catch(error) {
        console.log(error);
      }
    }
  },
  persist: true,
});
