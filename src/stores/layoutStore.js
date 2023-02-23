import { defineStore } from "pinia";
import { api } from 'boot/axios'

export const useLayoutStore = defineStore("layout", {
  state: () => ({
    year: '2022(XVIII)',
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
        link: "/result",
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
      try {
        const response = await api.get(`http://127.0.0.1:8000/api/edicion`)
        if (response.status >= 200 && response.status < 400 ) {
          let auxYear = response.data[0].anio;
          let romanAuxYear = '(' +  response.data[0].anio_romano + ')';
          this.year = auxYear + romanAuxYear;
          this.notification = true;
        }else {
          this.notification = false;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  persist: true,
});
