import { defineStore } from "pinia";
import { api } from "boot/axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: "",
    userId: null,
    password: "",
    admin: 0,
    isAuth: false,
    role: "",
    user: null,
    tokenMail: "",
    urlTokenMail: "",
    text: "",
    asunto: "",
    emailLogin: "",
    data: [],
  }),
  actions: {
    login(form) {
      //logica de login
      this.user = form.value.email;
      this.password = form.value.password;
      this.router.push({ name: "home" });
      console.log("Login");
    },

    async postLoginJurado() {
      try {
        console.log("llego");
        console.log(`http://localhost:8000/api/email-login`);
        const response = await api.post(
          `http://localhost:8000/api/email-login`,
          {
            textomsg: "login",
            asuntomsg: "login",
            emailtomsg: this.emailLogin,
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

    async getTokenUser() {
      try {
        console.log("TOKEN USER");
        console.log(`http://localhost:8000/sanctum/csrf-cookie`);
        const response = await api.get(
          `http://localhost:8000/sanctum/csrf-cookie`
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

    async getUrlUserData(url) {
      try {
        console.log("TOKEN USER");
        console.log(url);
        const response = await api.get(`${url}`);

        if (response.status >= 200 && response.status < 400) {
          console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
          this.userId = response.data.id;
          console.log(this.userId);
          this.isAuth = true;
          this.admin = response.data.admin;

          console.log("Admin" + this.admin);
          let respuesta = await api.get(
            `http://localhost:8000/api/jurado/acces`
          );
          console.log(respuesta);
          if (this.admin) {
            this.router.push({ name: "jurado" });
          } else {
            this.router.push({ name: "card" });
          }
          // window.location.href = "http://localhost:9000/backoffice/jurado";
        } else {
          this.notification = false;
        }
      } catch (error) {
        console.log(error);
      }
    },
    ////////////////////////////////////////////////////////////////////////////

    async postJuradoFromEmail() {
      try {
        console.log("llego");
        console.log(`http://localhost:8000/api/login/${this.urlTokenMail}`);
        const response = await api.get(
          `http://localhost:8000/api/login/${this.urlTokenMail}`
        );

        if (response.status >= 200 && response.status < 400) {
          console.log(response);
          this.tokenMail = "";
          this.urlTokenMail = "";
        } else {
          this.notification = false;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async postAceptacion() {
      try {
        console.log("este es el token -->", this.tokenMail);
        // console.log(`http://localhost:8000/api/jurado/id`)
        const response = await api.post("http://localhost:8000/api/jurado/id", {
          id: this.tokenMail,
        });
        console.log(this.tokenMail);

        if (response.status >= 200 && response.status < 400) {
          this.tokenMail = "";
          this.urlTokenMail = "";
          console.log("email", response.data);
          this.data = response.data;
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
        const response = await api.post(`http://localhost:8000/api/email`, {
          emailtomsg: this.Email,
          id: this.id,
          textomsg: this.text,
          asuntomsg: this.asunto,
          typemsg: "Invitacion",
        });

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
export default useAuthStore;
