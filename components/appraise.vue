<template>
    <v-simple-table dark>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
             Date
            </th>
            <th class="text-left">
              Appraise
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in desserts"
            :key="item.name"
          >
            <td>{{ item.date }}</td>
            <td>{{ item.price }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </template>
  <script>
  export default {
    data () {
      return {
        desserts: [
          {
            date : 'Frozen Yogurt',
            price: 159,
          },
          {
            date : 'Ice cream sandwich',
            price: 237,
          },
          {
            date : 'Eclair',
            price: 262,
          },
        ],
      }
    },
  }
</script>