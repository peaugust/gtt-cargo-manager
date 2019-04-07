<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 md6 d-flex>
        <v-text-field label="Placa"></v-text-field>
      </v-flex>
      <v-flex xs12 md6 d-flex>
        <v-text-field label="Nº do renavam"></v-text-field>
      </v-flex>
      <v-flex xs12 md6 d-flex>
        <v-text-field label="Ano de fabricação"></v-text-field>
      </v-flex>
      <v-flex xs12 md6 d-flex>
        <v-text-field label="Ano de compra"></v-text-field>
      </v-flex>
      <v-flex xs12 md6 d-flex>
        <v-text-field label="Carga máxima suportada"></v-text-field>
      </v-flex>
      <v-flex xs12 md6 d-flex>
        <v-text-field label="Nº de eixos"></v-text-field>
      </v-flex> <v-flex xs12 md6 d-flex>
        <v-text-field label="Comprimento total"></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'FormNewVehicle',
  data () {
    return {
      menu: false,
      date: ''
    }
  },
  watch: {
    menu (val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date)
    }
  }
}
</script>

<style scoped>

</style>
