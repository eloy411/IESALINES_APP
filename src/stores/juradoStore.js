import { defineStore } from "pinia";
import { api } from "boot/axios";

export const useJuradoStore = defineStore("jurados", {
  state: () => ({
    Nombre: "",
    juradoDataLoaded: false,
    deleteDataConfig: false,
    Tipo: "",
    Email: "",
    Aceptacion: "",
    Empresa: "",
    Cargo: "not cargo",
    Bio: "",
    id: 0,
    token: '',
    tipoJuradoChecker: false, // variable for the conditions in "EdicionJurado". To prevent two request at getJuradoTipo()
    notification: "",
    optionsTipoJurado: [],
    juradosRonda: [],
    mailDestinatario:"",
    text: '',
    asunto: '',
    checker:false,
    dataInvitacion: [],
    juradosTest: []
  }),
  getters: {
    getJuradosTest: (state) => state.juradosTest,
  },
  actions: {
    // done
    async getJurados() {
      try {
        console.log('==== get jurados ====');
        const res = await api.get("http://127.0.0.1:8000/api/jurado");
        if (res.status >= 200 && res.status <= 400) {
          console.log(res);
          this.juradosTest = [];

          res.data.forEach((jurado) => {
            let auxObject = {
              Nombre: jurado.Nombre,
              Empresa: jurado.Empresa,
              Tipo: jurado.tipo_jurado,
              Email: jurado.Email,
              Aceptación: jurado.aceptacion,
              id: jurado.id,
              Bio: jurado.biografia,
              aceptacion: jurado.aceptacion,
            };
            this.juradosTest.push(auxObject);
          });
          this.juradoDataLoaded = true;

        }
      } catch (error) {
        console.log(error);
      }
    },

    ////////////////////////////////////////////////////////////////////////////

    // done
    async descargaCSV() {
      try {
        console.log('==== get descarga csv ====');
        await api({
          url: "http://127.0.0.1:8000/api/jurado/descarga-csv",
          method: "GET",
          responseType: "blob", // Important
        }).then((response) => {
          if (response.status >= 200 && response.status < 400) {
            const href = URL.createObjectURL(response.data);

            // create "a" HTML element with href to file & click
            const link = document.createElement("a");
            link.href = href;
            link.setAttribute("download", "file.csv"); //or any other extension
            document.body.appendChild(link);
            link.click();

            // clean up "a" element & remove ObjectURL
            document.body.removeChild(link);
            URL.revokeObjectURL(href);
          } else {
            console.log("Status is not 200 -->", response.status);
          }
        });
        // const res = await api.get("http://127.0.0.1:8000/api/descarga-csv");
        if (res.status >= 200 && res.status <= 400) {
          console.log(res);
        }
      } catch (error) {
        console.log(error);
      }
    },

    ////////////////////////////////////////////////////////////////////////////
     // done
    async getJuradosRonda() {
      try {
        const res = await api.get("http://127.0.0.1:8000/api/jurado");
        console.log(' === ronda-jurado =====')
        if (res.status >= 200 && res.status < 400) {
          this.juradosRonda = [];
          console.log(res.data);
          res.data.forEach((jurado) => {
            let auxObject = {
              nombre: [jurado.Nombre, jurado.Empresa],
              tipo: jurado.tipo_jurado,
              progreso: "100%",
              último_Acceso: "12/5/2002 12:45h",
              recordatorio: "",
              deleteVotos: "",
            };
            this.juradosRonda.push(auxObject);
          });
        }
      } catch (error) {
        console.log(error);
      }
    },

    async getJuradoPorcentaje() {
      try {
        const res = await api.get("http://127.0.0.1:8000/api/ronda/jurado-porcentaje");
        console.log(' === porcentaje ronda-jurado =====')
        if (res.status >= 200 && res.status < 400) {
          console.log(res.data);
          this.juradosRonda = [];
          res.data.forEach((item) => {
            let auxObject = {
              nombre: item.nombre,
              tipo: this.optionsTipoJurado[item.id_tipojurado],
              progreso: item.progreso,
              Ultimo_Acceso: item.ultimoAcceso,
              id: item.id,
            }
            this.juradosRonda.push(auxObject);

          })

          console.log(this.juradosRonda);

        }
      } catch (error) {
        console.log(error);
      }
    },

    ////////////////////////////////////////////////////////////////////////////

    // done
    async postSteperJurado() {
      try {
        console.log(' === steeperJurado ===')
        const res = await api.post("http://127.0.0.1:8000/api/jurado/email",{
          email: this.Email
        });
        if (res.status >= 200 && res.status < 400) {
          console.log(res.data);
          this.Nombre = res.data.nombre;
          this.Tipo = this.optionsTipoJurado[res.data.id_tipojurado];
          this.Cargo = res.data.cargo;
          this.Empresa = res.data.empresa ;
        }
      } catch (error) {
        console.log(error);
      }
    },


    ////////////////////////////////////////////////////////////////////////////
    // done
    async postJurado(id_edicion, invitacion=false) {
      try {

        for (let i = 0; i < this.optionsTipoJurado.length; i++)  {
          if (this.optionsTipoJurado[i] == this.Tipo) {
            this.Tipo = i + 1
          }
        }

        console.log(this.Tipo, id_edicion);
        console.log('==== post jurado ====');
        const response = await api.post(`http://127.0.0.1:8000/api/jurado`, {
          email: this.Email,
          id_tipojurado: this.Tipo,
          id_edicion: id_edicion,
          nombre: this.Nombre,
          cargo: this.Cargo,
          empresa: this.Empresa,
        });

        if (response.status >= 200 && response.status < 400) {
          console.log(response)
          this.id = response.data.id;
          this.notification = true;
          this.juradosTest.push({
            Nombre: this.Nombre,
            Empresa: this.Empresa,
            Tipo: this.Tipo,
            Email: this.Email,
            Aceptación: this.Aceptación,
          });
        } else {
          this.notification = false;
        }
        if (invitacion == false) {
          this.Nombre = "";
          this.Tipo = "";
          this.Email = "";
          this.Cargo = "";
          this.Empresa = "";
        }
      } catch (error) {
        console.log(error);
      }
    },

    ////////////////////////////////////////////////////////////////////////////

    // done
    async deleteJurado(rowToDelete) {
      console.log(rowToDelete);
      try {
        console.log()
        const response = await api.delete(
          `http://127.0.0.1:8000/api/jurado/${rowToDelete.id}`,
          {
            id: rowToDelete.id,
          }
        );
        if (response.status >= 200 && response.status < 400) {
          console.log(response)
          this.juradosTest = this.juradosTest.filter(value => value.id != rowToDelete.id);
          this.notification = true;
        } else {
          this.notification = false;
        }
      } catch (error) {
        console.log(error);
      }
    },

    ////////////////////////////////////////////////////////////////////////////

    // done
    async postJuradoGetTokenUrlAceptacionInvitacion() {
      try {
        console.log(" == post Jurado Aceptacion URL invitacion ==");
        console.log(this.id, this.Email, this.asunto, this.text)
        const response = await api.post(
          `http://127.0.0.1:8000/api/email`, {
            emailtomsg:this.Email,
            id:this.id,
            asuntomsg:this.asunto,
            textomsg:this.text,
            typemsg:"invitacion"
          }
        );

        if (response.status >= 200 && response.status < 400) {
          console.log(response);
        } else {
          this.notification = false;
        }
      } catch (error) {
        console.log(error);
      }
    },


    // done
    async putJuradoAceptacionmEmail() {
      try {
        console.log(" == post Jurado Aceptacion invitacion ==");
        const response = await api.put(
          `http://127.0.0.1:8000/api/jurado/aceptacion/${this.token}`, {
            nombre: this.Nombre,
            nom_imagen: "imagenruat",
            cargo: this.Cargo,
            empresa: this.Empresa,
            biografia: this.Bio
          }
        );

        if (response.status >= 200 && response.status < 400) {
          console.log(response);
          this.tokenMail = '';
          this.urlTokenMail = '';
        } else {
          this.notification = false;
        }
      } catch (error) {
        console.log(error);
      }
    },

    ////////////////////////////////////////////////////////////////////////////
    // done
    async putJurado() {
      console.log('==== put jurado ====');
      for (let i = 0; i < this.optionsTipoJurado.length; i++)  {
        if (this.optionsTipoJurado[i] == this.Tipo) {
          this.Tipo = i + 1
        }
      }
      try {
        const response = await api.put(
          `http://127.0.0.1:8000/api/jurado/${this.id}`,
          {
            id: this.id,
            nombre: this.Nombre,
            nom_imagen: "user avatar",
            email: this.Email,
            id_tipojurado: this.Tipo,
            cargo: this.Cargo,
            empresa: this.Empresa,
            biografia: this.Bio,
          }
        );

        console.log(response);
        if (response.status >= 200 && response.status < 400) {
          window.location.href = "http://127.0.0.1:9000/backoffice/jurado"
          this.notification = true;
        } else {
          this.notification = false;
        }
      } catch (error) {
        console.log(error);
      }
    },

    ////////////////////////////////////////////////////////////////////////////
    // done
    async getJuradoTipo() {
      try {
        const response = await api.get(`http://127.0.0.1:8000/api/jurado/tipo`);
        console.log(response);
        if (response.status >= 200 && response.status < 400) {
          let arrAux = [];
          response.data.forEach(item => {
            arrAux.push(item.nombre)
          })
          console.log(arrAux)

          this.optionsTipoJurado = arrAux;
          this.tipoJuradoChecker = true;
          console.log(this.optionsTipoJurado);
          this.notification = true;
        } else {
          this.notification = false;
        }
      } catch (error) {
        console.log(error);
      }
    },

    ////////////////////////////////////////////////////////////////////////////
    // done
    async putConfigSubcategorias() {
      try {
        const response = await api.get(
          `http://127.0.0.1:8000/api/config/popup`
        );
        if (response.status >= 200 && response.status < 400) {
          this.options = response.data;
          this.notification = true;
        } else {
          this.notification = false;
        }
      } catch (error) {
        console.log(error);
      }
    },

    ////////////////////////////////////////////////////////////////////////////

    // done
    async putConfigLimitVotaciones(data) {
      try {
        for (let i = 0; i < this.optionsTipoJurado.length; i++)  {
          if (this.optionsTipoJurado[i] == data.tipo) {
            this.Tipo = i + 1
          }
        }
        const response = await api.put(
          `http://127.0.0.1:8000/api/config/limit-votacion`, {
            id: this.Tipo,
            limit_date: data.fechaReunion
          }
        );
        if (response.status >= 200 && response.status < 400) {
          console.log(response)
          this.options = response.data;
          this.notification = true;
        } else {
          this.notification = false;
        }
      } catch (error) {
        console.log(error);
      }
    },

    ////////////////////////////////////////////////////////////////////////////
    // done

    async putConfigPopUp(data) {
      try {
        console.log('==== put config pop Up ====');
        for (let i = 0; i < this.optionsTipoJurado.length; i++)  {
          if (this.optionsTipoJurado[i] == data.tipo) {
            this.Tipo = i +1;
            break
          }else{
            this.Tipo = 0
          }
        }
        console.log(data)
        console.log(this.Tipo)
        const res = await api.put("http://127.0.0.1:8000/api/config/popup", {
          tipo: data.tipoPopUp,
          id_tipojurado: this.Tipo,
          id_edicion: data.idEdicion,
          titulo: data.titulo,
          subtitulo: data.subtitulo,
          mensaje: data.mensaje,
          fecha_reunion: data.fechaReunion,
          ruta_video: data.rutaVideo,
        });
        if (res.status >= 200 && res.status <= 400 ) {
          console.log(res);
          this.deleteDataConfig = true;
          if (res.status >=200 && res.status <= 400) {

          }
        }
      } catch(error) {
        console.log(error)
      }
    },

    ////////////////////////////////////////////////////////////////////////////

    async deleteSubCategoriesVotaciones(rowToDelete){
      try {
        console.log(' ==== delete subcat-votaciones ====');
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

    ////////////////////////////////////////////////////////////////////////////

    async deleteJuradoVotaciones(rowToDelete){
      try {
        console.log(' ==== delete jurado-votacionest ====');
        const res = await api.delete(`http://127.0.0.1:8000/api/ronda/jurado-votaciones/${rowToDelete.id}`);
        console.log(res);

        if (res.status >= 200 && res.status <= 400) {

        }
      }catch(error) {
        console.log(error);
      }
    },
  },
});
