import { defineStore} from 'pinia';
import { ref } from "vue";
import { api } from 'boot/axios'
import {useAuthStore} from './authStore';

export const useIndiceStore = defineStore("categoria", {

  state: ()=> ({

    subcategory:'A1. Campaña integral de proomción de productos.',
    checker:false,
    // Contenido tablas de prueba.
    categoriasArr: [
      {
        Categoria: '',
        Subcategorias:[]
      }

    ]
}),
 actions: {
    async getSubcategorias(){
      try {
        const authStore = ref(useAuthStore()) // get access to the authStore
        const userId = authStore.value.userId // get the userId from authStore
        console.log("ID"+userId);
        console.log(' ==== get categorias votaciones ====');
        const res = await api.get(`http://127.0.0.1:8001/api/categorias/${userId}`);
        console.log(res);

        if (res.status >= 200 && res.status <= 400) {
          res.data.forEach(categoria => {
            // categoria.subcategorias.forEach(subcategoria => {
            //   let auxObject2 = {
            //     Subcategorias: `${subcategoria.id_area}${subcategoria.id} - ${subcategoria.descrip}`,
            //   }
            //   this.Subcategorias.push(auxObject2);
            // })
            let auxObject = {
              Categoria: `${categoria.id} - ${categoria.descrip}`,
            }
            this.categoriasArr.push(auxObject);
          })
        }
      }catch(error) {
        console.log(error);
      }
    },
  },
})
