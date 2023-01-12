<template>
  <div class="q-gutter-sm row items-center no-wrap">
    <q-btn no-caps flat round>
      <div>
        <q-avatar data-cy="menuPerfilNoAvatar" size="32px" icon="person" />
      </div>
      <q-menu class="bg-primary text-white" fit v-if="isAuth">
        <q-list>
          <q-item clickable v-close-popup href="#">
            <q-item-section>Mi cuenta</q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="authStore.logout()">
            <q-item-section>Cerrar sesión</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
      <q-menu class="bg-primary text-white" fit v-if="!isAuth">
        <q-list>
          <q-item clickable v-close-popup href="/login">
            <q-item-section>Login</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useAuthStore } from "src/stores/authStore";
export default defineComponent({
  name: "MenuOldPerfilButton",
  props: {
    isAuth: {
      type: Boolean,
    },
    authUserAvatar: {
      type: String,
    },
  },
  setup() {
    const authStore = useAuthStore();
    return {
      authStore,
    };
  },
});
</script>
