<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 md6 d-flex>
        <v-text-field label="Placa" mask="AAA-####" v-model="vehicle.plate"></v-text-field>
      </v-flex>
      <v-flex xs12 md6 d-flex>
        <v-text-field label="Nº do renavam" v-model="vehicle.renavam"></v-text-field>
      </v-flex>
      <v-flex xs12 md6 d-flex>
        <v-text-field label="Ano de fabricação" mask="####" v-model="vehicle.fabricationYear"></v-text-field>
      </v-flex>
      <v-flex xs12 md6 d-flex>
        <v-text-field label="Ano de compra" mask="####" v-model="vehicle.purchaseYear"></v-text-field>
      </v-flex>
      <v-flex xs12 md6 d-flex>
        <v-text-field label="Carga máxima suportada" v-model="vehicle.maxLoad"></v-text-field>
      </v-flex>
      <v-flex xs12 md6 d-flex>
        <v-text-field label="Nº de eixos" mask="##" v-model="vehicle.numAxles"></v-text-field>
      </v-flex> <v-flex xs12 md6 d-flex>
        <v-text-field label="Comprimento total (em metros)" v-model="vehicle.totalLength"></v-text-field>
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
      vehicle: {
        plate: '',
        renavam: '',
        fabricationYear: '',
        purchaseYear: '',
        numAxles: '',
        maxLoad: '',
        totalLength: ''
      }
    }
  },
}
</script>

<style scoped>

</style>
