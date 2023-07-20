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
  data() {
    return {
      appTitle: 'Travel the world',
      menuItems: [
        { title: 'Home', path: '/home' },
        { title: 'Register', path: '/register' },
        { title: 'Login', path: '/login' }
      ]
    }
  },
  components: {
    NavBar
  }
};
</script>
<style></style>
