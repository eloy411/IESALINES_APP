import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from 'boot/axios'



export const useresultStore = defineStore("result", {

  state: ()=> ({

      // Contenido tablas de prueba.

      name: '',
      voto: '',
      premio: '',
      resultStore: [
      {
          name: 'Frozen Yogurt',

      },
      {
          name: 'Ice cream sandwich',
      },
      {
          name: 'Prueba',
      },
      {
          name: 'Eclair',
      },
      ],
      resultSubcateogrias: [
        {
          Categoria: 'A1. Campaña integral de Aspid plata y no se que mas',
        },
        {
          Categoria: 'A1. Campaña integral de Aspid plata y no se que mas',
        },
        {
          Categoria: 'A1. Campaña integral de Aspid plata y no se que mas',
        },
        {
          Categoria: 'A1. Campaña integral de Aspid plata y no se que mas',
        },
        {
          Categoria: 'A1. Campaña integral de Aspid plata y no se que mas',
        },
        {
          Categoria: 'A1. Campaña integral de Aspid plata y no se que mas',
        },


      ]
  }),
  actions: {
    async getSubcategorias() {
      try {
        const res = await api.get("http://127.0.0.1:8000/api/jurado");
        if (res.status >= 200 && res.status <= 400 ) {
          console.log(res);
          this.juradosTest = [];

          res.data.forEach(jurado => {
            let auxObject = {
              Nombre: jurado.Nombre,
              Empresa: jurado.Empresa,
              Tipo: jurado.tipo_jurado,
              Email: jurado.Email,
              Aceptación: '12/5/2002 12:45h',
              id: jurado.id
            };
            this.juradosTest.push(auxObject);
          });

        }
      } catch(error) {
        console.log(error)
      }
    }
  }
})
