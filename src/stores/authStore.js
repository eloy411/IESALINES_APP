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

  async postJuradoFromEmailPARTE1() {
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
