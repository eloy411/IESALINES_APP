<template>
  <div class="row flex flex-center q-ma-lg">
    <div class="col-12 flex flex-center mt-30">
      <div class="text-body1 q-mb-md">
        Introduce la contraseña enviada a tu correo electronico.
      </div>
      <q-form @submit="submitHandler($event)" class="full-width">
        <q-input
          class="q-mb-md"
          bg-color="grey-1"
          outlined
          name="inputEmail"
          v-model="form.email"
          label="Email"
        >
        </q-input>
        <q-input
          bg-color="grey-1"
          outlined
          class="q-mb-md"
          name="inputPassword"
          v-model="form.password"
          type="password"
          label="Contraseña"
        >
        </q-input>
        <div class="flex flex-center">
          <q-btn
            flat
            name="loginButton"
            class="mt-50"
            label="Iniciar sesión"
            type="submit"
            color="secondary"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { useAuthStore } from "src/stores/authStore";
export default defineComponent({
  name: "LoginForm",
  setup() {
    const authStore = useAuthStore();
    const mostrar = true;
    const form = ref({
      email: "",
      password: "",
    });
    const submitHandler = (ev) => {
      ev.preventDefault();
      //Logica para hacer login
      authStore.login(form);

    };

    return {
      mostrar,
      form,
      submitHandler,
    };
  },
  mounted() {
    // console.log(useAuthStore().isAuth);
  }
});
</script>
