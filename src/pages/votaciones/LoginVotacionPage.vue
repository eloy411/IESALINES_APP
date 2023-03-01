<template>
  <q-page class="flex flex-center bg-pmf" data-cy="loginPageDesktop">
      <LoginPage />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import LoginPage from "src/components/auth/LoginPageComponent.vue";
export default defineComponent({
  name: "LoginVotacionPage",
  components: { LoginPage },
});
</script>
