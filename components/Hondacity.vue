<template>
    <v-card
      class="mx-auto"
      max-width="800"
    >
      <v-img
        class="white--text align-end"
        height="300px"
        src="https://images.autofun.co.th/file1/2750fc58609040599bfb4a79ddc04403_1072x604.jpg"
      >
        <v-card-title class="red">Honda city 2021</v-card-title>
      </v-img>
      <p></p>
      <h3 class="grey lighten-3">Owner : Mr.Gomot lolem</h3>
      <v-card-text class="text--primary">
        <div>Brand: Honda</div>
        <div>Model: Honda City</div>
        <div>Gear model: CVT</div>
        <div>Cylinder volume: 988</div>
        <div>Number of seats: 5</div>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          to='/cityinfo'
          color="orange"
          text
        >
          Manage
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>
  <script>
    export default {
    }
  </script>