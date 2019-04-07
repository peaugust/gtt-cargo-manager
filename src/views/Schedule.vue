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
            </v-card-title>
            <v-card-text>
              <v-data-table
                :headers="headers"
                :items="desserts"
              >
                <template v-slot:items="props">
                  <td>{{ props.item.name }}</td>
                  <td class="text-xs-right">{{ props.item.calories }}</td>
                  <td class="text-xs-right">{{ props.item.fat }}</td>
                  <td class="text-xs-right">{{ props.item.carbs }}</td>
                  <td class="text-xs-right">{{ props.item.protein }}</td>
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
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Veículo', value: 'calories', sortable: false},
        { text: 'Entrada', value: 'fat', sortable: false },
        { text: 'Saída', value: 'carbs', sortable: false},
        { text: 'Operação', value: 'protein', sortable: false}
      ],
      desserts: [
        {
          name: 'Arnaldo',
          calories: 'Cargo',
          fat: '12/01/2010',
          carbs: '12/01/2010',
          protein: 'Descarga'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
