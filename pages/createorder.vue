<template>
  <v-main class="grey lighten-3">
  <v-card>
      <v-card-title>
        <span class="text-h5">Create order turn car</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="First name"
                required
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="Surename"
                hint="example of helper text only on focus"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
            <v-text-field
             label="Tel."
             required
           ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Your car sample info (ex:brand,model,colour,year)"
                required
              ></v-text-field>
            </v-col>
           
             
            <v-col
              cols="12"
            >
            <v-file-input
    label="File input"
    filled
    prepend-icon="mdi-camera"
  ></v-file-input>
            </v-col>
            <v-img class="white--text align-end"
            max-height="150"
            max-width="250"
            src = "https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg"></v-img>
          </v-row>
        </v-container>
        <small>*Pleaes complete all field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          to='/cityinfo'
          color="blue darken-1"
          text
          @click="dialog = false"
        >
          Back
        </v-btn>
        <v-btn
          to='/home'
          color="blue darken-1"
          text
          @click="dialog = false"
        >
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-main >
</template>

<script>
  export default {
    
  }
</script>