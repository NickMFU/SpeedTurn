<template>
    <v-main class="grey lighten-3">
        <v-container>
        <v-row align="center" justify="center" >
             <v-col cols="12"
              sm="6"
              md="4">
                <v-card class="elevation-6 mt-10"  >
                        <v-card-text class="mt-12">
                          <h2
                            class="text-center"
                          >Admin verify</h2>
                          <h6
                            class="text-center  grey--text "
                          >Admin, please help fill in the admin ID and password  to confirm the login.</h6>
                          <v-row align="center" justify="center">
                            <v-col cols="12" sm="8">
                            <v-text-field
                              label="Admin ID"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                             class="mt-16"
                            />
                            <v-text-field
                              label="Password"
                              outlined
                              dense
                              color="blue"
                            autocomplete="false"
                             type="password"
                            
                            />
                              <v-row>
                                <v-col cols="12" sm="7">
                                </v-col>
                              </v-row>
                            <v-btn color="blue" dark block tile to='/viewcar'>Log in</v-btn>
                            </v-col>
                          </v-row>  
                        </v-card-text>
                    </v-card>
                      </v-col>
                    </v-row>
                </v-container>
                </v-main>
  </template>
  
  <script>
    
    export default {
     data: () => ({
      step: 1
    }),
    props: {
      source: String
    } 
      
    }
  </script>
  <style scoped>
  .v-application .rounded-bl-xl {
      border-bottom-left-radius: 300px !important;
  }
  .v-application .rounded-br-xl {
      border-bottom-right-radius: 300px !important;
  }
  </style>