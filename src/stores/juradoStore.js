import { defineStore } from "pinia";
import { api } from 'boot/axios'


export const useJuradoStore = defineStore("jurados", {

  state: ()=> ({

    Nombre: '',
    Tipo: '',
    Email: '',
    Aceptación: '',
    Empresa: '',
    Cargo: '',
    Bio: '',
    id: '',
    notification: '',
    options: ['Jurado de Creatividad', 'Jurado de Formación', 'Jurado de eSalud'],
    columnsTable: [
      { name: 'Nombre', label: 'NOMBRE', align: 'center', field: 'Nombre', sortable: true},
      { name: 'Empresa', label: 'EMPRESA', align: 'center', field: 'Empresa', sortable: true},
      { name: 'Tipo', label: 'TIPO', align: 'center', field: 'Tipo', sortable: true},
      { name: 'Email', label: 'EMAIL', align: 'center', field: 'Email', sortable: true},
      { name: 'Aceptación', label: 'ACEPTACIÓN', align: 'center', field: 'Aceptación', sortable: true},
      { name: 'buttons', label: '', align: 'center', field: 'buttons'},
    ],
    juradosRonda: [],
    juradosTest: []
  }),
  getters: {
    getJuradosTest:  (state) => state.juradosTest,

  },
  actions: {

    setMyForm(inputValues) {

      // this.Email = inputValues.email;
      // this.Tipo = inputValues.text1;
      // this.nombre = inputValues.text2;
      // this.Aceptación = inputValues.text3;

      console.log(this.MailForm);
    },

    async getJurados() {

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

    },
    async descargaCSV() {
      try {

        await api({
          url: 'http://127.0.0.1:8000/api/descarga-csv',
          method: 'GET',
          responseType: 'blob', // Important
        }).then((response) => {
          if (response.status >=200 && response.status < 400) {
            const href = URL.createObjectURL(response.data);

            // create "a" HTML element with href to file & click
            const link = document.createElement('a');
            link.href = href;
            link.setAttribute('download', 'file.csv'); //or any other extension
            document.body.appendChild(link);
            link.click();

            // clean up "a" element & remove ObjectURL
            document.body.removeChild(link);
            URL.revokeObjectURL(href);

          }else {
            console.log('Status is not 200 -->', response.status)
          }

        });
        // const res = await api.get("http://127.0.0.1:8000/api/descarga-csv");
        if (res.status >= 200 && res.status <= 400 ) {
          console.log(res);

        }
      } catch(error) {
        console.log(error)
      }
    },

    async getJuradosRonda() {
      try {


        const res = await api.get("http://127.0.0.1:8000/api/jurado");
        if (res.status >= 200 && res.status < 400) {
          this.juradosRonda = [];

          res.data.forEach(jurado => {
            let auxObject = {
              nombre:[jurado.Nombre ,jurado.Empresa],
              tipo: jurado.Tipo_jurado,
              progreso: '100%',
              último_Acceso: '12/5/2002 12:45h',
              recordatorio:'',
              deleteVotos:'',
            }
            this.juradosRonda.push(auxObject);
          })

        }
      }catch(error) {
        console.log(error);
      }
    },
    async postJurado() {
      try {
        console.log('llego')
        // await api.post('url', {});
        this.juradosTest.push({
          Nombre: this.Nombre,
          Empresa: this.Empresa,
          Tipo: this.Tipo,
          Email: this.Email,
          Aceptación: this.Aceptación,
        });

        this.Nombre = '';
        this.Tipo = '';
        this.Email = '';
        this.Cargo = '';
        this.Empresa = '';

      }catch(error) {
        console.log(error);
      }
    },

    async putJurado() {
      try {
        const response = await api.put(`http://127.0.0.1:8000/api/jurado/update/${this.id}`, {
          id: this.id,
          nombre: this.Nombre,
          nom_imagen: 'dsa',
          email: this.Email,
          cargo: this.Cargo,
          empresa: this.Empresa,
          texto: this.Bio

        })

        console.log(response);
        if (response.status >= 200 && response.status < 400 ) {
          this.notification = true;
        }else {
          this.notification = false;
        }
      }catch (error) {
        console.log(error);
      }
    }

  }

});
