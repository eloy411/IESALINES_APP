import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from 'boot/axios'



export const useIndiceStore = defineStore("categoria", {

  state: ()=> ({

    subcategory:'A1. Campaña integral de proomción de productos.',
    checker:false,
    // Contenido tablas de prueba.
    categoriasArr: [
      {
        Categoria: 'A. Obras relacionada con productos de Prescripción ',
        Subcategorias:['A1. Campaña integral de proomción de productos.', 'A2. Materiales impresos de visita.',' A3. Materiales digitales de visita.',' A4. Anuncios en prensa.',' A5. Audiovisuales sobre producto.','A6. Comunicación digital.']
      },
      {
        Categoria: 'B. Obras relacionada con productos de autocuidado',
        Subcategorias:['B1. Campaña integral de proomción de productos.', 'B2. Materiales impresos de visita.']
      },
      {
        Categoria: 'C. Medical Marketing',
        Subcategorias:['C1. Campaña integral de proomción de productos.', 'C2. Materiales impresos de visita.']
      },
      {
        Categoria: 'D. e-Salud',
        Subcategorias:['D1. Campaña integral de proomción de productos.', 'D2. Materiales impresos de visita.']
      },
      {
        Categoria: 'E. Campañas institucionales o corporativas de empresa',
        Subcategorias:['E1. Campaña integral de proomción de productos.', 'E2. Materiales impresos de visita.']
      },
      {
        Categoria: 'F. Campañas sobre enfermedades o patologías',
        Subcategorias:['F1. Campaña integral de proomción de productos.', 'F2. Materiales impresos de visita.']
      },
      {
        Categoria: 'G. Veterinaria',
        Subcategorias:['G1. Campaña integral de proomción de productos.', 'G2. Materiales impresos de visita.',]
      },
      {
        Categoria: 'H. Relaciones Públicas y Comunicación',
        Subcategorias:['H1. Campaña integral de proomción de productos.', 'H2. Materiales impresos de visita.']
      },
      {
        Categoria: 'I. Autopublicidad de agencia',
        Subcategorias:['I1. Campaña integral de proomción de productos.', 'I2. Materiales impresos de visita.']
      },
      {
        Categoria: 'J. Diseño',
        Subcategorias:['J1. Campaña integral de proomción de productos.', 'J2. Materiales impresos de visita.',' J3. Materiales digitales de visita.',' J4. Anuncios en prensa.',' J5. Audiovisuales sobre producto.','J6. Comunicación digital.']
      },
      {
        Categoria: 'K. Innovación',
        Subcategorias:['K1. Campaña integral de proomción de productos.', 'K2. Materiales impresos de visita.',' K3. Materiales digitales de visita.',' K4. Anuncios en prensa.',' K5. Audiovisuales sobre producto.','K6. Comunicación digital.']
      },

    ]
}),
//  actions: {
//     async getSubCategoriasIndependent(){
//       try {
//         console.log(' ==== get categorias independent ====');
//         const res = await api.get('http://127.0.0.1:8000/api/subcategorias');
//         console.log(res);

//         if (res.status >= 200 && res.status <= 400) {
//           res.data.forEach(categoria => {
//             let auxObject = {
//               Categoria: `${categoria.id_area}${categoria.codigo} - ${categoria.descrip}`,
//             }
//             this.subcategoriesArr.push(auxObject);
//           })
//         }
//       }catch(error) {
//         console.log(error);
//       }
//     },
//   }
})
