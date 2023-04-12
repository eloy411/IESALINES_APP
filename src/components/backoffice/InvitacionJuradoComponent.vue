<template>
  <div class="my-card">
    <q-card class="my-card" :rows="rows">
      <q-card-section>
        <q-form class="q-gutter-md" >

          <h5>Enviar invitación {{ juradoStore.Nombre }} </h5>
          <p>De: Premios Aspid &lt;sede@premiosaspid.es&gt; </p>
          <p>Para: {{ juradoStore.Nombre }} &lt;{{ juradoStore.Email }}&gt; , con votaciones pendientes</p>
          <!-- mailDestinatario -->
          <div class="asunto">
            <label>Asunto:</label><q-input square outlined filled v-model="juradoStore.asunto" style="width:100% " />
          </div>

          <q-input filled v-model="juradoStore.text" outlined type="textarea" min-height:400px>
          </q-input>
          <q-btn label="Enviar" type="submit" color="red" :to="juradoPage"
            @click="juradoStore.postJuradoGetTokenUrlAceptacionInvitacion(), showNotif()"
            style="align-items:center;justify-content: center;margin-left: 50%;"></q-btn>
        </q-form>
      </q-card-section>
    </q-card>

  </div>
</template>
<script>
import { ref, defineComponent } from 'vue'
import { computed } from 'vue';
import { useQuasar } from 'quasar';
import { useLayoutStore } from "src/stores/layoutStore";
import { useAuthStore } from 'src/stores/authStore';
import { useJuradoStore } from 'src/stores/juradoStore';
export default defineComponent({
  name: 'InvitacionJurado',
  setup() {
    const layoutStore = useLayoutStore();
    const authStore = ref(useAuthStore());
    const juradoStore = ref(useJuradoStore());
    const $q = useQuasar();
    const year = layoutStore.year;
    const juradoPage = "../jurado";
    const JuradoNombre = computed(() => {
      return juradoStore.value.Nombre;
    });
    const tipoJurado = computed(() => {
      return juradoStore.value.Tipo;
    });
    return {
      JuradoNombre,
      juradoStore,
      authStore,
      juradoPage,
      text: ref(''),
      tipoJurado,
      year,
      AsuntoText: 'Enhorabuena! Has sido seleccionado como Jurado a los Premios Aspid',
      MensajeText: `Apreciad@ '${JuradoNombre.value}', Nos ponemos en contacto contigo porque estamos configurando el próximo Jurado de los Premios Aspid ${year}. Como ya es habitual, entendemos que cualquier festival que se precie ha de contar con un Jurado de Gran Calidad. Como en los últimos años, mantenemos el sistema de convocatoria bajo designación.Queremos componer un ${tipoJurado.value} profesional de contrastada solvencia en el ámbito Healthcare. Por este motivo, dada tu trayectoria, sería un placer contar contigo para que formes parte del Jurado de los Premios Aspid de este próximo año ${year}. Si deseas formar parte del Jurado, has de acceder al formulario que te indicamos a continuación y actualizar la información en caso que sea necesario. La participación como Jurado no será retribuida.El período de votación será desde el 1 al 7 de mayo de ${year}. Más adelante recibirás tus credenciales para efectuar tu votación cómodamente, en en el horario que quieras, durante el periodo indicado.El 8 de mayo será el día de la revisión de votos y tendrás que estar presente obligatoriamente via telemática por Skype, Teams o Similar. Recibirás las instrucciones para conectarte a la video conferencia el 7 de mayo.Dada la conveniencia de hacer networking entre nosotros y, por supuesto, comentar las novedades de estos Aspid y recoger opiniones, celebraremos una comida durante el mes de noviembre a la que estás invitado (evidentemente bajo coste de la Organización). Haremos una en Madrid y otra en Barcelona para así evitar desplazamientos. Te anoto las fechas; el lugar y la carta a escoger os los facilitaremos una vez confirmada vuestra asistencia.* Madrid: Jueves 18 de noviembre de ${year} a las 14h * Barcelona: Jueves 25 de noviembre de ${year} a las 14h.'`,
      showNotif() {
        $q.notify({
          message: 'Email Enviado',
          color: 'green'
        })
      }
    }
  }
})
</script>
<style>
.asunto {
  display: flex;
  align-items: center;
  gap: 1em;

}

.inputAsunto {
  max-width: 100%;
}

.q-textarea .q-field__control {
  min-height: 306px;
  height: auto;
}
</style>
