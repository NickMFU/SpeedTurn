
  <template>
  <v-card>
        <v-btn
            class="mt-6"
            color="red"
          >
            Status : complete
    <v-card-title>
      <span class="text-h5">Your order  <strong>Honda city 2021</strong></span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-card
            >Gormot</v-card>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
          <v-card
            >forger</v-card>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
         <v-card
            >099-999-9999</v-card>
          </v-col>
          <v-col cols="12">
            <v-card
            >gormott@gmail.com</v-card>
          </v-col>
          <v-col cols="12">
            <v-card
            > honda civic 2012 colour black 144444 mile </v-card>
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
          <v-card
            >19/11/2022</v-card>
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
          <v-card
            >15:00am</v-card>
          </v-col>
          <v-col
            cols="12"
          >
          <v-card
            >Honda city 2021</v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        to='/viewcar'
        color="red"
        text
      >
        Cancle Order
      </v-btn>
      <v-btn
        to='/order'
        color="green"
        text
      >
        Confirm
      </v-btn>
    </v-card-actions>
  </v-btn>
  </v-card>

</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>