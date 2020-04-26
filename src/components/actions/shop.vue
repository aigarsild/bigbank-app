<script>
import axios from "axios";

export default {
  name: "Shop",

  data() {
    return {
      taskMessage: "You need more money for that item"
    };
  },

  async created() {
    this.getShopItems();
  },

  methods: {
    getShopItems: function() {
      const store = this.$root.$data;

      axios
        .get(store.apiBaseUrl + store.gameData.gameId + store.urlParams.shop)
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

            this.getShopItems();
            return;
          }
          this.showModal();
        })
        .catch(error => {
          console.log(error);
        });
    },
    showModal() {
      this.$refs["shop-modal"].show();
    },
    hideModal() {
      this.$refs["shop-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["shop-modal"].toggle("#toggle-btn");
    }
  }
};
</script>

<template>
  <div class="w-100">
    <b-modal ref="shop-modal" id="modal-1" title="BootstrapVue" ok-only>
      <p class="my-4">{{ this.taskMessage }}</p>
    </b-modal>
    <h2><BIconSun></BIconSun></h2>
    <h2 class="display-5 w-100 font-weight-bold mb-2">Shop</h2>
    <div class="w-100 mb-5">Here's a listing with all the items in the shop</div>

    <div class="row shop text-center">
      <div
        class="w-100 mb-5 ml-5 mr-5"
        v-for="item in this.$root.$data.gameShop"
        v-bind:key="item.id"
      >
        <b-card class="shadow border-0 mb-4 shop-item">
          <div v-if="item.cost <= 50" class="h1">
            <BIconBullseye></BIconBullseye>
          </div>

          <div v-else-if="item.cost > 50 && item.cost <= 100" class="h1">
            <BIconLightningFill></BIconLightningFill>
          </div>

          <div v-else class="h1">
            <BIconShieldShaded></BIconShieldShaded>
          </div>

          <b-card-title>{{ item.name }}</b-card-title>
          <span class="price">{{ item.cost }}.-</span>
          <p class="small text-muted">coins for this item</p>
          <p
            @click="buyItems"
            v-bind:data-id="item.id"
            class="shadow btn btn-dark font-weight-bold mt-2 mb-2 pt-3 pb-3 pl-5 pr-5 w-100"
          >Buy</p>
        </b-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.shop {
  justify-content: flex-end;
}

.card.shop-item {
  background-color: #3b4680;
  color: #ffffff;

  h4 {
    font-weight: bold;
    font-size: 1rem;
  }

  .text-muted {
    color: #9b9eb1 !important;
  }

  .price {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .btn {
    background-color: #89ffc7;
    color: #212529;
  }
}
</style>
