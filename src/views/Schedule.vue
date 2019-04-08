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
              <v-dialog v-model="dialog" width="400px">
                <template v-slot:activator="{on}">
                  <v-btn v-on="on">
                    <v-icon left>add</v-icon>
                    Novo agendamento
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <div>
                      <div class="headline">Novo agendamento</div>
                      <span>Insira as informações abaixo para criar um agendamento</span>
                    </div>
                  </v-card-title>
                    <v-container fluid grid-list-md>
                      <v-layout row wrap>
                        <v-flex xs12 d-flex>
                          <v-select
                            :items="drivers"
                            label="Motorista"
                            v-model="selectedDriver"
                          ></v-select>
                        </v-flex>
                        <v-flex xs12 d-flex>
                          <v-select
                            :items="vehicles"
                            label="Veículo"
                            v-model="selectedVehicle"
                          ></v-select>
                        </v-flex>
                        <v-flex xs12 d-flex>
                          <v-text-field label="Entrada" mask="##/##/####" v-model="entrance"></v-text-field>
                        </v-flex>
                        <v-flex xs12 d-flex>
                          <v-text-field label="Saída" mask="##/##/####" v-model="exit"></v-text-field>
                        </v-flex>
                        <v-flex xs12 d-flex>
                          <v-select
                            :items="operation"
                            label="Operação"
                            v-model="selectedOperation"
                          ></v-select>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="addSchedule()">Salvar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
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
      drivers: ['Arnaldo', 'João', 'Matias', 'Rosângela', 'Laura', 'Genoveva'],
      selectedDriver: '',
      vehicles: ['Volvo AAA-5354', 'VW BBB-9854', 'Ford DFV-5451'],
      selectedVehicle: '',
      entrance: '',
      exit: '',
      operation: ['Carga', 'Descarga'],
      selectedOperation: '',
      dialog: false,
      headers: [
        {
          text: 'Motorista',
          sortable: false,
          value: 'name'
        },
        {text: 'Veículo', value: 'vehicle', sortable: false},
        {text: 'Entrada', value: 'entrance', sortable: false},
        {text: 'Saída', value: 'exit', sortable: false},
        {text: 'Operação', value: 'operation', sortable: false}
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
  methods: {
    addSchedule () {
      this.schedules.push({
        name: this.selectedDriver,
        vehicle: this.selectedVehicle,
        entrance: this.entrance,
        exit: this.exit,
        operation: this.selectedOperation
      })
      this.selectedDriver = ''
      this.selectedVehicle = ''
      this.entrance = ''
      this.exit = ''
      this.operation = ''
    }
  }
}
</script>

<style scoped>

</style>
