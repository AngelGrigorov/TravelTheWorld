<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>
        <router-link to="/" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items  color="deep-purple">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-contant>
      <router-view></router-view>
    </v-contant>


  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  data() {
    return {
      appTitle: 'Travel the world',
      menuItems: [
        { title: 'Home', path: '/home', icon: 'home' },
        { title: 'Register', path: '/register', icon: 'face' },
        { title: 'Login', path: '/login', icon: 'lock_open' }
      ]
    }
  },
};
</script>
<style></style>
