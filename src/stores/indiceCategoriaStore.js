import { defineStore} from 'pinia';
import { ref } from "vue";
import { api } from 'boot/axios'
import {useAuthStore} from './authStore';

export const useIndiceStore = defineStore("categoria", {

  state: ()=> ({

    categoriaSeleccionada:'',
    
    
    subcategory:'A1 - Campaña integral de promoción de producto (Aspid Oro y Plata)',
    categoriasAux: [],

    leyenda:'En esta categoría se encuadran obras relacionadas directamente con comunicación de productos farmacéuticos o sanitarios de prescripción bajo todo tipo de soportes o canales. Para participar en esta categoría se debe presentar como mínimo tres elementos diferentes o canales diferentes de comunicación.',
    subcatId:'',
    checker:false,
    // Contenido tablas de prueba.
    categoriasArr: [
      {
        Categoria: '',
        Subcategorias:[]
      }

    ],

    obrasArr:[{
      Obra:'',
      Thumbnail:''
    }]

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
        this.categoriasArr=[];
        if (res.status >= 200 && res.status <= 400) {
          console.log(res.data);
          res.data.forEach(categoria => {
            let auxObject = {
              Categoria: `${categoria.id} - ${categoria.descrip}`,
              Subcategorias: []
            }
            categoria.subcategorias.forEach(subcategoria => {
          
             
                const nameSubcat=`${subcategoria.id_area}${subcategoria.codigo} - ${subcategoria.descrip}`
                const subcatLeyenda=`${subcategoria.leyenda}`
                const subcatId=`${subcategoria.id}`
                const Subcategoria=[nameSubcat , subcatLeyenda, subcatId]
              
              // this.leyenda=subcategoria.leyenda;
              // console.log("LEYENDA STORE ---------" +Subcategoria);
              auxObject.Subcategorias.push(Subcategoria );
            })
            this.categoriasArr.push(auxObject);
          })

          // console.log("DSADADA-->",this.categoriasArr)
        }
      } catch (error) {
        console.log(error);
      }
    },

    async getObrasFromSubcat(){
      try {
        console.log(' ==== get Obras from Subcategoria ====');
        console.log("id subcategoriaaaaaa"+this.subcatId);
        const res = await api.get(`http://localhost:8001/api/obras/${this.subcatId}`);
        console.log(res);
        if (res.status >= 200 && res.status <= 400) {
          console.log(res.data)

          res.data.forEach(obra=> {
            const auxObject ={
              Obra:`${obra.titulo}`,
              Thumbnail:`${obra.media.cabecera}`,
            }
            this.obrasArr.push(auxObject);
          })
        }
      } catch (error) {
        console.log(error);
      }
      },
    

  } 
})
