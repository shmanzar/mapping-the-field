<template>

 <div class="common-layout">
        <el-container>
          <el-header>New York City Restaurants and the Pandemic | Mapping the Field
          </el-header>
          <el-divider></el-divider>
          <el-main>
          <div class = 'maps'>
<el-card>
<!-- <h2>Map goes here</h2> -->

  <MapboxMap />

</el-card>
<el-card>
  <div id = "image-compare">
    <img src="./assets/photos/open-streets-sunset_before.png" alt=""/>
    <img src="./assets/photos/open-streets-sunset.png" alt=""/>
  </div>
  
  </el-card>
</div>
            <!-- <img class="logo" alt="Vue logo" src="./assets/logo.png"> -->
            <div class ='button-switcher'>
              <div class="btn-br">
                <el-button type="primary" @click="startHacking">
                  Bay Ridge example
                </el-button>
              </div>
              <div class="btn-gv">
                <el-button type="primary" @click="playNote()">
                  Greenwich Village example
                </el-button>
              </div>
            </div>
            <!-- <HelloWorld :msg="msg"/> -->
          </el-main>
          <el-footer>timeline/sounds control</el-footer>
        </el-container>


      </div>
</template>

<script>
import { ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import MapboxMap from './components/MapboxMap.vue';
import ImageCompare from "image-compare-viewer";

const someSound = require('./assets/audio/210319_2034.mp3');


export default {
  name: 'App',
  components: {
    // HelloWorld,
    MapboxMap

  },
  setup() {
    const msg = ref("Welcome to Element Plus, a Vue 3.0 based component library")
    const startHacking = () => {
      msg.value = "Start coding with Element Plus with 💖"
    }
    return {
      msg,
      startHacking
    }
  },
  mounted() {
    const element = document.getElementById("image-compare");
  
  // const viewer = new ImageCompare(element).mount();
  const viewer = new ImageCompare(element);
  viewer.mount()
  },
  methods: {
    playNote() {
      console.log("calling playNote()");
      let note = new Audio(someSound);

      note.addEventListener("canplaythrough", () => {
        console.log("event listener called");
        note.play();
      });
    },
    pauseNote() {
      console.log("calling pauseNote()");
      let note = new Audio(someSound);

      note.addEventListener("canplaythrough", () => {
        console.log("event listener called");
        note.pause();
      });
    }
  }
    }

</script>

<style>
body { margin: 0; padding: 0; }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#mapbox-container {
    height: 500px;
    width: 400px;
  }
  #image-compare {
    height: 500px;
    width: 800px;
  }
.logo {
  width: 50%;
}
.maps {
    display: flex;
    justify-content: space-around;
  }
  .button-switcher {
    display: flex;
    justify-content: space-around;

  }
.btn {
  /* margin-top: 100px; */
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    /* background-color: #E9EEF3; */
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
