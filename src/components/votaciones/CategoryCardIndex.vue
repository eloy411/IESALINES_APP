<template>

    <div class="layout-padding row items-start">
        <q-card class="card" inline>
            <q-card-section class="icon">
                    <q-icon size="1.5em"  class="icon_background" name="circle"></q-icon>
                    <q-icon size="1em" class="icon" name="check_circle_outline"></q-icon>
                </q-card-section>
            <q-card-title>
                <div class="title"><a >A1</a><a class="text"><b>Campaña integral de promoción de producto</b></a></div>
                <div class="subtitulo text-subtitle2">Aspid Oro y Plata</div>
            </q-card-title>


            <q-card-section class="vistas"> 
                    <div><q-icon color="grey-4" size="3em" name="circle"></q-icon> 2/3 Obras vistas</div>
            </q-card-section>

            <q-card-actions align="center" >
                <q-btn class="boton" flat>Acceder</q-btn>
            </q-card-actions>
        </q-card>
    
        <q-card class="card2" inline>
            <q-card-section class="icon">
                    <q-icon size="1.5em"  class="icon_background2" name="circle"></q-icon>
                </q-card-section>
            <q-card-title>
                <div class="title"><a >A1</a><a class="text"><b>Campaña integral de promoción de producto</b></a></div>
                <div class="subtitulo text-subtitle2">Aspid Oro y Plata</div>
            </q-card-title>


            <q-card-section class="vistas"> 
                    <div><q-icon color="grey-4" size="3em" name="circle"></q-icon> 2/3 Obras vistas</div>
            </q-card-section>

            <q-card-actions align="center" >
                <q-btn class="boton" flat>Acceder</q-btn>
            </q-card-actions>
        </q-card>
    </div>

</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent ({
    name: "CategoryCardIndex",

    setup () {
      return{

      }
    },

})
</script>

<style>

.card {
    background-color: #F0F0F0;
    margin-left: 40em;
    margin-top: 5em;

    width: 20em;
}

.card2 {
    background-color: #F0F0F0;
    margin-left: 65em;
    margin-top: -14.5em;

    width: 20em;
}

.icon_background2 {
    color: #FFFFFF;
    position: absolute;
    margin-top: -0.07em;
    margin-left: -0.8em;
}

.icon_background {
    color: red;
    position: absolute;
    margin-top: -0.07em;
    margin-left: -0.13em;
}

.icon {
    margin-top: -0.3em;
    text-align: right;
    color: white;
}

.text{
    margin-left: 0.5em;;
    text-align: left;
    font-size: 0.8em;
}

.title {
    margin-left: 1em;

}

.subtitulo {
    font-size: small;
    margin-left: 3em;
}

.vistas {
    text-align: center;
}


.boton {
    border: 1px solid red;
    border-radius: 15em;
    font-size: 0.8em;

}
</style>