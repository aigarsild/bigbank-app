<script>
import Messages from "./actions/messages.vue";
import Shop from "./actions/shop.vue";
import Investigation from "./actions/investigation.vue";

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
    <b-row>
      <b-col cols="12" md="8" class="pr-5">
        <h1 class="display-5 w-100 font-weight-bold mb-2">Welcome {{ this.$root.$data.userName }} !</h1>
        <div class="w-100 mb-1">

          <div>Here you can see all the messages/task people have left you to solve.</div>
          <div>We also have a shop here so you can buy things that you'll need to solve the tasks.</div>
          <div>
            <strong>Good luck!</strong>
          </div>
          
        </div>
        <Investigation></Investigation>
        <Messages></Messages>
      </b-col>

      <b-col cols="12" md="4" class="text-center shop-col pt-5">
        <Shop></Shop>
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss">
.dashboard {
  padding-top: 80px;

  .shop-col {
    background-color: #7fccdf;
    border-radius: 0.25rem;
    color: #3b4680;
  }
}
</style>
