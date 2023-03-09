import { defineStore } from "pinia";
import { api } from 'boot/axios'


export const useVotosStore = defineStore("votos", {

  state:()=> ({
    subCategoriaResultTab:'',
    idCategoriaResultTab: 0,
    porcentaje_desiertoResultTab:'',
    votos_desiertoResultTab:'',
    subCategoriasArr: [],
    subcategoriasMutationJuradoEnabled: [],
    subCategoriasArrAux: [],
    id_subcategoria : 0,
    id_obraFromSubCategoria: 0,
    checker:false,
    votaciones: ['Aspid', 'Aspid Plata', 'Aspid Oro', 'Aspid Platino'],
    votacion: '',
    nombreVotacion: '',
    selloActivate: '', // activar el sello
    resultVotoJurado: [
    // {
    //     jurado: 'Manuel Carrasco',
    //     empresa: 'Apple Tree',
    //     voto: 'Para prevenir el suicidio, hay que hablar de el',
    // },
    // {
    //     jurado: 'Roger Bosch',
    //     empresa: 'Xolomon Tree',
    //     voto: '-',
    // },
    // {
    //   jurado: 'Manuel Carrasco',
    //   empresa: 'Apple Tree',
    //   voto: 'Para prevenir el suicidio, hay que hablar de el',
    // },
    // {
    //     jurado: 'Roger Bosch',
    //     empresa: 'Univelver',
    //     voto: 'FORO I+D',
    // },
    // {
    //   jurado: 'Joaquin Fernández',
    //   empresa: 'Univelver',
    //   voto: 'Para prevenir el suicidio, hay que hablar de el',
    // },
    ],
    resultStore: [
    //   {
    //       name: 'Para prevenir el suicidio, hay que hablar de el',
    //       voto: 6,
    //       premio: '-',
    //   },
    //   {
    //       name: 'FORO I+D',
    //       voto: 5,
    //       premio: '',
    //   },
    //   {
    //       name: 'Immunofitness',
    //       voto: 1,
    //       premio: '',
    //   },
    //   {
    //       name: 'Hospitales Humanos',
    //       voto: '-',
    //       premio: ''
    //   },
    //   {
    //     name: 'El primer concierto en una farmacia, por Acofarma',
    //     voto: '-',
    //     premio: ''
    // },
    // {
    //     name: 'La Huella by Novartis',
    //     voto: '-',
    //     premio: ''
    // },
  ],
    VotosTable: []
  }),
  // getters: {
  //   getSubcategoria:  (state) => state.VotosTable,

  // },
  actions: {

    async getCategoriasPorcentaje() {
      try {
        console.log('==== get categorias ====');
        const res = await api.get("http://127.0.0.1:8000/api/admin/ronda/subcat-porcentajes");
        if (res.status >= 200 && res.status <= 400 ) {
          console.log(res);
          if (res.status >=200 && res.status <= 400) {
            res.data.forEach(categoria => {
              let auxObject = {
                categoria: `${categoria.area}${categoria.codigo} - ${categoria.descripcion}`,
                progreso: Math.floor(categoria.calculo) + '%',
                delete: '',
                id_subcategoria: categoria.id_subcategoria,
              };
              this.VotosTable.push(auxObject);
            });
          }
        }
      } catch(error) {
        console.log(error)
      }
    },

    ////////////////////////////////////////////////////////////////////////////
     // done
    async deleteSubCategoriesVotaciones(rowToDelete){
      try {
        console.log(' ==== delete subcat-votaciones ====');
        console.log(rowToDelete.id_subcategoria)
        const res = await api.delete(`http://127.0.0.1:8000/api/admin/ronda/subcat-votaciones/${rowToDelete.id_subcategoria}`)
        console.log(res);

        // console.log(this.VotosTable);

        if (res.status >= 200 && res.status <= 400) {
          // this.VotosTable = this.VotosTable.filter(item => item.id_subcategoria != rowToDelete.id_subcategoria)
          console.log(this.VotosTable);
        }
      }catch(error) {
        console.log(error);
      }
    },

    ////////////////////////////////////////////////////////////////////////////
     // done
    async getSubCategoriasIndependent(){
      try {
        console.log(' ==== get categorias independent ====');
        this.subCategoriasArrAux = [];
        const res = await api.get('http://127.0.0.1:8000/api/admin/subcategorias');
        console.log(res);

        if (res.status >= 200 && res.status <= 400) {
          res.data.forEach(categoria => {
            let auxObject = {
              Categoria: `${categoria.id_area}${categoria.codigo} - ${categoria.descrip}`,
              id: categoria.id
            }
            this.subCategoriasArrAux.push(auxObject);
          })
          this.subCategoriasArr = this.subCategoriasArrAux;
          // console.log(this.subCategoriasArrAux);
        }
      }catch(error) {
        console.log(error);
      }
    },

    ////////////////////////////////////////////////////////////////////////////
     // done
    async getSubCategoriasAuxFromSelect(tipoJurado){
      try {
        console.log(' ==== get aux subcategorieas mutation independent ====');
        const res = await api.get(`http://127.0.0.1:8000/api/admin/aux-subcategorias/${tipoJurado}`);
        console.log(res);
        console.log(this.subCategoriasArrAux);


        if (res.status >= 200 && res.status <= 400) {

          if (res.data.length > 0) {

            this.subcategoriasMutationJuradoEnabled = [];
            this.subCategoriasArr = this.subCategoriasArrAux;

            for (let i = 0; i < res.data.length; i++) {
              for (let j = 0; j < this.subCategoriasArr.length; j++) {
                if (res.data[i] == this.subCategoriasArr[j].id) {
                  this.subcategoriasMutationJuradoEnabled.push(this.subCategoriasArr[j])
                  this.subCategoriasArr = this.subCategoriasArr.filter(subcat => subcat.id != res.data[i]);
                }
              }
            }
            console.log(this.subCategoriasArr);

          }else {
            this.subcategoriasMutationJuradoEnabled = [];
            this.subCategoriasArr = this.subCategoriasArrAux;
            console.log(this.subcategoriasMutationJuradoEnable);
          }
        }
      }catch(error) {
        console.log(error);
      }
    },

    ////////////////////////////////////////////////////////////////////////////
     // done
    async putSubCategoriasAux(tipoJurado, idEdicion){
      try {
        console.log(' ==== get aux subcategorieas configuration ====');
        let idArr = [];
        this.subcategoriasMutationJuradoEnabled.forEach(subcat => idArr.push(subcat.id))
        console.log(idArr);
        const res = await api.put(`http://127.0.0.1:8000/api/admin/aux-subcategorias`, {
          id_tipojurado: tipoJurado,
          id_edicion: idEdicion,
          id_subcategoria: idArr
        });
        console.log(res);

        if (res.status >= 200 && res.status <= 400) {

        }
      }catch(error) {
        console.log(error);
      }
    },

    ////////////////////////////////////////////////////////////////////////////
     // done
    async getSubCategoriasFromResult() {
      try {
        console.log(' ==== get subcategorieas from result ====');
        const res = await api.get(`http://127.0.0.1:8000/api/admin/ronda/subcat-result`);
        console.log(res);

        this.subCategoriasArrAux = [];
        if (res.status >= 200 && res.status <= 400) {
          res.data.forEach(categoria => {
            let auxObject = {
              Categoria: `${categoria.codigo} - ${categoria.titulo}`,
              id: categoria.id_subcategoria,
              information: categoria.informacion,
              desierto: categoria.desierto,
              tipo_desierto: categoria.tipo_desierto,
              empate: categoria.empate,
              tipoEmpate: categoria.tipoEmpate,
              porcentaje_desierto: categoria.porcentaje_desierto,
              votos_desierto: categoria.votos_desierto
            }
            this.subCategoriasArrAux.push(auxObject);
          })
          this.subCategoriasArr = this.subCategoriasArrAux;

          console.log(this.subCategoriasArr)
        }
      }catch(error) {
        console.log(error);
      }
    },

    ////////////////////////////////////////////////////////////////////////////
     //
     async putOtorgarPremio() {
      try {
        console.log(' ==== put subcategorieas from result ====');
        console.log(this.id_obraFromSubCategoria)
        const res = await api.put(`http://127.0.0.1:8000/api/admin/ronda/premio`, {
          id: this.id_obraFromSubCategoria,
          premio: this.votacion,
          nombre_premio: this.nombreVotacion
        });
        console.log(res);

        if (res.status >= 200 && res.status <= 400) {
          this.votacion = '';
          this.nombreVotacion = '';
          this.selloActivate = res.data[0];
        }
      }catch(error) {
        console.log(error);
      }
    },

    ////////////////////////////////////////////////////////////////////////////
     // done
     async getVotosJuradoResult () {
      try {
        console.log(' ==== getVotosJuradoResult from result ====');
        console.log(this.id_subcategoria)
        const res = await api.get(`http://127.0.0.1:8000/api/admin/ronda/jurados-result/${this.id_subcategoria}`, {
          id: this.id_subcategoria,
        });

        if (res.status >= 200 && res.status <= 400) {
          console.log(res);


          res.data.forEach(item => {
            if (res.data.voto == 'od'|| res.data.voto == 'dd' ) {
              let auxObject = {
                jurado: item.nombre,
                empresa: item.empresa,
                voto: '-'
              }
              this.resultVotoJurado.push(auxObject);

            }else {
              let auxObject = {
                jurado: item.nombre,
                empresa: item.empresa,
                voto: item.titulo,
              }
              this.resultVotoJurado.push(auxObject);
            }

          })


        }
      }catch(error) {
        console.log(error);
      }
    },


    async putDataInResultTab(row) {
      this.subCategoriaResultTab = row.Categoria;
      this.porcentaje_desiertoResultTab = row.porcentaje_desierto;
      this.votos_desiertoResultTab = row.votos_desierto;
      this.idCategoriaResultTab = row.id;
      this.checker = true;
      let iteratorChecker = true;

      this.resultStore = [];

      row.information.forEach(item =>  {

        // console.log(item);
        if (item.premio != null && iteratorChecker == true) {
          console.log("premio", item.premio)
          this.selloActivate = item.premio;
          iteratorChecker = false;
          console.log(this.selloActivate);
        }

        let resultAuxObject = {
          name: item.titulo,
          voto: item.total,
          premio: item.premio,
          id: item.id,
          id_cod_particip: item.id_cod_particip,
          procentaje_desierto : row.porcentaje_desierto,
          votos_desierto : row.votos_desierto,
          nombre_premio : item.nombre_premio,
          action: '',
        }
        this.resultStore.push(resultAuxObject);
      })

      this.id_subcategoria = row.id;



      console.log(this.resultStore);
    }
  }

});
