import { defineStore } from "pinia";

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
        link: "/resultados",
        exact: 'false',
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
    getYear() {
      console.log('petición para coger el año');
      // this.year =
    },
  },
  persist: true,
});
