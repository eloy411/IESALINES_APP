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
        console.log('==== get categorias ====');
        const res = await api.get("http://127.0.0.1:8000/api/subcategorias");
        if (res.status >= 200 && res.status <= 400 ) {
          console.log(res);

          console.log('==== get progress ====');
          const responseProgress = await api.get("http://127.0.0.1:8000/api/ronda/subcat-porcentaje");
          console.log(responseProgress);
          if (res.status >=200 && res.status <= 400) {
            res.data.forEach(categoria => {
              let auxObject = {
                categoria: `${categoria.id_area}${categoria.codigo} - ${categoria.descrip}`,
                progreso: '27%',
                delete: '',
              };
              this.VotosTable.push(auxObject);
            });
          }
        }
      } catch(error) {
        console.log(error)
      }
    },

    async deleteSubCategoriesVotaciones(rowToDelete){
      try {
        console.log(' ==== delete subcat-votaciones ====');
        console.log(rowToDelete)
        const res = await api.delete('http://127.0.0.1:8000/api/ronda/subcat-votaciones',{
          id_cod_particip: ""
        });
        console.log(res);

        if (res.status >= 200 && res.status <= 400) {

        }
      }catch(error) {
        console.log(error);
      }
    },
  }

});
