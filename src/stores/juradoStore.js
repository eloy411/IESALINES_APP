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
    juradosTest: [
      // {
      //   nombre: 'Manuel Carrasco',
      //   Tipo: 'Jurado de creatividad',
      //   Email: 'email@dominio.com',
      //   Aceptación: '12/5/2002 12:45h',

      // },
      // {
      //   nombre: 'Manuel Carrasco',
      //   Tipo: 'Jurado de creatividad',
      //   Email: 'email@dominio.com',
      //   Aceptación: '12/5/2002 12:45h',
      // },
      // {
      //   nombre: 'Manuel Carrasco',
      //   Tipo: 'Jurado de creatividad',
      //   Email: 'email@dominio.com',
      //   Aceptación: '12/5/2002 12:45h',
      // },
      // {
      //   nombre: 'Manuel Carrasco',
      //   Tipo: 'Jurado de creatividad',
      //   Email: 'email@dominio.com',
      //   Aceptación: '12/5/2002 12:45h',
      // },
    ]
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
              Tipo: jurado.Tipo_jurado,
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
