<template>

<div class="my-card">
    <q-card class="my-card" :rows="rows">
        <q-card-section>
            <q-form
                class="q-gutter-md"
                >

            <h5>Email de Recordatorio de Votacion  {{ tipoStore.mailDestinatario }} </h5>
            <p>De: Premios Aspid 	&lt;sede@premiosaspid.es&gt; </p>
            <p>Para: {{tipoStore.mailDestinatario }} ,  con votaciones pendientes</p>

            <div class="asunto">
              <label>Asunto:</label><q-input square outlined v-model="text" style="width:100% "/>
            </div>
            
            
            <q-input
            v-model="text"
            outlined
            type="textarea"
            />
            <q-btn label="Enviar" type="submit" color="red" style="display:flex;align-items:center;justify-content: center;margin-left: 50%;"></q-btn>
        </q-form>
        </q-card-section>
    </q-card>

</div>

</template>
<script>
import { ref, defineComponent } from 'vue'
import { useTipoJuradosStore } from "src/stores/TipoJuradosStore";

export default defineComponent ({
  name: 'MailVotacionComponent',
  setup () {
    const tipoStore = ref(useTipoJuradosStore());
    
    return {
       tipoStore,
      text: ref(''),
    }
  }
})
</script>
<style>
.asunto{
    display: flex;
    align-items: center;
    gap:1em;
    
}
.inputAsunto{
    max-width: 100%;
}

</style>