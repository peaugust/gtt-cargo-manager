<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 md6 d-flex>
        <v-text-field label="Nome" v-model="user.name"></v-text-field>
      </v-flex>
      <v-flex xs12 md6 d-flex>
        <v-text-field label="Sobrenome" v-model="user.surnname"></v-text-field>
      </v-flex>
      <v-flex xs12 md6 d-flex>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="user.birthdate"
              label="Data de nascimento"
              readonly
              v-on="on" style="width: 100%"></v-text-field>
          </template>
          <v-date-picker
            ref="picker"
            v-model="user.birthdate"
            :max="new Date().toISOString().substr(0, 10)"
            min="1950-01-01"
            @change="save"
            locale="pt-br"
          ></v-date-picker>
        </v-menu>
      </v-flex>
      <v-flex xs12 md6 d-flex>
        <v-text-field label="CPF" v-model="user.CPF"></v-text-field>
      </v-flex>
      <v-flex xs12 md6 d-flex>
        <v-text-field label="Carteira de motorista" v-model="user.license"></v-text-field>
      </v-flex>
      <v-flex xs12 md6 d-flex>
        <v-text-field label="Endereço" v-model="user.address"></v-text-field>
      </v-flex>
      <v-flex xs12 md6 d-flex>
        <v-text-field label="E-mail" v-model="user.email"></v-text-field>
      </v-flex> <v-flex xs12 md6 d-flex>
        <v-text-field label="Celular" v-model="user.phoneNumber"></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'FormNewUser',
  data () {
    return {
      menu: false,
      date: '',
      user: {
        name: '',
        surnname: '',
        birthdate: '',
        CPF: '',
        license: '',
        address: '',
        email: '',
        phoneNumber: '',
      }
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
