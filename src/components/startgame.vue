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
      <h2 class="display-5 w-100 font-weight-bold mb-2 text-center">Welcome to the game of dragons and stuff</h2>
      <div class="text-center w-100 mb-5">You play as a dragon trainer who works on tasks from the villagers. You must complete the task to get gold coins for which you can buy things from the shop that will help you complete the tasks in hand.</div>
      
      <div class="start text-center">
        <b-form-input class="text-center pt-3 pb-3 pl-5 pr-5 w-100 shadow" v-model="userName" placeholder="Enter your name"></b-form-input>
        <p class="alert alert-danger" v-if="showWarning">You have to insert your name to start the game!</p>
      <b-button v-on:click="startTheGame" class="shadow btn btn-dark font-weight-bold mt-4 mb-4 pt-3 pb-3 pl-5 pr-5 w-100" size="lg">Start the game</b-button>
      </div>
      
    </b-row>
  </b-container>
</template>

<style lang="scss">
.start {
  margin: 0 auto;
  input {
    height: 70px;
    border: none;
  }
}
</style>
