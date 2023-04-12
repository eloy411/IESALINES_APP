<template>
    <div
      class="TrigerBox"
      v-for="item in explanationTriger"
      v-bind:key="item.name"
    >
      <div v-if="explanationTriger == 1">
        <img class="imageLogo" src="../../assets/LogoAspid.png" />
        <div class="box">
            <div style="display: flex">
                <q-carousel
                    class="InsedeBox1"
                    animated
                    v-model="slide"
                    navigation
                    infinite
                    :autoplay="autoplay"
                    arrows
                    transition-prev="slide-right"
                    transition-next="slide-left"
                    @mouseenter="autoplay = false"
                    @mouseleave="autoplay = true"
                >
                <q-carousel-slide :name="1">
                    <q-video
                        class="absolute-full"
                        v-for="item in TitelDescArr"
                        v-bind:key="item.name"
                        :src="item.video1"
                    />
                    </q-carousel-slide>
                    <q-carousel-slide :name="2">
                    <q-video
                        class="absolute-full"
                        v-for="item in TitelDescArr"
                        v-bind:key="item.name"
                        :src="item.video2"
                    />
                    </q-carousel-slide>
    
    
                </q-carousel>
            </div>

            <div>
                <div class="InsedeBox2">
                    <div class="boxTitle">
                      <div
                          class="Title"
                          v-for="item in TitelDescArr"
                          v-bind:key="item.name"
                      >
                          {{ item.titulo }}
                      </div>
                      <div
                        class="Title2"
                        v-for="item in TitelDescArr"
                        v-bind:key="item.name"
                      >
                        {{ item.titulo2 }}
                      </div>
                    </div>
                    <div class="boxDescrip">
                    <div
                        class="Description"
                        v-for="item in TitelDescArr"
                        v-bind:key="item.name"
                    >
                        {{ item.descripción }}
                    </div>
                    </div>
                </div>
                <div>
                    <a href="#" class="butonDescript">Saltar</a>
                </div>
            </div>
        </div>
        </div>
       
    </div>
  </template>
  
  <script>
  const columns = [];
  
  const rows = [];
  
  import { ref, defineComponent } from "vue";
  export default defineComponent({
    name: "ExplanationSite",
    setup() {
      const dialog = ref(false);
      const position = ref("top");
      const cont = [0];
      const explanationTriger = ref([1]);
  
      return {
        slide: ref(1),
        TitelDescArr: [
          {
            titulo: "Premios Aspid",
            titulo2: "Lorem ipsum dolor sitamet, consectetur adipiscing elit",
            descripción:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum mauris pharetra sed scelerisque nascetur. Dignissim purus euismod eu at feugiat vel odio. Tortor sollicitudin massa elit dolor ac risus condimentum metus. Pretium ultrices in donec nisi fames ac in amet bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum mauris pharetra sed scelerisque nascetur. Dignissim purus euismod eu at feugiat vel odio. Tortor sollicitudin massa elit dolor ac risus condimentum metus. Pretium ultrices in donec nisi fames ac in amet bibendum.​",
            video1: "https://www.youtube.com/embed/k3_tw44QsZQ?rel=0",
            video2: "https://www.youtube.com/embed/k3_tw44QsZQ?rel=0",
          },
        ],
        explanationTriger,
        columns,
        rows,
        dialog,
        position,
        open(pos) {
          position.value = pos;
          dialog.value = true;
        },
      };
    },
  });
  </script>
  
  <style>
.box{
  top: 27%;
  position: fixed;
  display: flex;
  flex-direction: row;
}
  .video_1 {
    width: 100%;
  }
  body{
    background-color: #2f353b;
    
  }
  .imageLogo {
    width: 150px;
    margin-top: 35px;
    margin-left: 51px;
  }
  .InsedeBox1 {
    margin-left: 50px;
    /* height: 490px; */
    width: 50vw;
  }
  .InsedeBox2 {
    margin-left: 50px;
    height: 490px;
    width: 60vw;
  }
  .displayVideo {
    justify-content: center;
    background-color: cyan;
    margin: 0rem 1rem 0rem 1rem;
  }
  
  .test {
    flex: 1.5;
  }
  
  .butonDescript {
    background-color: #c74545;
    border-radius: 15px;
    display: inline-block;
    cursor: pointer;
    margin: 20px;
    color: #ffffff;
    font-family: Arial;
    font-size: 13px;
    padding: 5px 21px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #662828;
    margin-top: 5px;
  }
  .butonDescript:hover {
    background-color: #bd2a2a;
  }
  .butonDescript:active {
    position: relative;
    top: 1px;
  }
  .Title {

    font-family: 'Playfair Display';
    font-style: italic;
    font-weight: 900;
    font-size: 44px;

    margin-bottom: 10px;
    text-align: left;
    color: white;
  }
  .Title2 {

    font-family: 'Playfair Display';
    font-weight: 400;
    font-size: 24px;

    margin-bottom: 10px;
    text-align: left;
    color: white;
  }
  .boxTitle {
    width: 300px;
  }
  .boxDescrip {
    width: 500px;
  }
  .Description {
    color: white;
    text-align: left;
  }
  </style>