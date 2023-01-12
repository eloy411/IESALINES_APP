import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuth: false,
    user: null,
  }),
  actions: {
    login(form) {
      //logica de login
      this.isAuth = true;
      this.router.push({ name: "home" });
      console.log("Login");
    },
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
