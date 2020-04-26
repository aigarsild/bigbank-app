<script>
import Investigation from "./actions/investigation.vue";
import Messages from "./actions/messages.vue";
import Shop from "./actions/shop.vue";

export default {
  name: "Dashboard",

  components: {
    Investigation,
    Messages,
    Shop
  }
};
</script>

<template>
  <b-container fluid="lg" class="dashboard">
    <h1 class="display-5 text-center w-100 font-weight-bold mb-2">Hello {{ this.$root.$data.userName }}</h1>
    <div class="lead text-center w-100 mb-5">You are a big dragon man</div>

    <b-row>
      <b-col cols="12" md="8">
        <Messages></Messages>
      </b-col>

      <b-col cols="12" md="4">
        <Shop></Shop>
      </b-col>
    </b-row>
    <Investigation></Investigation>
    
    
  </b-container>
</template>

<style lang="scss">
.dashboard {
  padding-top: 80px;
}
</style>
