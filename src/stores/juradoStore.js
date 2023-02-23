import { defineStore } from "pinia";
import { api } from "boot/axios";

export const useJuradoStore = defineStore("jurados", {
  state: () => ({
    Nombre: "",
    Tipo: "",
    Email: "",
    Aceptacion: "",
    Empresa: "",
    Cargo: "",
    Bio: "",
    id: 0,
    tipoJuradoChecker: false, // variable for the conditions in "EdicionJurado". To prevent two request at getJuradoTipo()
    notification: "",
    optionsTipoJurado: [],
    juradosRonda: [],
    juradosTest: [],
  }),
  getters: {
    getJuradosTest: (state) => state.juradosTest,
  },
  actions: {
    // done
    async getJurados() {
      try {
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
              Aceptación: "12/5/2002 12:45h",
              id: jurado.id,
            };
            this.juradosTest.push(auxObject);
          });
        }
      } catch (error) {
        console.log(error);
      }
    },

    ////////////////////////////////////////////////////////////////////////////

    // done
    async descargaCSV() {
      try {
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
        console.log('ronda-jurado')
        if (res.status >= 200 && res.status < 400) {
          this.juradosRonda = [];
          console.log(res.data);
          res.data.forEach((jurado) => {
            let auxObject = {
              nombre: [jurado.Nombre, jurado.Empresa],
              tipo: jurado.Tipo_jurado,
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

    ////////////////////////////////////////////////////////////////////////////

    // RUTA FIRMADA Y SUS COSA
    async postJuradoFromEmail() {
      try {
        console.log("llego");
        const response = await api.post(
          `http://127.0.0.1:8000/api/email`,
          {
            email: this.Email,
            id: this.id,
            textomsg: this.text,
            asuntomsg: this.asunto,
            emailtomsg: this.Destinatario
          }
        );

        if (response.status >= 200 && response.status < 400) {
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

        this.Nombre = "";
        this.Tipo = "";
        this.Email = "";
        this.Cargo = "";
        this.Empresa = "";
      } catch (error) {
        console.log(error);
      }
    },

    ////////////////////////////////////////////////////////////////////////////
    // done
    async postJurado() {
      try {
        console.log("llego");
        const response = await api.post(`http://127.0.0.1:8000/api/jurado`, {
          email: this.Email,
          id_tipojurado: 2,
          id_edicion: 25,
          nombre: this.Nombre,
          cargo: this.Cargo,
          empresa: this.Empresa,
        });

        if (response.status >= 200 && response.status < 400) {
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

        this.Nombre = "";
        this.Tipo = "";
        this.Email = "";
        this.Cargo = "";
        this.Empresa = "";
      } catch (error) {
        console.log(error);
      }
    },

    ////////////////////////////////////////////////////////////////////////////

    async deleteJurado() {
      try {
        const response = await api.delete(
          `http://127.0.0.1:8000/api/jurado/${this.id}`,
          {
            id: this.id,
          }
        );
        if (response.status >= 200 && response.status < 400) {
          this.notification = true;
        } else {
          this.notification = false;
        }
      } catch (error) {
        console.log(error);
      }
    },

    ////////////////////////////////////////////////////////////////////////////
    // done (could fixed because we have id_tipojurado in getJurados)
    async putJurado() {
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
            nom_imagen: "dsa",
            email: this.Email,
            id_tipojurado: this.Tipo,
            cargo: this.Cargo,
            empresa: this.Empresa,
            biografia: this.Bio,
          }
        );

        console.log(response);
        if (response.status >= 200 && response.status < 400) {
          this.notification = true;
        } else {
          this.notification = false;
        }
      } catch (error) {
        console.log(error);
      }
    },

    ////////////////////////////////////////////////////////////////////////////

    async putAceptación() {
      try {
        const response = await api.put(
          `http://127.0.0.1:8000/api/jurado/${this.id}`,
          {
            id: this.id,
          }
        );
        if (response.status >= 200 && response.status < 400) {
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

    async putConfigLimitVotaciones() {
      try {
        const response = await api.get(
          `http://127.0.0.1:8000/api//config/limit-votacion`
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
  },
});
