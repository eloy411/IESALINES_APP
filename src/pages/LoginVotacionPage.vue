<template>
  <q-page class="flex flex-center bg-pmf" data-cy="loginPageDesktop">
      <LoginForm></LoginForm>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import LoginForm from "src/components/auth/LoginPageComponent.vue";
export default defineComponent({
  name: "LoginVotacionPage",
  components: { LoginForm },
});
</script>
