import { defineStore} from 'pinia';
import { ref } from "vue";
import { api } from 'boot/axios'
import {useAuthStore} from './authStore';

export const useIndiceStore = defineStore("categoria", {

  state: ()=> ({

    categoriaSeleccionada:'',
    
    
    subcategory:[],
    categoriasAux: [],


    checker:false,
    // Contenido tablas de prueba.
    categoriasArr: [
      {
        Categoria: '',
        Subcategorias:[{
        }]
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
        const res = await api.get(`http://localhost:8001/api/categorias/${userId}`);
        console.log(res);
        console.log("HOLA SUBCATS"+res.data[0].subcategorias[0].descrip);
        if (res.status >= 200 && res.status <= 400) {

          console.log(res.data);


          res.data.forEach(categoria => {
            let auxObject = {
              Categoria: `${categoria.id} - ${categoria.descrip}`,
              Subcategorias: []
            }
            categoria.subcategorias.forEach(subcategoria => {
              // let auxObject2 = {
              //   Subcategoria: `${subcategoria.id_area}${subcategoria.codigo} - ${subcategoria.descrip}`,
              // }
              auxObject.Subcategorias.push(`${subcategoria.id_area}${subcategoria.codigo} - ${subcategoria.descrip}`);
            })
            this.categoriasArr.push(auxObject);
          })

          console.log("DSADADA-->",this.categoriasArr)
        }
      } catch (error) {
        console.log(error);
      }
    },
  } 
})
