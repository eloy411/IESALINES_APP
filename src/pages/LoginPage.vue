<template>
  <q-page class="flex flex-center bg-pmf" data-cy="loginPageDesktop">
    <q-card style="width: 360px">
      <LoginForm></LoginForm>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import LoginForm from "src/components/auth/LoginForm.vue";
export default defineComponent({
  name: "LoginPage",
  components: { LoginForm },
});
</script>
