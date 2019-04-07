<template>
  <v-container>
    <v-content>
      <v-layout>
        <v-flex xs12>
          <v-card>
            <v-card-title>
              <div>
                <div class="headline">Cadastrar Veículo</div>
                <span>Insira abaixo as informações para criar um veículo</span>
              </div>
            </v-card-title>
            <v-card-text>
              <FormNewVehicle>  </FormNewVehicle>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="primary">Salvar</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-content>
  </v-container>
</template>

<script>
import FormNewVehicle from './../components/forms/FormNewVehicle'
export default {
  name: 'CreateVehicle',
  components: {
    FormNewVehicle
  }
}
</script>

<style scoped>

</style>
