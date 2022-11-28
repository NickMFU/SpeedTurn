<template>
   <div>
  <v-card>
  <div class="field">
    <label class="label">Product Number</label>
    <div class="control">
      <input class="input"  type="text" placeholder="Product Number" v-model="proNum" />
    </div>
  </div>
  <div class="field">
    <label class="label">Product Name</label>
    <div class="control">
      <input class="input"  type="text" placeholder="Product Name" v-model="proName"/>
    </div>
  </div>
  <div class="field">
    <label class="label">Price</label>
    <div class="control">
        <input class="input" type="text" placeholder="Price" v-model="proPrice"/>
    </div>
  </div> 
 
    <div class="control">
      <v-btn to='/cityinfo' @click="saveProduct" color="blue"
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
  name: "AddProduct",
  data() {
    return {
      proNum: "",
      proName: "",
      proPrice: "",
    };
  },
  methods: {
    // Create New product
    async saveProduct() {
      try {
        await axios.post("http://localhost:5000/productCreate", {
          PRO_NUM: this.proNum,
          PRO_NAME: this.proName,
          PRICE: this.proPrice,
        });

        this.proNum = "";
        this.proName = "";
        this.proPrice = "";

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