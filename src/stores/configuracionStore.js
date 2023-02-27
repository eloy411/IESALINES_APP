import { defineStore } from "pinia";
import { api } from 'boot/axios'


export const useVotosStore = defineStore("votos", {

  state:()=> ({


  }),
  // getters: {
  //   getSubcategoria:  (state) => state.VotosTable,

  // },
  actions: {

    // async getCategorias() {
    //   try {
    //     console.log('==== get categorias ====');
    //     const res = await api.get("http://127.0.0.1:8000/api/subcategorias");
    //     if (res.status >= 200 && res.status <= 400 ) {
    //       console.log(res);

    //       console.log('==== get progress ====');
    //       const responseProgress = await api.get("http://127.0.0.1:8000/api/ronda/subcat-porcentaje");
    //       console.log(responseProgress);
    //       if (res.status >=200 && res.status <= 400) {
    //         res.data.forEach(categoria => {
    //           let auxObject = {
    //             categoria: `${categoria.id_area}${categoria.codigo} - ${categoria.descrip}`,
    //             progreso: '27%',
    //             delete: '',
    //           };
    //           this.VotosTable.push(auxObject);
    //         });
    //       }
    //     }
    //   } catch(error) {
    //     console.log(error)
    //   }
    // },


  }

});
