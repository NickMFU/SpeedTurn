<template>
  <v-card color="grey">
      <div class="home">
        Product test
        <router-link :to="{ name: 'AppaisePriceCreate' }" class="button is-success mt-5"
          >Add New</router-link>
          
          <v-simple-table>
    <template v-slot:default>
          <thead>
            <tr>
              
              <th>Appraise price</th>
              <p></p>
              <th>Appraise date</th>
              <p></p>
              <th>Car ID</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.Ap_price">
              <td>{{ item.Ap_price }}</td>
              <p></p>
              <td>{{ item.Ap_date }}</td>
              <p></p>
              <td>{{ item.Car_id }}</td>
              <td class="has-text-centered">
             </td>
            </tr>
          </tbody>
        </template>
  </v-simple-table>
      </div>
    </v-card>
    </template>
    <script>
    // import axios
    import axios from "axios";
    
    export default {
      name: "AppaisePriceList",
      data() {
        return {
          items: [],
         };
      },

      created() {
        this.getAppaisePrice();
      },
      
      methods: {
        // Get All Products
        async getAppaisePrice() {
          try {
            const response = await axios.get("http://localhost:5000/AppaisePrice");
            this.items = response.data;
          } catch (err) {
            console.log(err);
          }
        },
    
        
        
      },
    };
    </script>
    
    <style>
    </style>