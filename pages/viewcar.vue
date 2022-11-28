<template>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="15">
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <Hondacity/>
              <p></p>
              <v-divider></v-divider>
              <p></p>
              <Hondacivic/>
              <p></p>
              <p></p>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </template>
  
  <script>
import Hondacivic from '~/components/Hondacivic.vue';
  export default {
    name: "InspirePage",
    components: { Hondacivic }
    
}
  </script>
  