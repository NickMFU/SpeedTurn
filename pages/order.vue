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
            <template>
<v-list-item>
            <v-list-item-action>
              <v-icon></v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-btn
          class="green"
          text
          v-bind="attrs"
          v-on="on"
        >
          Order 4001: Mr.gormot lolem-Honda city 2021 
        </v-btn>
        <v-btn
            class="mt-6"
            text
            color="red"
            @click="sheet = !sheet"
          >
            Status : Wait for an appointment
          </v-btn>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon></v-icon>
            </v-list-item-action>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-action>
              <v-icon></v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-btn
          class="green"
          text
          v-bind="attrs"
          v-on="on"
        >
          Order 4002: Mr.micky sor-Honda Civic e:HEV EL+
        </v-btn>
              <v-btn
            class="mt-6"
            text
            color="red"
            @click="sheet = !sheet"
          >
            Status : complete
          </v-btn>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon></v-icon>
            </v-list-item-action>
          </v-list-item>

          <v-divider inset></v-divider>
</template>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
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
