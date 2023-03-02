<template>
  <q-card class="my-card">
    <div class="contenedor">
      <div class="loginForm">
        <div class="titulo">
          <h5>¡Bienvenida/o!<br>Premios Aspid {{year}}</h5>
        </div>
        <div>
          <q-input outlined v-model="ph" placeholder="Dirección de correo electrónico" :dense="dense" class="inputEmail" />
          <p class="subtitulo">A continuacón te enviaremos un link de acceso mágico</p>
        </div>
        <div class="botonC">
          <q-btn class="boton q-mt-lg" id="botonazo" v-on:click="changeMessage()" label="Enviar" />
        </div>
      </div>
    </div>
  </q-card>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useAuthStore } from "src/stores/authStore";
export default defineComponent({
  name: "LoginPage",
  setup() {
    const today = new Date();
    const year = ref(today.getFullYear())
    return {
      year,
    };
  },
  methods: {
        changeMessage() {
          document.getElementById('botonazo').innerHTML = 'El periodo de votación no esta activo';
        }
    }
});
</script>
<style>


body {
  /* background-image: url('../../assets/fondo.png'); */
  background: url("../../assets/fondo.png") no-repeat center center fixed;
  background-size: cover;
}

.q-card {
  height: 38rem;
  border-radius: 15px;
  background-color: rgb(255, 255, 255);
  margin-left: 27rem;
  width: 45rem;

}

.boton {
  border-radius: 10px;
  background-color: rgb(51, 51, 51);
  color: white;
  border-radius: 20px;
}

.botonC{
  display: flex;
  justify-content: center;
  align-items: center;
}

.inputEmail {
  width: 25rem;
}

.contenedor {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;

}

.loginForm{
  margin-top: 9rem;
}

.titulo {
  float: left;
}

.subtitulo {
  color: rgb(115, 115, 115);
}</style>
