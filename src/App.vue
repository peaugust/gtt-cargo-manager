<template>
  <v-app>
    <Navbar></Navbar>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Navbar from './components/navigation/Navbar'
export default {
  name: 'App',
  components: {
    'Navbar': Navbar
  }
}
</script>

<style>

</style>
