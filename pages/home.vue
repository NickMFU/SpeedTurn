<template>
  <v-main class="grey lighten-3">
      <v-container>
        <v-row >
          <v-col class="text-center">
            <h2>Welcome to SpeedTurn provide quick and efficient service in a quick manner</h2>
            <v-alert
            dense
      type="warning"
    >
    Our shop only sells and makes appointments to check cars in <strong>Chiang Rai</strong>.
    </v-alert>
            <v-sheet
              min-height="100vh"
              rounded="lg"
            >
              <p></p>
              <intro/>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
    <v-card
    class="mx-auto"
    max-width="800"
  >
    <v-card-text>
      <h2>Turn car = old car exchange for new car
        How much is the price of the old car? The customer will bring that price as a down payment 
        for a new car and then the difference in installments according to the agreement of the finance company or 
        in another case where the customer buys it fresh. Customers have to bring the difference to pay for the replacement 
        by themselves.</h2>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Learn More
      </v-btn>
    </v-card-actions>
  </v-card>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
</template>

<script>
export default {
  name: 'IndexPage'
  
}
</script>
