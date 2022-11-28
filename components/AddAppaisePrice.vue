<template>
    <div>
   <v-card>
   <div class="field">
     <label class="label">Appraise price</label>
     <div class="control">
       <input class="input"  type="text" placeholder="Appraise price" v-model="appprice" />
     </div>
   </div>
   <div class="field">
     <label class="label">Appraise Date</label>
     <div class="control">
       <input class="input"  type="text" placeholder="Appraise Date" v-model="apdate"/>
     </div>
   </div>
   <div class="field">
     <label class="label">Car ID</label>
     <div class="control">
         <input class="input" type="text" placeholder="Car ID" v-model="carid"/>
     </div>
   </div> 
  
     <div class="control">
       <v-btn to='/cityinfo' @click="saveAppaisePrice" color="blue"
           dark
          >SAVE</v-btn>
     </div>
   </v-card>
   </div>
 </template>
  
 <script>
 // import axios
 import axios from "axios";
  
 export default {
   name: "AddAppaisePrice",
   data() {
     return {
        appprice: "",
        apdate: "",
        carid: "",
     };
   },
   methods: {
     // Create New product
     async saveAppaisePrice() {
       try {
         await axios.post("http://localhost:5000/AppaisePriceCreate", {
           Ap_price: this.appprice,
           Ap_date: this.apdate,
           Car_id: this.carid,
         });
 
         this.appprice = "";
         this.apdate = "";
         this.carid = "";
 
         this.$router.push("/");
       } catch (err) {
         console.log(err);
       }
     },
   },
 };
 </script>
  
 <style>
 </style>