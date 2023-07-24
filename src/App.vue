<template>
  <v-app>
    <NavBar/>
    <v-contant>
      <router-view></router-view>
    </v-contant>


  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>
<style></style>
