<template>
  <v-container>
    <v-content>
      <v-layout>
        <v-flex xs12>
          <v-card>
            <v-card-title>
              <div>
                <div class="headline">Cadastrar usuário</div>
                <span>Insira abaixo as informações para criar um usuário</span>
              </div>
            </v-card-title>
            <v-card-text>
              <form-new-user></form-new-user>
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
  import FormNewUser from './../components/forms/FormNewUser'
  export default {
    name: 'CreateUser',
    components: {
      FormNewUser
    },
  }
</script>

<style scoped>

</style>
