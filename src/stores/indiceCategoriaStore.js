import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from "boot/axios";
import { useAuthStore } from "./authStore";

export const useIndiceStore = defineStore("categoria", {
  state: () => ({
    categoriaSeleccionada: "",

    subcategory:
      "A1 - Campaña integral de promoción de producto (Aspid Oro y Plata)",
    categoriasAux: [],

    leyenda:
      "En esta categoría se encuadran obras relacionadas directamente con comunicación de productos farmacéuticos o sanitarios de prescripción bajo todo tipo de soportes o canales. Para participar en esta categoría se debe presentar como mínimo tres elementos diferentes o canales diferentes de comunicación.",
    subcatId: "",
    checker: false,
    // Contenido tablas de prueba.
    categoriasArr: [
      {
        Categoria: "",
        Subcategorias: [],
      },
    ],

    obrasArr:  [
      // {
      //   id: "",
      //   Obra: "",
      //   mediaArr: [],
      // },
    ],
  }),
  actions: {
    async getSubcategorias() {
      try {
        const authStore = ref(useAuthStore()); // get access to the authStore
        const userId = authStore.value.userId; // get the userId from authStore
        console.log("ID" + userId);
        console.log(" ==== get categorias votaciones ====");
        const res = await api.get(
          `http://localhost:8000/api/jurado/categorias/`
        );
        console.log(res);
        this.categoriasArr = [];
        if (res.status >= 200 && res.status <= 400) {
          const categoriasArr = res.data.map((categoria) => {
            const subcategorias = categoria.subcategorias.map(
              (subcategoria) => {
                const nameSubcat = `${subcategoria.id_area}${subcategoria.codigo} - ${subcategoria.descrip}`;
                const subcatLeyenda = `${subcategoria.leyenda}`;
                const subcatId = `${subcategoria.id}`;
                return [nameSubcat, subcatLeyenda, subcatId];
              }
            );
            return {
              Categoria: `${categoria.id} - ${categoria.descrip}`,
              Subcategorias: subcategorias,
            };
          });
          this.categoriasArr = categoriasArr;
        }
        console.log(this.categoriasArr);
        return this.categoriasArr;

        // console.log("DSADADA-->",this.categoriasArr)
      } catch (error) {
        console.log(error);
      }
    },

    async getObrasFromSubcat() {
      try {
        console.log(" ==== get Obras from Subcategoria ====");
        console.log("id subcategoriaaaaaa" + this.subcatId);
        const res = await api.get(
          `http://localhost:8000/api/jurado/obras/${this.subcatId}`
        );
        console.log(res);
        if (res.status >= 200 && res.status <= 400) {
          this.obrasArr = [];
          console.log(res.data);

          res.data.forEach((obra) => {
            const auxObject = {
              id: obra.id,
              Obra: obra.titulo,
              imagenes: obra.media.imagenes,
              thumbnail: obra.media.cabecera,
              videos: obra.media.videos
            };
            this.obrasArr.push(auxObject);
          });
          console.log(
            "eloyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"
          );
          console.log(this.obrasArr);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
