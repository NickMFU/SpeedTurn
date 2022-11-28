<template>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          

          <v-col cols="15">
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
            <v-carousel hide-delimiters height="600">
      <v-carousel-item 
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        
      > </v-carousel-item>
    </v-carousel>
            <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Hondacity2021
          </th>
          <th class="text-left">
            Details
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in hondacity "
          :key="item.Hondacity2021 "
        >
          <td>{{ item.Hondacity2021 }}</td>
          <td>{{ item.Details }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
            </v-sheet>
            <p></p>
            <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          to='/form'
          color="green"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Order
        </v-btn>
      </template>
      <span> Make Order</span>
    </v-tooltip>
    <v-tooltip right>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          to='/form'
          color="orange"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Back
        </v-btn>
      </template>
      <span> Go Back</span>
    </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </template>
  
  <script>
import Hondacivic from '~/components/Hondacivic.vue';
  export default {
    data () {
      return {
        hondacity: [
          {
            Hondacity2021: 'Brand',
            Details: 'Honda',
          },
          {
            Hondacity2021: 'Car type',
            Details: 'Sedan',
          },
          {
            Hondacity2021: 'Segment',
            Details: 'B-Segment',
          },
          {
            Hondacity2021: 'Year of release',
            Details: '2021',
          },
          {
            Hondacity2021: 'Fuel type',
            Details: 'Benzene',
          },{
            Hondacity2021: 'Maximum horsepower (PS)',
            Details: '122PS',
          },{
            Hondacity2021: 'Maximum torque (Nm)',
            Details: '173Nm',
          },{
            Hondacity2021: 'Engine',
            Details: '1.0L Turbo 122PS',
          },{
            Hondacity2021: 'Gear system',
            Details: 'CVT',
          },{
            Hondacity2021: 'Top speed',
            Details: '220km/h',
          },{
            Hondacity2021: 'Fuel consumption',
            Details: '4.2 L/100km',
          },
          {
            Hondacity2021: 'Price',
            Details: '579,000- THB',
          },
          {
            Hondacity2021: 'Tel-seller',
            Details: '087-767-3232'
          }
          
        ],
        items: [
            {
              src: 'https://images.autofun.co.th/file1/2750fc58609040599bfb4a79ddc04403_1072x604.jpg',
            },
            {
              src: 'https://images.autofun.co.th/file1/5a44710d2bd2464886828aee692553d2_1072x604.jpg',
            },
            {
              src: 'https://images.autofun.co.th/file1/a903a86382714a8e966718ab6b1f1959_1072x604.jpg',
            },
            {
              src: 'https://images.autofun.co.th/file1/25075d2708b840fc824f8943cf2d28a7_1072x604.jpg',
            },
            {
              src: 'https://images.autofun.co.th/file1/93a94b843e9c461e9d6c6920bcfd2363_1072x604.jpg',
            },
            {
              src: 'https://images.autofun.co.th/file1/cce6c0501c33468fafdb94ad7c39aff2_1072x604.jpg',
            },
            {
              src: 'https://images.autofun.co.th/file1/f815e86e0eff4e1dbba07931ba8f93b4_1072x604.jpg',
            },
          ],
      }
    },
    components: { Hondacivic }
    
}
  </script>