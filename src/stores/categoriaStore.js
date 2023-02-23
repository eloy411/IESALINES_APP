import { defineStore } from "pinia";
import { api } from 'boot/axios'


export const useVotosStore = defineStore("votos", {

  state:()=> ({
    subCategorias:'',
    checker:false,
    VotosTable: [
      {
          categoria: 'A1. Campaña Integral de promoción de producto (Aspid Oro y Plata)',
          progreso: '1%',
          delete: ''
      },
      {
          categoria: 'A2. Reuniones con profesionales sanitarios (Aspid oro y Plata)',
          progreso: '-',
          delete: '',

      },
      {
          categoria: 'B1. Packaging',
          progreso: '100%',
          delete: '',
      },
      {
          categoria: 'B2. Telemedicina',
          progreso: '5%',
          delete: '',
      },
      {
          categoria: 'C1 - Programas de Formación a Profesionales (presencial) (Aspid oro y Plata)',
          progreso: '0%',
          delete: '',
      },
      {
          categoria: 'C2. Reuniones con profesionales sanitarios (Aspid oro y Plata)',
          progreso:'6%',
          delete: '',
      },
      {
          categoria: 'D1. Packaging',
          progreso: '-',
          delete: '',
      },
      {
          categoria: 'D2. Telemedicina',
          progreso: '6%',
          delete: '',
      },
      {
          categoria: 'E1 - Programas de Formación a Profesionales (presencial) (Aspid oro y Plata)',
          progreso: '-',
          delete: '',
      },
      {
          categoria: 'E2. Reuniones con profesionales sanitarios (Aspid oro y Plata)',
          progreso: '6',
          delete: '',
      },
      {
          categoria: 'F1. Packaging',
          progreso: '27%',
          delete: '',
      },
      {
          categoria: 'F2. Telemedicina',
          progreso: '159%',
          delete: '',
      },
      {
          categoria: 'G1 - Programas de Formación a Profesionales (presencial) (Aspid oro y Plata)',
          progreso: '27%',
          delete: '',
      },
    ]
  }),
  // getters: {
  //   getSubcategoria:  (state) => state.VotosTable,

  // },
  actions: {

    async getCategorias() {
      try {
        const res = await api.get("http://127.0.0.1:8000/api/categorias");
        if (res.status >= 200 && res.status <= 400 ) {
          console.log(res);
          this.juradosTest = [];

          res.data.forEach(categoria => {
            let auxObject = {
              categoria: 'G1 - Programas de Formación a Profesionales (presencial) (Aspid oro y Plata)',
              progreso: '27%',
              delete: '',
            };
            this.juradosTest.push(auxObject);
          });

        }
      } catch(error) {
        console.log(error)
      }
    },
  }

});
