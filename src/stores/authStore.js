import { defineStore } from "pinia";
import { api } from 'boot/axios'

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: '',
    password: '',
    isAuth: false,
    role: '',
    user: null,
    tokenMail: '',
    urlTokenMail: '',
    text: '',
    asunto: '',
    data: [],
  }),
  actions: {
    login(form) {
      //logica de login
      this.user = form.value.email;
      this.password = form.value.password;

      if (this.user != '' && this.password !='') {
        this.isAuth = true;
        this.user = '';
        this.password = '';
      }else {
        this.isAuth = false;
      }
      this.router.push({ name: "home" });
      console.log("Login");
    },
////////////////////////////////////////////////////////////////////////////

    async postJuradoFromEmail() {
      try {
        console.log("llego");
        console.log(`http://127.0.0.1:8000/api/login/${this.urlTokenMail}`)
        const response = await api.get(
          `http://127.0.0.1:8000/api/login/${this.urlTokenMail}`
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

    async postAceptacion() {
      try {
        console.log("este es el token -->",this.tokenMail);
        // console.log(`http://127.0.0.1:8000/api/jurado/id`)
        const response = await api.post('http://127.0.0.1:8000/api/jurado/id',{
            id: this.tokenMail
          }
        );
        console.log(this.tokenMail);

        if (response.status >= 200 && response.status < 400) {
          this.tokenMail = '';
          this.urlTokenMail = '';
          console.log("email", response.data);
          this.data = response.data
        } else {
          this.notification = false;
        }
      } catch (error) {
        console.log(error);
      }
    },

  async postInivitacionJuradoFromEmail() {
    try {
      console.log("llego");
      const response = await api.post(
        `http://127.0.0.1:8000/api/email`,
        {
          emailtomsg: this.Email,
          id: this.id,
          textomsg: this.text,
          asuntomsg: this.asunto,
          typemsg: 'Invitacion'
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

    logout() {
      //logica de logout
      this.isAuth = false;
      this.user = null;
      this.router.push({ name: "login" });
      console.log("Logout");
    },
  },
  persist: true,
});
