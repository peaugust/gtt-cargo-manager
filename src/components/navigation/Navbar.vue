<template>
  <div>
    <v-navigation-drawer
      v-model="drawerRight"
      fixed
      left
      clipped
      app
    >
      <v-list dense>
        <v-list-tile @click="go('/user')">
          <v-list-tile-action>
            <v-icon>people</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Novo usuário</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="go('/vehicle')">
          <v-list-tile-action>
            <v-icon>local_shipping</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Novo veículo</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="go('/schedule')">
          <v-list-tile-action>
            <v-icon>calendar_today</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Agendamentos</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="blue-grey"
      dark
      fixed
      app
      clipped-left
    >
      <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
      <v-toolbar-title>Cargo Manager</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      drawer: false,
      drawerRight: false,
      right: false
    }
  },
  methods: {
    go (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>

</style>
