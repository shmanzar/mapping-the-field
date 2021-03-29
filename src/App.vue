<template>

 <div class="common-layout">
        <el-container>
          <el-header><h2>New York City Restaurants and the Pandemic | Mapping the Field</h2>
          </el-header>
          <el-divider></el-divider>
          <div class = 'maps'>
<el-card>
<!-- <h2>Map goes here</h2> -->

  <MapboxMap />

</el-card>
<el-card>
  <h2>Stats goes here</h2>
  
  </el-card>
</div>
            <!-- <img class="logo" alt="Vue logo" src="./assets/logo.png"> -->
  <HelloWorld :msg="msg"/>
  <div class="btn">
    <el-button type="primary" @click="startHacking">
      Get Started
    </el-button>
  </div>
          <el-main>Main</el-main>
        </el-container>


      </div>
</template>

<script>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import MapboxMap from './components/MapboxMap.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
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
  }
}
</script>

<style>
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
.logo {
  width: 50%;
}
.maps {
    display: flex;
    justify-content: space-around;
  }
.btn {
  margin-top: 100px;
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
    background-color: #E9EEF3;
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
