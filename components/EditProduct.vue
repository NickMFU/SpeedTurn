<template>
    <div>
  
      <div class="field">
        <label class="label">Product Number</label>
        <div class="control">
          <input class="input"  type="text" placeholder="Product Name" v-model="proNum" disabled/>
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
          <button class="button is-success" @click="updateProduct">UPDATE</button>
        </div>
      </div>
    </template>

    <script>
    // import axios
    import axios from "axios";

    export default {
      name: "EditProduct",
      data() {
        return {
          proNum: "",
          proName: "",
          proPrice: "",
        };
      },
      created: function () {
        console.log('The id is: ' + this.$route.params.id);
        this.getProductById();

      },
      methods: {
        // Get Product By Id
        
        async getProductById() {
          try {
            var paramid = this.$route.params.id;
            var uri = "http://localhost:5000/productEdit/";
           const response = await axios.get(
            uri+paramid
             // "http://localhost:5000/productEdit/"+ ${this.$route.params.id}
           );
            this.proNum = response.data.PRO_NUM;
            this.proName = response.data.PRO_NAME;
            this.proPrice = response.data.PRICE;
          } catch (err) {
             console.log(err);
          }
        },

        // Update product
        async updateProduct() {
          try {
             await axios.put(
              `http://localhost:5000/productEdit/${this.$route.params.id}`,
              {
                product_name: this.proName,
                product_price: this.proPrice,
              }
            );
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