<!--TODO: INSERIR DIALOG PARA A ADIÇÃO DE AGENDAMENTO-->
<template>
  <v-container>
    <v-content>
      <v-layout>
        <v-flex xs12>
          <v-card>
            <v-card-title>
              <div>
                <div class="headline">Agendamentos</div>
                <span>Visualize os agendamentos criados abaixo</span>
              </div>
              <v-spacer></v-spacer>
              <v-btn><v-icon left>add</v-icon>Novo agendamento</v-btn>
            </v-card-title>
            <v-card-text>
              <v-data-table
                :headers="headers"
                :items="schedules"
              >
                <template v-slot:items="props">
                  <td>{{ props.item.name }}</td>
                  <td class="text-xs-right">{{ props.item. vehicle}}</td>
                  <td class="text-xs-right">{{ props.item.entrance }}</td>
                  <td class="text-xs-right">{{ props.item.exit }}</td>
                  <td class="text-xs-right">{{ props.item.operation }}</td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-content>
  </v-container>
</template>

<script>
export default {
  name: 'Schedule',
  data () {
    return {
      headers: [
        {
          text: 'Motorista',
          sortable: false,
          value: 'name'
        },
        { text: 'Veículo', value: 'vehicle', sortable: false},
        { text: 'Entrada', value: 'entrance', sortable: false},
        { text: 'Saída', value: 'exit', sortable: false},
        { text: 'Operação', value: 'operation', sortable: false}
      ],
      schedules: [
        {
          name: 'Arnaldo',
          vehicle: 'Cargo',
          entrance: '12/01/2010',
          exit: '12/01/2010',
          operation: 'Descarga'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
