<script>
import axios from "axios";

export default {
  name: "Shop",

  data() {
    return {};
  },

  methods: {
    getShopItems: function() {
      const store = this.$root.$data;

      axios
        .get(
          store.apiBaseUrl + store.gameData.gameId + store.urlParams.shop
        )
        .then(response => {
          store.gameShop = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    buyItems: function(e) {
    const store = this.$root.$data;
    const adId = e.target.dataset.id;

    axios
      .post(
        store.apiBaseUrl +
          store.gameData.gameId +
          store.urlParams.shopItems +
          adId
      )
      .then(response => {
        if (response.data.shoppingSuccess) {
          
          store.gameData.gold = response.data.gold;
          
        store.gameData.lives = response.data.lives;
        store.gameData.level = response.data.level;
        store.gameData.turn = response.data.turn;
        }
        
      })
      .catch(error => {
        console.log(error);
      });
  }
  }
};
</script>

<template>
  <div class="w-100 text-center">
    <h2 class="display-5 text-center w-100 font-weight-bold mb-2">Shop</h2>
    <div class="lead text-center w-100 mb-5">Get the listing of items available in shop</div>
    <button @click="getShopItems">Show items</button>

    <div v-for="item in this.$root.$data.gameShop" v-bind:key="item.id">
      <p @click="buyItems" v-bind:data-id="item.id">{{ item.name }} - {{ item.cost }}</p>
    </div>
  </div>
</template>

<style lang="scss">
</style>
