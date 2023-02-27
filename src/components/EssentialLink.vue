<template>
  <div v-if="exact">
    <q-item
      clickable
      :to=link
      :active="contMyStyle === true"
      @click="changeStyle($event)"

      active-class="my-menu-link"
      v-ripple
    >
      <q-item-section v-if="icon" avatar>
        <q-icon :name="icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
        <!-- <q-item-label caption>{{ caption }}</q-item-label> -->
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "EssentialLink",

  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
    exact: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const contMyStyle = ref("Jurado");
    return {
      contMyStyle,

      changeStyle(e) {

        // Get the target from q-item
        let myDrawerElements = e.target.parentNode.parentNode.parentNode.parentNode;
        let myClassList = e.target.parentNode.parentNode.classList

        /*
          In q-item there are three divs that the user can touch.
          Every div have have more or few parenNode
          I want to change the style of an specific div of the q-item
          So depending of what div the user touch i need to make the verification to climb up in the nodes
          We check the classList to differnciate between the divs
        */

        if (e.target.parentNode.parentNode.classList.length == 0) {
          myDrawerElements = e.target.parentNode.parentNode.parentNode;
          myClassList = e.target.parentNode.classList
        }else if (e.target.parentNode.parentNode.classList.length == 2) {
          myDrawerElements = e.target.parentNode.parentNode;
          myClassList = e.target.classList
        }



        for (let i = 0; i < myDrawerElements.children.length; i++) {

          let tokenListClass =  myDrawerElements.children[i].children[0].classList; // This is a tokendDOM List. So you need to trun into an array
          let classArray = Array.from(tokenListClass) // find only work in arrays
          let checker = classArray.find(element => element == 'my-menu-link');
          if (checker) {
            myDrawerElements.children[i].children[0].classList.remove('my-menu-link');
          }
        }

        myClassList.add('my-menu-link');

      }
    };
  },
});
</script>

<style>
.my-menu-link {
  color: #de331d;
  background-color: #444444;
}
</style>
