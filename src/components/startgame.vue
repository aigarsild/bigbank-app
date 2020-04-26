<script>
import axios from 'axios';

export default {
  name: 'Startgame',

  props: {
    msg: String
  },

  data() {
    return {
      userName: '',
      showWarning: false
    };
  },

  methods: {
    startTheGame: function() {
      const store = this.$root.$data;

      if (!this.userName) {
        this.showWarning = true;
        console.log(this.showWarning);
        return;
      }

      store.userName = this.userName;

      axios
        .post(store.apiBaseUrl + store.urlParams.startGame)
        .then(response => {
          store.gameData = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<template>
  <b-container fluid="lg min-vh-100 align-content-center d-flex">
    <b-row align-v="center" class="align-content-center w-100">
      <h2 class="text-center w-100">Welcome to game of dragons and stuff</h2>
      <b-form-input class="text-center w-100" v-model="userName" placeholder="Enter your name"></b-form-input>
      <p class="alert alert-danger" v-if="showWarning">You have to insert your name to start the game!</p>
      <b-button v-on:click="startTheGame" size="lg">Start the game</b-button>
    </b-row>
  </b-container>
</template>

<style lang="scss">
</style>
